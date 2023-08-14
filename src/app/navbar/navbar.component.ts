import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
