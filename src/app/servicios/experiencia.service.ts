import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../componentes/experiencia/experiencia';

@Injectable({
    providedIn: 'root'
  })
export class ExperienciaService{

/*En desarrollo:
    private url:string="http://localhost:8080/api/experiencia";
    private urlLista:string="http://localhost:8080/api/experiencia/traer";
    private urlCrear:string="http://localhost:8080/api/experiencia/crear";
    private urlEliminar:string="http://localhost:8080/api/experiencia/borrar"
    private urlActualizar:string="http://localhost:8080/api/experiencia/editar" */
    //En produccion:
    private url:string= environment.URL+"api/experiencia" //"https://portfolio-back-end-p9cb.onrender.com/api/experiencia";
    private urlLista:string= this.url+"/traer" //"https://portfolio-back-end-p9cb.onrender.com/api/experiencia/traer";
    private urlCrear:string= this.url+"/crear" //"https://portfolio-back-end-p9cb.onrender.com/api/experiencia/crear";
    private urlEliminar:string=this.url+"/borrar" //"https://portfolio-back-end-p9cb.onrender.com/api/experiencia/borrar"
    private urlActualizar:string=this.url+"/editar"   //"https://portfolio-back-end-p9cb.onrender.com/api/experiencia/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista de experiencia laboral
  getAll():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.urlLista);
  }

  // crear experiencia laboral
  create(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.urlCrear, experiencia);
  }

  //Obtener experiencia laboral por id
  get(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.url}/${id}`);
  }

  //actualizar experiencia laboral por id
  update(id:number,nombreEmpresa:String,periodo:String,funcion:String,tituloPuesto:string,logoEmpresa:string, experiencia:Experiencia ):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.urlActualizar}/${id}?nombre de la empresa=${nombreEmpresa}&periodo dentro de la empresa=${periodo}&Funcion dentro de la empresa=${funcion}&titulo del puesto=${tituloPuesto}&logo de la empresa=${logoEmpresa}`, experiencia);
  }

  //eliminar experiencia laboral por id
  delete(id:number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.urlEliminar+'/'+id);
  }
}