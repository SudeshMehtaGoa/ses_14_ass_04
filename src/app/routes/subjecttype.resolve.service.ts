import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SubjectService } from 'app/service/Subject.service';


@Injectable()
export class SubjectTypeResolveService implements Resolve<any> {

  constructor(private _subjectService: SubjectService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this._subjectService.getSubjectType();
  }
}
