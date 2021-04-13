import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HogeComponent } from './hoge/hoge.component';
import { FugeComponent } from './fuge/fuge.component';
import { TopComponent } from './top/top.component';
import { SecondComponent } from './second/second.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FugeComponent,
    TopComponent,
    SecondComponent
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
