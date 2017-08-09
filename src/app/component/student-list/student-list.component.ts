/* Student List */
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
/* interfaces */
import { IStudentList } from 'app/interface/student-list';
/* services */
import { StudentService } from 'app/service/Student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: []
})
export class StudentListComponent implements OnInit {

  StudentsArray: IStudentList[] = [];
  //StudentsArray: Observable<IStudentList[]>;

  constructor(private _student_Service: StudentService) {
  }

  ngOnInit() {
    this._student_Service.getStudentList().subscribe((response) => {
      this.StudentsArray = response
    });

  }

  deleteData(deleteStudentName) {
    this._student_Service.deleteStudent(deleteStudentName).subscribe(data => {
      this._student_Service.getStudentList().subscribe((response) => {
        this.StudentsArray = response
      });
    }, error => console.log(error));
  };
}
