import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AzerisComponent } from './azeris/azeris.component';
import { ClassicComponent } from './azeris/classic/classic.component';
import { GlowComponent } from './azeris/glow/glow.component';

@NgModule({
  declarations: [
    AppComponent,
    AzerisComponent,
    ClassicComponent,
    GlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
