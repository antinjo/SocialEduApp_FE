import { ProjectTaksModel } from "./projectTask.model";
import { SubjectModel } from "./subject.model";

export interface SubmissionModel{
    id:string,
    subjectID:string,
    subject?:SubjectModel,
    subjectName:string,
    projectTaskID?:string,
    projectTaks?: ProjectTaksModel,
    projectTaskTitle?:string,
    userEmail: string,
    userFirstName:string,
    userLastName:string,
    title: string,
    description: string,
    link:string,
    imageLink:string,
    grade: string,
    uploadDate:Date
}