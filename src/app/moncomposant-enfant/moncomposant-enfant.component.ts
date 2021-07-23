import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-moncomposant-enfant',
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['./moncomposant-enfant.component.css']
})
export class MoncomposantEnfantComponent implements OnInit {

  @Input() title : string;

  constructor() {console.log("CONSTRUCTOR") }

  ngOnChange(changes: SimpleChanges): void {
    console.log("OnChange");
  }
  ngOnInit(): void {
    console.log("OnInit");
  }

}
