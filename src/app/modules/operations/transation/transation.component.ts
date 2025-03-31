import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '@module/state/state';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent {
  typeTransation: number = 0;
  title: string = "";
  montoForm: FormGroup;

  constructor(private fb: FormBuilder, public state: State, private servicesService: ServiceService) {
    this.montoForm = this.fb.group({
      monto: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
    this.state.typeTransation$.subscribe((value) => {
      if (value === 3) {
        this.title = "Despósito desde una sucursal";
        this.typeTransation = 3;
      }
      if (value === 4) {
        this.title = "Despósito desde un cajero";
      }
      if (value === 5) {
        this.title = "Despósito desde otra cuenta";
      }
      if (value === 6) {
        this.title = "Compra en un establecimiento físico";
      }
      if (value === 7) {
        this.title = "Compra en una página web";
      }
      if (value === 8) {
        this.title = "Retiro desde un cajero";
      }
      this.montoForm.reset();
    });
  }

  enviarFormulario() {
    if (this.montoForm.valid) {
      this.state.typeTransation$.subscribe((value) => {
        this.typeTransation = value;
      });
      switch (this.typeTransation) {
        case 3:
          this.servicesService.realizarDepositoSucursal("12", this.montoForm.value.monto, "Deposito desde sucursal").subscribe((data) => {
            alert("Deposito realizado con éxito, su saldo es: " + data.saldo);
          }, (error) => {
            alert("Error al realizar el deposito, intentelo mas tarde");
          });
          break;
        case 4:
          this.servicesService.realizarDepositoCajero("12", this.montoForm.value.monto, "Deposito desde cajero").subscribe((data) => {
            alert("Deposito realizado con éxito, su saldo es: " + data.saldo);
          }, (error) => {
            alert("Error al realizar el deposito, intentelo mas tarde");
          });
          break;
        case 5:
          this.servicesService.realizarDepositoOtraCuenta("12", this.montoForm.value.monto, "Deposito desde otra cuenta").subscribe((data) => {
            alert("Deposito realizado con éxito, su saldo es: " + data.saldo);
          }
          , (error) => {
            alert("Error al realizar el deposito, intentelo mas tarde");
          }
          );
          break;
        case 6:
          this.servicesService.realizarCompraEstablecimiento("12", this.montoForm.value.monto, "Compra en establecimiento fisico").subscribe((data) => {
            alert("Compra realizada con éxito, su saldo es: " + data.saldo);
          }
          , (error) => {
            alert("Error al realizar la compra, intentelo mas tarde. " +error.error);
          }
          );
          break;
        case 7:
          this.servicesService.realizarCompraPaginaWeb("12", this.montoForm.value.monto, "Compra en pagina web").subscribe((data) => {
            alert("Compra realizada con éxito, su saldo es: " + data.saldo);
          }
          , (error) => {
            alert("Error al realizar la compra, intentelo mas tarde. " +error.error);
          }
          );
          break;
        case 8:
          this.servicesService.realizarRetiroCajero("12", this.montoForm.value.monto, "Retiro desde cajero").subscribe((data) => {
            alert("Retiro realizado con éxito, su saldo es: " + data.saldo);
          }
          , (error) => {
            alert("Error al realizar el retiro, intentelo mas tarde. " +error.error);
          }
          );
          break;
        default:
          alert("Tipo de transacción no válida");
          break;
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
