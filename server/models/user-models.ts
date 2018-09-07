export interface User {
    name: string;
    displayName: string;
    roles: Role[];
}

export interface Resource {
    id: number;
    name: string;
    type: number;
}

export interface Role {
    name: string;
    description?: string;
    resources: Resource[];
    accessControl: number;
}