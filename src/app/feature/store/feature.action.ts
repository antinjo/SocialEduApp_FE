export class GetUserInfo{
    static readonly type = "[Get User] get user info data"
    constructor(public payload: string){}
}
export class GetSavedUsersInfo{
    static readonly type = "[Get SavedUsers] get user saved users"
}
export class GetSubjectForUser{
    static readonly type ="[Get Subject] get users subjects"
    constructor(public payload: string){}
}
export class GetSavedFoldersByUser{
    static readonly type ="[Get SavedFolders] get saved folders by user"
    constructor(public payload: string){}
}
export class GetSubmissionsFolder{
    static readonly type = "[Get SubmissionsFolder] get the submissions folder"
    constructor(public payload: string){}
}
export class GetInstitutions{
    static readonly type ="[Get Institutions] get institutions list"
}
export class GetInstitution{
    static readonly type ="[Get Institution] get institution info"
    constructor(public payload: string){}
}
export class GetSubjectForInstitution{
    static readonly type ="[Get Subject] get subject for institution"
    constructor(public payload: string){}
}
export class GetSubjectList{
    static readonly type ="[Get Subject] get subject list"
}
export class GetSubjectInfo{
    static readonly type ="[Get Subject] get subject info"
    constructor(public payload: string){}
}
export class GetExactFolder{
    static readonly type ="[Get SavedFolder] get saved folder by name";
    constructor(public payload: string){}
}
export class GetExactProjectFolder{
    static readonly type ="[Get ProjectFolder] get saved project folder by name";
    constructor(public payload: string){}
}
export class GetPosts{
    static readonly type ="[Get Posts] get posts for user";
    constructor(public payload: string){}
}
export class GetExactProjectFolderForSubject{
    static readonly type ="[Get ProjectFolder] get project folder for subject";
    constructor(public payload: string){}
}
export class GetExactForum{
    static readonly type ="[Get Forum] get forum posts for forum";
    constructor(public payload: string){}
}
export class GetChatMessage{
    static readonly type ="[Reset Chat] get chat messages";
    constructor(public payload: string){}
}
export class isloggedIn{
    static readonly type ="[Loggedn in] is loggged in";
    constructor(public payload: boolean){}
}
export class LoginUserName{
    static readonly type ="[UserName] save user name";
    constructor(public payload: string){}
}
export class AccessToken{
    static readonly type ="[AccessToken] get access token ";
    constructor(public payload: string){}
}