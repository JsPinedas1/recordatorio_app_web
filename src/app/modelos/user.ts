export class User {
  id: number;
  nombre: string;
  fechaNacimiento: string;
  contrasena: string;
  apellido: string;
  telefono: string;
  correo: string;
  direccion: string;
  rolAlimento: string;
  rolAgenda: string;

  public constructor(
    id: number,
    nombre: string,
    fechaNacimiento: string,
    contrasena: string,
    apellido: string,
    telefono: string,
    correo: string,
    direccion: string,
    rolAlimento: string,
    rolAgenda: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.contrasena = contrasena;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.direccion = direccion;
    this.rolAlimento = rolAlimento;
    this.rolAgenda = rolAgenda;
  }
}
