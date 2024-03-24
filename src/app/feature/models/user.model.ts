import { InstitutionsModel } from "./institution.model"
import { NotificationModel } from "./notification.model"

export interface UserModel{
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    description: string,
    interests: string,
    education: string,
    experience: string,
    institutions?: InstitutionsModel[],
    savedUsersFolders?: [],
    submissionFolders?: [],
    roles?: [],
    notifications?: NotificationModel[]
}
