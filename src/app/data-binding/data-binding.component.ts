import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
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

}
