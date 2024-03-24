import { SubmissionModel } from "./submission.model";

export interface SubmissionFolderModel{
    id:string,
    userEmail:string,
    name:string,
    description:string,
    submissions: SubmissionModel[]
}