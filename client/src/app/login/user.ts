export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  administrator: boolean;
  typeOfAcc: string;
}
