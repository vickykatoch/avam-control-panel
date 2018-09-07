import { DataProvider } from "../../core/data-provider";
import { Resource } from "../../models/user-models";
import { Repository } from "../../core/repository";

export class RoleRepository extends Repository<Resource>{
    constructor(dataProvider: DataProvider) {
        super(dataProvider);
    }
    fetch(id: any) : Promise<Resource> {
        throw new Error('Not implemented yet');
    }
    fetchAll() : Promise<Resource[]> {
        throw new Error('Not implemented yet');
    }
    save(entity : Resource) : Promise<Resource> {
        throw new Error('Not implemented yet');
    }
}