export interface User {
  id?:number;
  tipo_usuario: number;
  username?: string;
  email: string;
  password: string;
  password2?: string;
  estado: number;
}
