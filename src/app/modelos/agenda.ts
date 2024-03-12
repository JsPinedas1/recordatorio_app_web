export class Agenda {
  id: number;
  descripcion: string;
  fecha: string;
  horaInicial: string;
  horaFinal: string;
  recordarCada: string;

  public constructor(
    id: number,
    descripcion: string,
    fecha: string,
    horaInicial: string,
    horaFinal: string,
    recordarCada: string
  ) {
    this.id = id;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.horaInicial = horaInicial;
    this.horaFinal = horaFinal;
    this.recordarCada = recordarCada;
  }
}
