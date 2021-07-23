import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moncomposant',
  template: `<div [align]="alignement">
             <h1>{{uneChose}}</h1>
             <h2 [hidden]="masque">{{unObjet?.nom}}{{unObjet.prenom}}</h2>
            <h2 *ngIf="!masque">{{unObjet.nom}} {{unObjet.prenom}}</h2>
            <input type="text" [disabled]="masque" value="{{unObjet.nom}}" #saisieNom>
            <h3 (click)="saisieNom.focus()">{{saisieNom.value}}</h3>

            <button [disabled]= "masque" (click)="masquer()">VALIDER</button>

            <button (click)="afficher()">AFFICHER</button>
            <hr>
            <input type="text" [(ngModel)]="unObjet.prenom">
            <span>{{unObjet.prenom}}</span>
            </div>`,


  styleUrls: ['./moncomposant.component.css']
})
export class MoncomposantComponent implements OnInit {

  public uneChose:string = 'UNE CHOSE'
  public unObjet:any = {nom:'M-M', prenom:'Chrystelle'}
  public alignement:string = 'center';
  public masque:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
afficher() : void{
  this.masque = false;
}
masquer() : void{
  this.masque = true;
}

}
