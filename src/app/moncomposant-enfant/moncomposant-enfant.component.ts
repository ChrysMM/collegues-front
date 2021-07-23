import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-moncomposant-enfant',
  template: `<h1 (click)="declencheCallEvent()">{{title}}</h1>`,
  styleUrls: ['./moncomposant-enfant.component.css']
})
export class MoncomposantEnfantComponent implements OnInit,OnChanges {
  /**
   * title devient un attribut personnalisé html de la balise du composant
   * pour faire le lien avec une donnée du composant parent
   * on utilise les [] pour récupérer la variable ???
   * on utilise un evénement personnalisé callEvent grâce à @Output
   * on lui donne le nom d'une méthode avec en paramètre $event (qui est l'injection d'évènement d'Angular)
   * <app-moncomposant-enfant [title]="???" (callEvent)="!!!($event)"></app-moncomposant-enfant>
   */
  @Input() title : string;
  @Output() callEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { console.log("CONSTRUCTOR")}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }
  ngOnInit(): void {
    console.log("OnInit");
  }
  declencheCallEvent() : void  {
    this.callEvent.emit("Mon enfant !");
  }
}
