import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: FormGroup
  title: any;

  constructor(private fb:FormBuilder){
this.userForm=this.fb.group({
first_name:['',Validators.required],
last_name:['',Validators.required],
email:['',Validators.required]


})
}
ngOnInit(){

  }
}
