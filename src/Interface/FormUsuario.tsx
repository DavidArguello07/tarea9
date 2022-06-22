export interface FormUsuario {
  name: string;
  apellido: string,
  ciudad: string;
  carrera: string;
}

export interface CreateUserResponse {
  name:      string;
  job:       string;
  id:        string;
  createdAt: Date;
}
