import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-structural-directives]',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
name="marco";

Degree=4;
IsloggedIn=true;


  ngOnInit(): void {
  }

}
