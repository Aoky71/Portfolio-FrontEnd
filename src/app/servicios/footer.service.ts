import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Footer } from '../componentes/footer/footer';


@Injectable({
    providedIn: 'root'
  })
export class FooterService{

/*En desarrollo:
    private url:string="http://localhost:8080/api/footer";
    private urlLista:string="http://localhost:8080/api/footer/traer";
    private urlCrear:string="http://localhost:8080/api/footer/crear";
    private urlEliminar:string="http://localhost:8080/api/footer/borrar"
    private urlActualizar:string="http://localhost:8080/api/footer/editar" */
    //En produccion:
    private url:string= environment.URL+"api/footer" //"https://portfolio-back-end-p9cb.onrender.com/api/footer";
    private urlLista:string= this.url+"/traer"  //"https://portfolio-back-end-p9cb.onrender.com/api/footer/traer";
    private urlCrear:string= this.url+"/crear"  //"https://portfolio-back-end-p9cb.onrender.com/api/footer/crear";
    private urlEliminar:string= this.url+"/borrar" //"https://portfolio-back-end-p9cb.onrender.com/api/footer/borrar"
    private urlActualizar:string= this.url+"/editar"  //"https://portfolio-back-end-p9cb.onrender.com/api/footer/editar"
    
    constructor(private http:HttpClient) {}

    //obtener la lista de los formularios del Footer
  getAll():Observable<Footer[]>{
    return this.http.get<Footer[]>(this.urlLista);
  }

  // crear formulario del footer
  create(footer:Footer):Observable<Footer>{
    return this.http.post<Footer>(this.urlCrear, footer);
  }

  //Obtener un formulario del footer
  get(id:number):Observable<Footer>{
    return this.http.get<Footer>(`${this.url}/${id}`);
  }

  //actualizar formulario de un footer
  update(id:number,email:String,nombre:String,asunto:String, footer:Footer ):Observable<Footer>{
    return this.http.put<Footer>(`${this.urlActualizar}/${id}?email=${email}&nombre=${nombre}&asunto=${asunto}`, footer);
  }

  //eliminar formulario del footer
  delete(id:number):Observable<Footer>{
    return this.http.delete<Footer>(this.urlEliminar+'/'+id);
  }
}