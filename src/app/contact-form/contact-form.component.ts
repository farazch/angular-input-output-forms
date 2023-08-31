import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
})

constructor(private data:DataService){

}

initializeForm() {
  this.form.setValue({
    title: 'Complete me', 
    description: 'Now!'})
}

  ngOnInit(): void {
    this.initializeForm();
  }

  log(x:any) {
    console.log(x);
    this.data.sendNotification(x.value);
  }

  empty(){
    console.log("Empty function");
  }

  onSubmit(login:any){
    console.log("first name:",login.firstName);

  }


}
