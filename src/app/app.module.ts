import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AulasComponent } from './aulas/aulas.component';
import { HeaderComponent } from './header/header.component';
import { LogService } from './log.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee,faAngleRight,faEnvelope, faLock, faUsers,faIdBadge } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AulasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faCoffee,faAngleRight, faEnvelope, faLock, faUsers, faIdBadge);
  }
 }
