import { Component, OnInit } from '@angular/core';
import { WinnerService } from '../shared/winner.service';
import { Person } from '../shared/person.model';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.scss']
})
export class IngestionComponent implements OnInit {

  file: File;

  constructor(private winnerService: WinnerService) { }

  ngOnInit() {
  }

  onBtnClick() {
    document.getElementById('uploadFile').click();
  }

  onFileChange({ target }) {
    this.file = target.files[0];
    if (target.files.length !== 1) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const wb: XLSX.WorkBook = XLSX.read(e.target.result, { type: 'binary' });
      const data = (XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 }));
      this.generatePersons(data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  generatePersons(data: any) {
    data.shift();
    const persons: Person[] = data.map((elem: any) => {
      const person: Person = {
        id: elem[0],
        fullname: elem[13]
      };
      return person;
    });
    this.getRandomPerson(persons);
  }

  getRandomPerson(persons: Person[]) {
    const random = Math.floor(Math.random() * persons.length);
    this.winnerService.winner = persons[random];
    console.log(this.winnerService.winner);
  }
}
