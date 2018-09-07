import { DataProvider } from "../../core/data-provider";
import { Role } from "../../models/user-models";
import { Repository } from "../../core/repository";

export class RoleRepository extends Repository<Role>{
    constructor(dataProvider: DataProvider) {
        super(dataProvider);
    }
    fetch(id: any) : Promise<Role> {
        throw new Error('Not implemented yet');
    }
    fetchAll() : Promise<Role[]> {
        throw new Error('Not implemented yet');
    }
    save(entity : Role) : Promise<Role> {
        throw new Error('Not implemented yet');
    }
}