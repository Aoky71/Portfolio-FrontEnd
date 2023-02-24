
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../componentes/iniciar-sesion/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../componentes/iniciar-sesion/login-usuario';
import { JwtDTO } from '../componentes/iniciar-sesion/jwt-dto';



@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    authURL = 'http://localhost:8080/auth/';
  
    constructor(private httpClient: HttpClient) { }
  
    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }
  
    public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
      return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
    }

}