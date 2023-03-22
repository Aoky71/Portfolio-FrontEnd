import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from '../componentes/Soft/Soft';

@Injectable({
  providedIn: 'root'
})

export class SoftService {

    private url:string="http://localhost:8080/api/soft"
    private urlLista:string="http://localhost:8080/api/soft/traer"
    private urlCrear:string="http://localhost:8080/api/soft/crear"
    private urlEliminar:string="http://localhost:8080/api/soft/borrar"
    private urlActualizar:string="http://localhost:8080/api/soft/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista Soft
  getAll():Observable<Soft[]>{
    return this.http.get<Soft[]>(this.urlLista);
  }

  // crear Soft
  create(educacion:Soft):Observable<Soft>{
    return this.http.post<Soft>(this.urlCrear, educacion);
  }

  //Obtener Soft
  get(id:number):Observable<Soft>{
    return this.http.get<Soft>(`${this.url}/${id}`);
  }

  //actualizar Soft
  update(id:number,nombreSkill:String,descripcionSkill:String,urlImagen:String, soft:Soft ):Observable<Soft>{
    return this.http.put<Soft>(`${this.urlActualizar}/${id}?nombre=${nombreSkill}&descripcion=${descripcionSkill}&urlImagen=${urlImagen}`, soft);
  }

  //eliminar Soft
  delete(id:number):Observable<Soft>{
    return this.http.delete<Soft>(this.urlEliminar+'/'+id);
  }

}