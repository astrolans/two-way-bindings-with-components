import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputPsKwComponent } from './input-ps-kw/input-ps-kw.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPsKwComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
