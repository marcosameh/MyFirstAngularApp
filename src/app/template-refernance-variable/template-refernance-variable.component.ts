import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refernance-variable',
  templateUrl: './template-refernance-variable.component.html',
  styleUrls: ['./template-refernance-variable.component.scss']
})
export class TemplateRefernanceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 displayUserName(userName)
  {
  console.log(userName);
  }
}
