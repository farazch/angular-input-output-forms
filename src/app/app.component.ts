import { AfterViewInit, Component } from '@angular/core';
import { OnInit }  from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { of } from 'rxjs';
import { delay } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  public artists:string = '';
  //public artistss = ['grade':'','name':'','country':''];
  //public artistss = [];
  public artistss : any[] = [];
  public foo:number = 2;

  //public employees = [];
  public employees:any[] = [];
  originalDate = new Date();

  context = {
    username: "Ali12",
    firstName: "Ali",
    lastName: "Asad"

  }

  constructor(private list:DataService){ }


  ngOnInit() {
    this.artistss = this.list.getList();
    //this.artistss = this.list.getList();
    console.log('OnInit:',this.artistss[0].name);

    this.list.getEmployees()
      .subscribe(data => this.employees = data);

    console.log('THIS EMP:',this.employees);  

    /*
    of(1,2,3).pipe(
      tap(val => console.log("Before " + val)),
      delay(200));
    */

  }

  @ViewChild('div1') div1! : ElementRef; 

  @ViewChild('contact') contact! : ContactFormComponent; 


  title = 'hello-world';
  parentData = "Parent Data";

  headings = ['hh1','hh2','hh3'];

  depts = ['Dev','HR','Admin'];

  var1 = "Waoo";

  addHeading(newHeading:string){
    this.headings.push(newHeading);

  }

  addDept(newDept:string)
  {
    this.depts.push(newDept);
  }


  ngAfterViewInit(): void {
    //console.info(this.div1!.nativeElement.innerHTML);
    //console.log(this.contact!.log(2));
    console.log(this.contact!.empty());
  }



}
