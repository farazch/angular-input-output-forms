import { AfterViewInit, Component } from '@angular/core';
import { OnInit }  from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs';
import { tap } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs';
import { take } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {ajax} from "rxjs/ajax";

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

  public pd: any = "In parentt";

  //public employees = [];
  public employees:any[] = [];
  originalDate = new Date();

  context = {
    username: "Ali12",
    firstName: "Ali",
    lastName: "Asad"

  }

  constructor(private list:DataService){ }


  public age = [3,4,5,6];

  public class = [5,6];

  //Observable<any>
  ngOnInit() {
    /*
    of(2,4).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );
    */
    
    /*
    from([110,112]).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );
    */

    const testObj = {"age":"1"}; // this can b accessed by testObj.age


    // creating observable
    const observable = new Observable(obj => console.log(obj.next(Math.random())));   // Math.random()   //testObj

    // creating subscriber 1
    const subscriber = observable.subscribe(d=>console.log("RAND IN SUBSC1:",d));


    // creating subsciber 2
    const subsciber = observable.subscribe(d => console.log("RAND IN SUBSC2:", d));
    // both subscriber will have two different random numbers
    // that means everytime new subscriber will come, a new execution is created for that and hence it is UNICAST

    // and this can b cause problem cuz sometime we want every subscriber shd receive same data
    // so default behaviour of observable will not work and we use Subjects to overcome this issue
    // as subjects are MULTICAST ... ie casting to multiple  
    // one observable execution is shared by multiple subscribers
    // subjects are like eventEmitter ie we have button and function on click of that button let say handler
    // on every click same handler will be called ie same event will get emit
    // observable are one to one and subjects are one to many
    // subjects are like radio where same message is send to all listeners
    // subject is providing data to subscribers but sometime subject is used as data consumer



      // CONVERTING ABOVE CODE TO  SUBJECT
    const subjects = new Subject();

    subjects.subscribe(d => console.log("Subject 1: ",d));

    subjects.subscribe(d => console.log("Subject 2:",d));

    subjects.next(Math.random());




    // CONVERTING ABOVE CODE TO bahavior subject SUBJECT
    const subject = new BehaviorSubject(12345);

    subject.subscribe(d => console.log("Subject 1: ",d));

    subject.subscribe(d => console.log("Subject 2:",d));

    subject.next(Math.random());

    // getting data through ajax for subject so subject is being used as data consumer
    const data = ajax("https://jsonplaceholder.typicode.com/users");

    //data.subscribe(d=>console.log("Ajax data with subscriber:",d));
    //data.subscribe(d=>console.log("Ajax data with subscriber:",d));


    const subjecta = new Subject(); 
    const datas = ajax("https://jsonplaceholder.typicode.com/users");
    //subjecta.subscribe();
    subjecta.subscribe(d=>console.log("Ajax data with subscriber:",d));
    subjecta.subscribe(d=>console.log("Ajax data with subscriber:",d));

    const result =  datas.subscribe(subjecta);


    
    from(this.age)
      .pipe(
        tap(item => console.log(`emitted itemm .....  ${item}`)),  // used for debugging
        map(item => item * 2),      //
        map(item => item - 10),   // take(2)
        map(item => {
          if(item === 0){
            throw new Error('Zero detected');
         }
          })
      )
      .subscribe(
        item => console.log(`resulting itemm ... ${item}`),
        err => console.log(`error occured ... ${err}`),
        () => console.log("Completed")
      );


    this.artistss = this.list.getList();
    //this.artistss = this.list.getList();
    console.log('OnInit:',this.artistss[0].name);

    this.list.getEmployees()
      .subscribe(data => this.employees = data);

    //console.log('THIS EMP:',this.employees);  

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
