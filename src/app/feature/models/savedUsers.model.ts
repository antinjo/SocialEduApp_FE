import { UserModel } from "./user.model";

export interface SavedUserModel{
    id: string,
    userEmail: string,
    name: string,
    users: UserModel[],
}