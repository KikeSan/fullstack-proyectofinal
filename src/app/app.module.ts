import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AulasComponent } from './aulas/aulas.component';
import { HeaderComponent } from './header/header.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AulasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
