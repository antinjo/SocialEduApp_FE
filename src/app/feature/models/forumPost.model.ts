export interface ForumPostModel{
    id:string,
    forumID:string,
    forum:string,
    userEmail:string,
    userFirstName:string,
    userLastName:string,
    parentPostID:string,
    parentPost:string,
    content:string,
    createdDate:Date
}