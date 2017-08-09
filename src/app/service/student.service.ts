import { Injectable } from '@angular/core';
import { IStudentList } from 'app/interface/student-list';
import { ISubjectType } from 'app/interface/student-subject';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {

  private url: string = "http://localhost:3001/api/";

  constructor(private _http: Http) { }

  /** Add student in the service. */
  addStudent(studentDetail: IStudentList) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(`${this.url}addStudent`, { studentDetail }, options)
      .map(this.extractData)
      .catch(this.handleErrors)
  };

  /**Get the studesnt list from the service */
  getStudentList(): Observable<IStudentList[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.get(`${this.url}getStudents`, options)
      .map(this.extractData)
      .catch(this.handleErrors)
  }

  /**Delete Student */
  deleteStudent(studentName: string) {
    return this._http.delete(`${this.url}deleteStudent/${studentName}`, )
      .map(this.extractData)
      .catch(this.handleErrors)
  };


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };

  private handleErrors(error: Response) {
    return Observable.throw(error);
  };
}


