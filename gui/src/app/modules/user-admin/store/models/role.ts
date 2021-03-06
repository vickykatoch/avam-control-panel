export interface Role {
  id: number;
  name: string;
  isActive: boolean;
  isAdmin: boolean;
  noDelete?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
