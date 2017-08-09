import { Injectable } from '@angular/core';
import { ISubjectType } from 'app/interface/student-subject';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {

  private url: string = "http://localhost:3001/api/";

  constructor(private _http: Http) { }
  
  /* Session 14 : 
     github path : https://github.com/SudeshMehtaGoa/ses_14_nodeApi
     web URL : http://localhost:3001/api/getSubjectType 
  */

  /** Get the Subjects */
  getSubjectType(): Observable<ISubjectType[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.get(`${this.url}getSubjectType`, options)
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

/*

import { Injectable } from '@angular/core';
import { ISubjectType } from 'app/interface/student-subject';

@Injectable()
export class SubjectService {

  subjectType: ISubjectType[] = [];
  constructor() { }

  // Get the Subjects 
  getSubjectType() {
    return this.subjectType = [
      {
        id: 1,
        type: 'English'
      },
      {
        id: 2,
        type: 'Maths'
      },
      {
        id: 3,
        type: 'Science'
      },
      {
        id: 4,
        type: 'History'
      },
      {
        id: 5,
        type: 'Geography'
      }
    ];
  }
}
*/