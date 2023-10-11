import { Component, OnInit } from '@angular/core';
//import { UsuariosService } from 'src/app/service/tools/usuarios.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

  public editar: boolean=false;
  public user: any={};
  public errors:any ={};
  
  public hide_1:boolean=false;
  public hide_2:boolean=false;
  public inputType_1:string="password";
  public inputType_2:string="password";


  
  constructor(
    private router : Router
    ){}
  
  ngOnInit():void{
    console.log("User: ",this.user);
  }
  
  public regresar() {
  
  }

  showPassword()  {    
  if(this.inputType_1=='password'){
    this.inputType_1='text'; 
    this.hide_1=true;
  } 
  else{     
        this.inputType_1 = 'password';
        this.hide_1 = false;    }
                          }


  public showPasswords(){

    if(this.inputType_2=='password'){
      this.inputType_2='text'; 
      this.hide_2=true;
    } 
    else{     
          this.inputType_2 = 'password';
          this.hide_2 = false;    }
  
  
  }


  public changeFecha(event:any)
  {
    console.log(event);
    console.log(event.value.toISOString());
    this.user.fecha_nacimiento =event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
  }
  

  public registrar(){

    

    console.log("Datos del usuario: ",this.user);
  }


}

