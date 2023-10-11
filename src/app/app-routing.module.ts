import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginScreenComponent}from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { PrincipalComponent } from './screens/principal/principal.component';
import { AgendarCitaComponent } from './screens/agendar-cita/agendar-cita.component';

const routes: Routes = [

  {path:'',component:LoginScreenComponent,pathMatch:'full'},  
  {path:'registro',component:RegistroScreenComponent,pathMatch:'full'},
  {path:'principal',component:PrincipalComponent,pathMatch:'full'},
  {path:'registrocita',component:AgendarCitaComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
