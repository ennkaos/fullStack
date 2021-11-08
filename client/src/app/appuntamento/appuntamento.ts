export interface Appuntamento {
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  date: string;
  solved: boolean;
  doctorName: string;

  department: string;
  review: string;
  totalCost: number;
  paymentDone: true;
}
