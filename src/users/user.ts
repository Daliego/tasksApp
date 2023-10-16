export interface Admin {
  id?: number;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const mainUser: Admin = { name: "daliego", password: "1234" };
