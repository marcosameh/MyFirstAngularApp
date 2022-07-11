import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
 Text="Old Text"
  constructor() { }

  ngOnInit(): void {
  }
  DisplayMsg():void {
    this.Text="New Textt"
    console.log("Massage")
  }
}
