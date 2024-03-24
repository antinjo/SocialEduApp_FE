import { ForumModel } from "./forum.model";
import { InstitutionsModel } from "./institution.model";
import { MainPersonModel } from "./mainPerson.model";
import { ProjectTaksModel } from "./projectTask.model";
import { UserModel } from "./user.model";

export interface SubjectModel{
    id: string,
    name: string,
    description: string,
    institutionID:string,
    institution: InstitutionsModel,
    createdDate: Date,
    users?:UserModel[],
    forum?:ForumModel[],
    projectTasks?:ProjectTaksModel[],
    mainPerson:MainPersonModel
} 