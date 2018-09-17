import { Role } from "./role";
import { Resource } from "./resource";


export interface User {
  userId: string;
  name: string;
  isActive: boolean;
  noDelete?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: Role[];
  resources?: Resource[];
}
