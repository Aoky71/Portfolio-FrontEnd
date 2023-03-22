import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SoftService } from 'src/app/servicios/Soft.Service';
import { Soft } from './Soft';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

soft: Soft = new Soft();
softs: Soft[] = [];
displayForm: boolean = false;
displayUpdateForm: boolean = false;
displayDeleteForm:boolean = false;
postId: any;


constructor(private softService:SoftService, private router:Router, private activatedRoute:ActivatedRoute, private http: HttpClient, public autenticaticionService: AutenticacionService) { }

createSoft():void {
this.softService.create(this.soft).subscribe(
data => {
this.softs.push(data);
this.soft = new Soft();
this.displayForm = false;
this.router.navigate(['porfolio'])
}
);
location.reload();
}

cargar(soft: Soft):void{
    var softToUpdate=soft;
    this.softService.update(soft.id,soft.nombreSkill,soft.descripcionSkill,soft.urlImagen, softToUpdate).subscribe(
        data => this.postId = data.id)
    this.displayUpdateForm = false;
}

deleteSoft(soft: Soft):void {
this.softService.delete(soft.id).subscribe(
data => {
this.softs = this.softs.filter(e => e !== soft);
this.displayDeleteForm = false;
}
);
location.reload();
}


ngOnInit(): void {
this.softService.getAll().subscribe(
data => {
this.softs = data;
}
);
}
}
