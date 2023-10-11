import { Injectable } from '@angular/core';
import { ValidatorService } from './validator.service';
import { ErrorsService } from './errors.service';
import { Observable, max } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private validatorService:ValidatorService,
    private errorService:ErrorsService,
    private http :HttpClient,
  ) { }

  
  public esquemaUser(){

    return{
      'matricula' :'',
      'first_name' :'',
      'second_name' :'',  
      'last_name' :'',
      'email' :'',
      'password' :'',
      'confirmar_password' :'',
      'fecha_nacimiento' :'',
      'ocupacion' :'',
      'telefono' :'',  
      'edad' :'', 
    }

  }
  
public validarUsuario(data:any){

  console.log("Validando User...", data);

  let error:any=[];

  if(!this.validatorService.required(data["matricula"])){
    error["matricula"] = this.errorService.required;
  }
  if(!this.validatorService.required(data["first_name"])){
    error["first_name"] = this.errorService.required;
  }
  if(!this.validatorService.required(data["second_name"])){
    error["second_name"] = this.errorService.required;
  }
  if(!this.validatorService.required(data["last_name"])){
    error["last_name"] = this.errorService.required;
  }

  if(!this.validatorService.required(data["email"])){
    error["email"] = this.errorService.required;
  }else if(!this.validatorService.max(data["email"], 40)){
    error["email"]= this.errorService.max(40);
  }else if(!this.validatorService.email(data['email'])){
    error["email"]= this.errorService.email;
  }
  
  if(!this.validatorService.required(data["password"])){
    error["password"] = this.errorService.required;
  }
  
  if(!this.validatorService.required(data["confirmar_password"])){
    error["confirmar_password"] = this.errorService.required;
  }
  
  if(!this.validatorService.required(data["fecha_nacimiento"])){
    error["fecha_nacimiento"] = this.errorService.required;
  }

  if(!this.validatorService.required(data["curp"])){
    error["curp"] = this.errorService.required;
  }else if(!this.validatorService.min(data["curp"], 18)){
    error["curp"]=this.errorService.max(18);
    alert("la longitud de caracteres de una curp es es menor, deben ser 18 ");
  }else if(!this.validatorService.max(data['curp'] ,18)){
    error["curp"]=this.errorService.max(18);
    alert("la longitud de caracteres de una curp es es mayor, deben ser 18 ");
  }

  if(!this.validatorService.required(data["rfc"])){
    error["rfc"] = this.errorService.required;
  }else if(!this.validatorService.min(data["rfc"], 12)){
    error["rfc"]=this.errorService.max(12);
    alert("la longitud de caracteres de una curp es es menor, deben ser 12 ");
  }else if(!this.validatorService.max(data['rfc'] ,13)){
    error["rfc"]=this.errorService.max(13);
    alert("la longitud de caracteres de una curp es es mayor, deben ser 13 ");
  }
  
  return error;

}

public registrarUsuario(data:any):Observable<any>{
  return this.http.post<any>( `${environment.url_api}/users/ `,data,httpOptions);
}

}