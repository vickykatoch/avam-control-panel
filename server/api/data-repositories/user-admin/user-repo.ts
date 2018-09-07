import { DataProvider } from "../../core/data-provider";
import { User } from "../../models/user-models";
import { Repository } from "../../core/repository";

export class UserRepository extends Repository<User>{
    constructor(dataProvider: DataProvider) {
        super(dataProvider);
    }
    fetch(id: any) : Promise<User> {
        throw new Error('Not implemented yet');
    }
    fetchAll() : Promise<User[]> {
        throw new Error('Not implemented yet');
    }
    save(user : User) : Promise<User> {
        throw new Error('Not implemented yet');
    }
}