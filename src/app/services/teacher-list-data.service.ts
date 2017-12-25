import { Injectable } from '@angular/core';
import { Http } from '@angular/http';       // Importing Http
import 'rxjs/add/operator/map';             // Importing react JS extension operator map

@Injectable()
export class TeacherListDataService {

  // injecting Http via constructor
  constructor(public http:Http) {
    console.log("TeacherListDataService constructor executing");
  }

  getTeachers() {
    // Below returns an "observable" from rxjs (react JS extension)
    return this.http.get('http://localhost:9016/api/v1/teachers').map( response => response.json()); // rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }

}

// Using 'export' below allows any component using this service to be able to import the below interface
export interface Teacher
{
  teacherId: string,
  name: string,
  lastname: string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn: Date
}