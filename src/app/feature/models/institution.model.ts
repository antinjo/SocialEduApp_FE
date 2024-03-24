import { UserModel } from "./user.model";

export interface InstitutionsModel{
    id: string,
    name: string,
    description: string,
    users?: UserModel[]
}