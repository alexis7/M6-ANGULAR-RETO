import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConsultarSaldo, ISaldo } from '../interfaces/bank.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  getSaldo(id: string): Observable<ISaldo> {
    const body = { "cuenta": id }; 
    return this.http.post<ISaldo>('http://localhost:8080/cuenta/saldo', body);
  }

  getHistory(id: string): Observable<any> {
    const body = { "cuenta": id }; 
    return this.http.post('http://localhost:8080/cuenta/historial', body);
  }

  realizarDepositoSucursal(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion": tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/deposito/sucursal', body);
  }

  realizarDepositoCajero(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion":tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/deposito/cajero', body);
  }

  realizarDepositoOtraCuenta(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion":tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/deposito/otracuenta', body);
  }

  realizarCompraEstablecimiento(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion":tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/compra/fisico', body);
  }

  realizarCompraPaginaWeb(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion":tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/compra/web', body);
  }

  realizarRetiroCajero(id: string, monto: number, tipoTransaccion: string): Observable<any> {
    const body = { "cuenta": id, "tipoTransaccion":tipoTransaccion, "monto": monto }; 
    return this.http.post('http://localhost:8080/transaccion/retiro/cajero', body);
  }
  
}



