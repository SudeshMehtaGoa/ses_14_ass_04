import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  bolValidForm: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bolValidForm = false;

    this.myForm = this.fb.group({
      'loginName': ['', Validators.required],
      'loginPassword': ['', Validators.required]
    });

    sessionStorage.removeItem('access_token');
  }

  loginUser(values, formValid) {
    this.bolValidForm = formValid;
    if (this.bolValidForm) {
      sessionStorage.setItem('access_token', 'true');
    }
  }


}
