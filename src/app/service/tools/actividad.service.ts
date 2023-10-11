import { Injectable } from '@angular/core';
import { ValidatorService } from './validator.service';
import { ErrorsService } from './errors.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  
  constructor(private validatorService: ValidatorService,
    private errorService: ErrorsService,
    private http:HttpClient,) { }

  public esquemaActivity() {
    return{
      'tarea': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'fecha_cita': '',
      'edad': '',
      'telefono': '',
      'notas':''
    }
  
  }

  public validarTarea(data: any){
    console.log("Validando user...", data);
    let error: any =[];

    if (!this.validatorService.required(data["tarea"])) {
      error["tarea"] = this.errorService.required;
    }
    if (!this.validatorService.required(data["first_name"])) {
      error["first_name"] = this.errorService.required;
    }
    if (!this.validatorService.required(data["last_name"])) {
      error["last_name"] = this.errorService.required;
    }

    if (!this.validatorService.required(data["email"])) {
      error["email"] = this.errorService.required;
    }else if (!this.validatorService.max(data["email"], 40)) {
      error["email"] = this.errorService.max(40);
    }else if (!this.validatorService.email(data["email"])) {
      error["email"] = this.errorService.email;
    }
    

    if (!this.validatorService.required(data["fecha_cita"])) {
      error["fecha_cita"] = this.errorService.required;
    }

    if (!this.validatorService.required(data["curp"])) {
      error["curp"] = this.errorService.required;
    }else if (!this.validatorService.max(data["curp"], 18)) {
      error["curp"] = this.errorService.max(18);
      alert("La longitud de caracteres de la curp es mayor, debe ser 18");
    }else if (!this.validatorService.min(data["curp"],18)) {
      error["curp"] = this.errorService.min(18);
      alert("La longitud de caracteres de la curp es menor, debe ser 18");
    }

    if (!this.validatorService.required(data["edad"])) {
      error["edad"] = this.errorService.required;
    }else if (!this.validatorService.numeric(data["edad"])) {
      error["edad"] = this.errorService.numeric;
      alert("El formato solo es numerico");
    }

    if (!this.validatorService.required(data["telefono"])) {
      error["telefono"] = this.errorService.required;
    }

    return error;
    }

    //Aqui van los servicios Http
    //Servicio para registrar un nuevo usuario
    public registrarAgenda(data:any): Observable <any>{
      return this.http.post<any>(`${environment.url_api}/users/`,data, httpOptions);
    }

}
