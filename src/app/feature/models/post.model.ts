import { CommentModel } from "./comment.model";
import { ProjectTaksModel } from "./projectTask.model";
import { SubjectModel } from "./subject.model";

export interface PostModel{
    id:string,
    subjectID:string,
    Subject:SubjectModel,
    subjectName:string,
    institutionName:string,
    projectTaskID:string,
    projectTask:ProjectTaksModel,
    projectTaskTitle:string,
    userEmail: string,
    userFirstName:string,
    userLastName:string,
    title: string,
    description: string,
    link:string,
    imageLink:string,
    grade: string,
    uploadDate:Date,
    comments:CommentModel[]
}