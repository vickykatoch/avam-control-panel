import { DataProvider } from "./data-provider";

export abstract class Repository<T> {
    constructor(protected dataProvider: DataProvider) {

    }
    abstract fetch(id: any) : Promise<T>;
    abstract fetchAll() : Promise<T[]>;
    abstract save(entity: T) : Promise<T>;
}