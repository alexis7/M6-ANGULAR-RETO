import { Component, OnInit } from '@angular/core';
import { ISaldo } from 'src/app/interfaces/bank.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  iSaldo: ISaldo | undefined; // Marked as optional to avoid initialization error
  constructor(private servicesService: ServiceService) {

  }

  ngOnInit(): void {
    this.servicesService.getSaldo("12").subscribe((data) => {
      this.iSaldo = data;
      console.log(this.iSaldo);
      console.log(this.iSaldo.saldo);
    }, (error) => {
      alert("Error al consultar saldo, intentelo mas tarde");
    });
  }

}




