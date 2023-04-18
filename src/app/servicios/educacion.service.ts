import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../componentes/educacion/educacion';

@Injectable({
    providedIn: 'root'
  })
export class EducacionService{

  /*En desarrollo:
    private url:string="http://localhost:8080/api/educacion";
    private urlLista:string="http://localhost:8080/api/educacion/traer";
    private urlCrear:string="http://localhost:8080/api/educacion/crear";
    private urlEliminar:string="http://localhost:8080/api/educacion/borrar"
    private urlActualizar:string="http://localhost:8080/api/educacion/editar" */

    //En produccion:
    private url:string=  environment.URL+"api/educacion" //"https://portfolio-back-end-p9cb.onrender.com/api/educacion";
    private urlLista:string=this.url+"/traer"  //"https://portfolio-back-end-p9cb.onrender.com/api/educacion/traer";
    private urlCrear:string=this.url+"/crear"  //"https://portfolio-back-end-p9cb.onrender.com/api/educacion/crear";
    private urlEliminar:string= this.url+"/borrar"  //"https://portfolio-back-end-p9cb.onrender.com/api/educacion/borrar"
    private urlActualizar:string=this.url+"/editar" //"https://portfolio-back-end-p9cb.onrender.com/api/educacion/editar"


    constructor(private http:HttpClient) {}

    //obtener la lista Educacion
  getAll():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.urlLista);
  }

  // crear Educacion
  create(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.urlCrear, educacion);
  }

  //Obtener Educacion
  get(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.url}/${id}`);
  }

  //actualizar Educacion
  update(id:number,Instituto:String,Fecha:String,Descripcion:String,logo:string,urlCertificado:string, educacion:Educacion ):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.urlActualizar}/${id}?Instituto=${Instituto}&Fecha=${Fecha}&Descripcion=${Descripcion}&logo=${logo}&Certificado=${urlCertificado}`, educacion);
  }

  //eliminar Educacion
  delete(id:number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.urlEliminar+'/'+id);
  }
}