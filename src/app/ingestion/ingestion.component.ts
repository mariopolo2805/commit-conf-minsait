import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { Person } from '../shared/person.model';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.scss']
})
export class IngestionComponent implements OnInit {

  persons: Person[] = null;
  file: File;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.fadeIn();
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

  generatePersons(data: any[]) {
    const dataTransformed = this.transformData(data);
    this.appService.persons = dataTransformed.map((elem: any) => {
      const person: Person = {
        id: elem[0],
        fullname: elem[1],
        email: elem[2],
      };
      return person;
    });
  }

  transformData(data: any[]) {
    let dataTransformed = [...data];
    dataTransformed.shift();
    dataTransformed = dataTransformed.filter((el) => el[0]);
    dataTransformed = this.removeDuplicates(dataTransformed);
    return dataTransformed;
  }

  removeDuplicates(data: any[]) {
    return data.filter((elem, index, self) => index === self.findIndex(
      (t) => (t[0] === elem[0] || t[2] === elem[2])
    ));
  }

  onAnchorClick() {
    this.getRandomPerson(this.appService.persons);
  }

  getRandomPerson(persons: Person[]) {
    const random = Math.floor(Math.random() * persons.length);
    this.appService.winner = persons[random];
  }
}
