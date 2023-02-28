import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {
    url="http://localhost:8080/login"
    currentUserSubject: BehaviorSubject<any>;
    constructor(private http:HttpClient) { 
        console.log("El servicio de autenticacion esta corriendo");
        this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
        this.currentUserSubject.subscribe(currentUser => {
            console.log(currentUser);
          });
    }

    iniciarSesion(credenciales:any):Observable<any>
    {
        return this.http.post(this.url, credenciales).pipe(map(data=>{
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        console.log(data);
        this.currentUserSubject.next(data);
            console.log(data);
            return data;
        }))
    }

   get UsuarioAutenticado()    
   {
    return this.currentUserSubject.value;
   }

}