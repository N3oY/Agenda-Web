import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/service/tools/actividad.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})

export class AgendarCitaComponent implements OnInit{
  public editar: boolean = false;
  public actividad: any = {};

  //errors
  public errors: any = {};
  constructor(
    private router: Router,
    private actividadService: ActividadService,
  ) {
  }

  ngOnInit(): void {
    this.actividad = this.actividad.esquemaActivity();
    console.log("Acti: ", this.actividad);
  }

  public regresar() {
    this.router.navigate(["login"]);
  }

  public agenda() {
    this.router.navigate(["Registro-agenda"]);
  }

  public registraragenda() {
    console.log("Datos del usuario", this.actividad);
    this.errors = [];
    this.errors = this.actividadService.validarTarea(this.actividad);
    if (!$.isEmptyObject(this.errors)) {
      return false;
    } 
    //Aqui se manda a llamar al servicio ya que todo esta correcto
    this.actividadService.registrarAgenda(this.actividad).subscribe(
      (response) => {
        alert("Actividad registrada correctamente");
        console.log("Tarea registrada", response);
        this.router.navigate(["/"]);
      },(error) => {
        alert("No se pudo registrar");
      }
    )
    return true;
  }



  public changeFecha(event: any) {
    console.log(event);
    this.actividad.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.actividad.fecha_nacimiento);
  }
}

