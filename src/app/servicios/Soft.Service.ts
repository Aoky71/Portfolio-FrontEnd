import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Soft } from '../componentes/Soft/Soft';

@Injectable({
  providedIn: 'root'
})

export class SoftService {

  /* En desarrollo:
    private url:string="http://localhost:8080/api/soft"
    private urlLista:string="http://localhost:8080/api/soft/traer"
    private urlCrear:string="http://localhost:8080/api/soft/crear"
    private urlEliminar:string="http://localhost:8080/api/soft/borrar"
    private urlActualizar:string="http://localhost:8080/api/soft/editar" */

    //En produccion:
    private url:string= environment.URL+"api/soft"  //"https://portfolio-back-end-p9cb.onrender.com/api/soft"
    private urlLista:string= this.url+"/traer" //"https://portfolio-back-end-p9cb.onrender.com/api/soft/traer"
    private urlCrear:string= this.url+"/crear" //"https://portfolio-back-end-p9cb.onrender.com/api/soft/crear"
    private urlEliminar:string= this.url+"/borrar" //"https://portfolio-back-end-p9cb.onrender.com/api/soft/borrar"
    private urlActualizar:string= this.url+"/editar" //"https://portfolio-back-end-p9cb.onrender.com/api/soft/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista de Soft skills
  getAll():Observable<Soft[]>{
    return this.http.get<Soft[]>(this.urlLista);
  }

  // crear Soft skill
  create(educacion:Soft):Observable<Soft>{
    return this.http.post<Soft>(this.urlCrear, educacion);
  }

  //Obtener Soft skill
  get(id:number):Observable<Soft>{
    return this.http.get<Soft>(`${this.url}/${id}`);
  }

  //actualizar Soft skill
  update(id:number,nombreSkill:String,descripcionSkill:String,urlImagen:String, soft:Soft ):Observable<Soft>{
    return this.http.put<Soft>(`${this.urlActualizar}/${id}?nombre=${nombreSkill}&descripcion=${descripcionSkill}&urlImagen=${urlImagen}`, soft);
  }

  //eliminar Soft skill
  delete(id:number):Observable<Soft>{
    return this.http.delete<Soft>(this.urlEliminar+'/'+id);
  }

}