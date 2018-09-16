

export interface User {
  userId: string;
  name: string;
  isActive: boolean;
  noDelete?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
