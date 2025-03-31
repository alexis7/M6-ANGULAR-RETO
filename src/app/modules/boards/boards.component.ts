import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { State } from '@module/state/state';
import { ISaldo } from 'src/app/interfaces/bank.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  mostrarDiv = false;
  history = false;
  dSucursal = false;
  dCajero = false;
  dCuenta = false;
  cFisica = false;
  cWeb = false;
  rCajero = false;
  items = [
    {
      title: 'Consultar saldo',
      description: 'Opción para consulta el saldo de tú cuenta.',
      image: 'assets/1.png',
      opcion: 1
    },
    {
      title: 'Consultar historial de transacciones',
      description: 'Opción para  consultar el historial de transacciones de una cuenta.',
      image: 'assets/2.png',
      opcion: 2
    },
    {
      title: 'Realizar desposito desde una sucursal',
      description: 'Opción para realizar un deposito desde una sucursal.',
      image: 'assets/3.png',
      opcion: 3
    },
    {
      title: 'Realizar desposito desde una cajero',
      description: 'Opción para realizar un deposito desde un cajero.',
      image: 'assets/2.png',
      opcion: 4
    },
    {
      title: 'Realizar desposito desde otra cuenta',
      description: 'Opción para realizar un deposito desde otra cuenta.',
      image: 'assets/5.png',
      opcion: 5
    },
    {
      title: 'Realizar compra en un establecimiento físico',
      description: 'Opción para realizar una compra en un establecimiento físico.',
      image: 'assets/1.png',
      opcion: 6
    },
    {
      title: 'Realizar compra en una página web',
      description: 'Opción para realizar una compra en una página web.',
      image: 'assets/2.png',
      opcion: 7
    },
    {
      title: 'Realizar un retiro en un cajero',
      description: 'Opción para realizar un retiro en un cajero.',
      image: 'assets/3.png',
      opcion: 8
    }
  ];

  constructor(public state: State, private servicesService: ServiceService, private router: Router) {
    this.state.userEmail$.subscribe((value) => {
    });
  }

  handleClick(item: any) {
    let states = {
      mostrarDiv: false,
      history: false,
      dSucursal: false,
      dCajero: false,
      dCuenta: false,
      cFisica: false,
      cWeb: false,
      rCajero: false
    };

    switch (item.opcion) {
      case 1:
        states.mostrarDiv = true;
        break;
      case 2:
        states.history = true;
        break;
      case 3:
        states.dSucursal = true;
        this.state.typeTransation = 3;
        break;
      case 4:
        states.dSucursal = true;
        this.state.typeTransation = 4;
        break;
      case 5:
        states.dSucursal = true;
        this.state.typeTransation = 5;
        break;
      case 6:
        states.dSucursal = true;
        this.state.typeTransation = 6;
        break;
      case 7:
        states.dSucursal = true;
        this.state.typeTransation = 7;
        break;
      case 8:
        states.dSucursal = true;
        this.state.typeTransation = 8;
        break;
      default:
        console.error('Opción no válida');
    }
    Object.assign(this, states);
  }

}
