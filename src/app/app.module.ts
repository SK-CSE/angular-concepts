import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ReactiveformModule } from './reactiveform/reactiveform.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ReactiveformModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
