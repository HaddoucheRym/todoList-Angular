import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input()
tache : any;
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
