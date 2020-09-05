import { CategoriasModule } from './features/categorias/categorias.module';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PRIMENG_IMPORTS,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CategoriasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
