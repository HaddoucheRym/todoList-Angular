import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  @Input()
  tache : any;
  constructor() { }

  ngOnInit(): void {
  }
delete(index:number):void{
this.tache.splice(1,index);
}
}
