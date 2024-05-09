import { ForumPostModel } from "./forumPost.model";

export interface ForumModel{
    id:string,
    subjectID:string,
    subject:string,
    name:string,
    description:string,
    createdDate: Date,
    forumPosts:ForumPostModel[]
}