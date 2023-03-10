import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TachesComponent } from './component/taches/taches.component';
import {RegisterComponent} from './component/register/register.component'
import { IsSignedInGuard } from './is-signed-in.guard';
import { MdpOublieComponent } from './component/mdp-oublie/mdp-oublie.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'taches',
    component: TachesComponent,
    canActivate: [IsSignedInGuard]

  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'oublie',
    component: MdpOublieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
