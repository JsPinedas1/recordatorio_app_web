export class Food {
  id: number;
  codigo: number;
  nombre: string;
  fecha: string;
  dias: number;
  cantidad: number;

  public constructor(
    id: number,
    codigo: number,
    nombre: string,
    fecha: string,
    dias: number,
    cantidad: number
  ) {
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.fecha = fecha;
    this.dias = dias;
    this.cantidad = cantidad;
  }
}
