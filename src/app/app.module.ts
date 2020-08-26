import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';


var config = {
  apiKey: "AIzaSyDHh4vLqkYymd_kar-S_cfuZnaKM_6dzJE",
  authDomain: "ng2multiplayer.firebaseapp.com",
  databaseURL: "https://ng2multiplayer.firebaseio.com",
  projectId: "ng2multiplayer",
  storageBucket: "ng2multiplayer.appspot.com",
  messagingSenderId: "885724816796"
};

const appRoutes: Routes = [
  { path: 'game', component: GameComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AngularFireDatabase, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
