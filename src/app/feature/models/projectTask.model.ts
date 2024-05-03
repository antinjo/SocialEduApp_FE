import { SubjectModel } from "./subject.model";
import { SubmissionModel } from "./submission.model";

export interface ProjectTaksModel{
    id?:string,
    subjectID:string,
    subject?: SubjectModel,
    title: string,
    description:string,
    createdDate: Date,
    maxGrade: number,
    criteria:string,
    submissions?:SubmissionModel[]
}