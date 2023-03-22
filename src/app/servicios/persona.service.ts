import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../componentes/encabezado/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url:string="http://localhost:8080/api/persona";
  private urlLista:string="http://localhost:8080/api/persona/traer"
  private urlActualizar:string="http://localhost:8080/api/persona/editar"  
  constructor (private http:HttpClient) { }

  //obtener la lista Persona
  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlLista);
  }

  // crear Persona
  create(acercade:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, acercade);
  }

  //Obtener Persona
  get(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }

  //actualizar Persona
  update(id:number,nombre:string,ocupacion:string,urlImagenPerfil:string,urlImagenBanner:string, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.urlActualizar}/${id}?nombre=${nombre}&ocupacion=${ocupacion}&urlImagenPerfil=${urlImagenPerfil}&urlImagenBanner=${urlImagenBanner}`, persona);
  }

  //eliminar Persona
  delete(id:number):Observable<Persona>{
    return this.http.delete<Persona>(this.url+'/'+id);
  }

}