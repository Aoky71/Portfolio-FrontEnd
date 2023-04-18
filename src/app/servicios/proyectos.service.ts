import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../componentes/proyectos/proyecto';

@Injectable({
    providedIn: 'root'
  })
export class ProyectoService{

/*En desarrollo:
    private url:string="http://localhost:8080/api/proyecto";
    private urlLista:string="http://localhost:8080/api/proyecto/traer";
    private urlCrear:string="http://localhost:8080/api/proyecto/crear";
    private urlEliminar:string="http://localhost:8080/api/proyecto/borrar"
    private urlActualizar:string="http://localhost:8080/api/proyecto/editar" */

    //En produccion:
    private url:string= environment.URL+"api/proyecto"  //"https://portfolio-back-end-p9cb.onrender.com/api/proyecto";
    private urlLista:string= this.url+"/traer"  //"https://portfolio-back-end-p9cb.onrender.com/api/proyecto/traer";
    private urlCrear:string= this.url+"/crear" //"https://portfolio-back-end-p9cb.onrender.com/api/proyecto/crear";
    private urlEliminar:string= this.url+"/borrar"  //"https://portfolio-back-end-p9cb.onrender.com/api/proyecto/borrar"
    private urlActualizar:string= this.url+"/editar"  //"https://portfolio-back-end-p9cb.onrender.com/api/proyecto/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista de proyectos
  getAll():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlLista);
  }

  // crear nuevo proyecto
  create(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlCrear, proyecto);
  }

  //Obtener proyecto
  get(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  //actualizar Proyecto
  update(id:number,nombreProyecto:String,descripcionProyecto:String,urlProyecto:String,urlGit:string,urlImagen:string, proyecto:Proyecto ):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.urlActualizar}/${id}?nombre del proyecto=${nombreProyecto}&Descripcion del proyecto=${descripcionProyecto}&URL del proyecto=${urlProyecto}&URL github=${urlGit}&url de la imagen=${urlImagen}`, proyecto);
  }

  //eliminar proyecto
  delete(id:number):Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.urlEliminar+'/'+id);
  }
}