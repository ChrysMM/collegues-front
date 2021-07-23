import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moncomposant',
  template: `<div [align]="alignement">
                  <h1>{{uneChose}}</h1>
                  <h2 [hidden]="masque">{{unObjet?.nom}} {{unObjet?.prenom}}</h2>
                  <h2 *ngIf="!masque">{{unObjet?.nom}} {{unObjet?.prenom}}</h2>
                  <input type="text" [disabled]="masque" [value]="unObjet.nom" #saisieNom>
                  <h3 (click)="saisieNom.focus()">{{saisieNom.value}}</h3>
                  <button [disabled]="masque" (click)="masquer()">VALIDER</button>
                  <button (click)="afficher()">AFFICHER</button>
                  <hr/>
                  <input type="text" [(ngModel)]="unObjet.prenom">
                  <span>{{unObjet.prenom}}</span>
                  <hr/>
                  <app-moncomposant-enfant [title]="unObjet.prenom"
                    (callEvent)="emitCallEvent($event)">
                  </app-moncomposant-enfant>
                  <hr/>
                  <h4>{{retourCallEvent}}</h4>
            </div>`,
  styleUrls: ['./moncomposant.component.css']
})
export class MoncomposantComponent implements OnInit {
/**
 * Interpolation {{uneChose}} ou {{this.uneChose}}
 */
  public uneChose:string = 'UNE CHOSE';
  public unObjet:any = {nom:'Germain', prenom: "Christophe" };
  public alignement:string = 'center';
  public masque:boolean = true;

  //Pour le callEvent
  public retourCallEvent:string = 'vide';
  /**
   * Méthode qui va être appelé par le composant enfant
   * le paramètre message c'est la variable passée dans
   * la méthode emit("Mon enfant !")
   */
  emitCallEvent(message:string) : void {
      this.retourCallEvent = message;
  }

 constructor() { }

  ngOnInit(): void {
  }
  afficher() : void {
    this.masque = false;
  }
  masquer() : void {
    this.masque = true;
  }
}
