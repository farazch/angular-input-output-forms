import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public artist:any = '';


  constructor(private data:DataService){

  }
  public contactname:string = '';
  ngOnInit(): void {
    this.data.notificationSubject.subscribe(d=>{
      this.contactname = d;

    });

    this.artist = this.data.getList();

    //this.artist = this.data.getList();
    //this.artistss = this.list.getList();
    
    console.log('OnInit in nav bar:',this.artist[0].name);
  }

  @Input() pd = "child data";
  @Output() newParentData = new EventEmitter<string>();

  @Output() newDeptData = new EventEmitter<string>();

  newHeading(value:string){
    this.newParentData.emit(value);
  }


  newDept(value:string)
  {
    this.newDeptData.emit(value);
  }

}
