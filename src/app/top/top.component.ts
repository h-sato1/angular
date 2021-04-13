import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onClicked() {
    this.index++;
  }

  firstName: string = "test";
}
