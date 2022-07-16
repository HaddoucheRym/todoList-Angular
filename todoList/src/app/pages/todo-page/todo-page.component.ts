import { Component, OnInit } from '@angular/core';
import task from 'src/app/data/task';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

 listTask: any[] = task;

  constructor() { }

  ngOnInit(): void {
  }

}
