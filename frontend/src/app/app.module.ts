import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TachesComponent } from './component/taches/taches.component';
import { FiltreTachePipe } from './pipe/filtre-tache.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TachesAfficheComponent } from './component/taches-affiche/taches-affiche.component';
import { RegisterComponent } from './component/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdpOublieComponent } from './component/mdp-oublie/mdp-oublie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TachesComponent,
    FiltreTachePipe,
    TachesAfficheComponent,
    RegisterComponent,
    MdpOublieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    FontAwesomeModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
