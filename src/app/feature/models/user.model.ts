import { InstitutionsModel } from "./institution.model"
import { NotificationModel } from "./notification.model"

export interface UserModel{
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    description: string,
    interests: [],
    education: [],
    experience: [],
    institutions?: InstitutionsModel[],
    savedUsersFolders?: [],
    submissionFolders?: [],
    roles?: [],
    notifications?: NotificationModel[],
    image?:string,
    userpageBackground?:string,
    dateOfBirth:Date,
    joinedDate: Date,
    gender:string,
    location:string,
}
