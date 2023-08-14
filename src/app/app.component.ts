import { Component } from '@angular/core';
import { OnInit }  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  ngOnInit() {
    console.log('OnInit');
  }

  title = 'hello-world';
  parentData = "Parent Data";

  headings = ['hh1','hh2','hh3'];

  depts = ['Dev','HR','Admin'];

  addHeading(newHeading:string){
    this.headings.push(newHeading);

  }

  addDept(newDept:string)
  {
    this.depts.push(newDept);
  }


}
