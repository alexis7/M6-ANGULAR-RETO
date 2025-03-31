import { Component, OnInit } from '@angular/core';
import { IHistory, Transaccion } from 'src/app/interfaces/bank.interface';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  iHistory: IHistory[] = []; 
  transacciones: Transaccion[] = [];

  constructor(private servicesService: ServiceService) { }
  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.servicesService.getHistory("12").subscribe(
      (data) => {
        this.transacciones = this.parsearHistorial(data.historial);
        console.log('historial ', JSON.stringify(this.iHistory));
      },
      (error) => {
        console.error('Error loading history data:', error);
      }
    );
  }


  parsearHistorial(historial: string): Transaccion[] {
    return historial.match(/Transaccion {[^}]+}/g)?.map(item => {
      return {
        id: Number(item.match(/id=(\d+)/)?.[1]),
        tipo: item.match(/tipo=([^,]+)/)?.[1] || '',
        monto: item.match(/monto='([^']+)'/)?.[1] || '0.00',
        fecha: item.match(/fecha='([^']+)'/)?.[1] || ''
      };
    }) || [];
  }


}
