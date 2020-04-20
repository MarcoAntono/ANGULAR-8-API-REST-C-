import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../model/Clientes';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  clientes: Clientes = new Clientes();
  formularioLogin: FormGroup;
  constructor(private fb: FormBuilder, private clienteservices: ClientesService, private route: Router) {

  }

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      idcliente: ['', Validators.required],
      Clave: ['', Validators.required],
    });
  }


  ValidarSesion() {
    debugger;
    this.clientes = this.formularioLogin.value as Clientes;
    this.clienteservices.ValidarCliente(this.clientes).subscribe(
      (rest) => {
        console.log('Los Datos son validos');
        localStorage.setItem('ClientePost', JSON.stringify(rest));
        this.route.navigateByUrl('/Perfil');
      },
      (error) => {
        console.log('Error con los datos/fuente');
      }
    );
  

  


}
  

}
