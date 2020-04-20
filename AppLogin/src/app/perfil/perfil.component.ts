import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/Clientes';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  cliente:Clientes = new Clientes();
  ngOnInit() {
    debugger;
    this.cliente =  JSON.parse(localStorage.getItem('ClientePost'));
  }

}
