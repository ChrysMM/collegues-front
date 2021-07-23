import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { FormsModule } from '@angular/forms';
import { MoncomposantEnfantComponent } from './moncomposant-enfant/moncomposant-enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    MoncomposantEnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
