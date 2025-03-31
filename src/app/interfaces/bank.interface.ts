export interface IConsultarSaldo {
    cuenta: string;
  }

  export interface ISaldo {
    saldo: string;
  }


  export interface IHistory {
    id: number;
    tipo: string;
    monto: string;
    fecha: string;
  }

  export interface Transaccion {
    id: number;
    tipo: string;
    monto: string;
    fecha: string;
  }