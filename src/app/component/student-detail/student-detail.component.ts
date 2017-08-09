import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
/* interfaces */
import { IStudentList } from 'app/interface/student-list';
/* services */
import { StudentService } from 'app/service/Student.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  StudentsArray: IStudentList[] = [];
  private sub: any;
  private queryParameter: any;
  private studentName: string;
  private StudentDetail: IStudentList;

  constructor(private _student_Service: StudentService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._student_Service.getStudentList().subscribe((response) => {
      this.StudentsArray = response
      this.sub = this.route.params.subscribe(params => {
        this.studentName = params['studentName'];
        for (var i = 0; i < this.StudentsArray.length; i++) {
          if (this.studentName == this.StudentsArray[i].studentName) {
            this.StudentDetail = this.StudentsArray[i];
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();

  }
}
