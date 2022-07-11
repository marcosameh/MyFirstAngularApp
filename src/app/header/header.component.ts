import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle:string="hallo marco";
  siteUrl=window.location.href;
  MyId="12";
 Error=true;

 setOfClasses={
  "text-specific":true,
   "text-danger":this.Error,
   "text-green":!this.Error
 }
 
  constructor() { }
  
  ngOnInit(): void {
  }
   LogConsole():void{
    console.log("hi console")
   }


}

