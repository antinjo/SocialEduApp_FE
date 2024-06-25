import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HomepageService } from "../services/homepage.service";
import {
    AccessToken,
    GetChatMessage,
    GetExactFolder, 
    GetExactProjectFolder, 
    GetInstitution, 
    GetInstitutions, 
    GetPosts, 
    GetSavedFoldersByUser, 
    GetSavedUsersInfo, 
    GetSubjectForInstitution, 
    GetSubjectForUser, 
    GetSubjectInfo, 
    GetSubjectList, 
    GetSubmissionsFolder, 
    GetUserInfo, 
    LoginUserName,
    isloggedIn
} from "./feature.action";
import { tap } from "rxjs";
import { UserModel } from "../models/user.model";
import { SavedUserModel } from "../models/savedUsers.model";
import { SubjectModel } from "../models/subject.model";
import { SubmissionFolderModel } from "../models/submissionFolder.model";
import { InstitutionsModel } from "../models/institution.model";
import { NotificationModel } from "../models/notification.model";
import { PostModel } from "../models/post.model";
import { CommentModel } from "../models/comment.model";
import { SubmissionModel } from "../models/submission.model";
import { ForumModel } from "../models/forum.model";
import { ProjectTaksModel } from "../models/projectTask.model";
import { ChatMessageModel } from "../models/chatMsg.model";

interface FeatureStateModel{
    user:UserModel;
    userList:UserModel[];
    savedUsers: UserModel[];
    userSubjects: SubjectModel[];
    savedFoldersByUser: SavedUserModel[];
    submissionFolder: SubmissionFolderModel[];
    institutions:InstitutionsModel[];
    institution:InstitutionsModel;
    institutionSubject:SubjectModel[];
    subjectList:SubjectModel[];
    subjectInfo:SubjectModel;
    notifications:NotificationModel[];
    post:PostModel[];
    comments:CommentModel[];
    submissions:SubmissionModel[];
    submissionsForSubject:ProjectTaksModel[];
    forumPosts:ForumModel[];
    loggedInUserId:string,
    chats:ChatMessageModel[];
    isLoggedIn:boolean;
    isLoadedUserPage:boolean;
    isLoadedHomePage:boolean;
    isLoadedSaved:boolean;
    isLoadedStudenti:boolean;
    isLoadedSudionici:boolean;
    isLoadedProjects:boolean;
    isLoadedSubject:boolean;
    accesstokenBearer:string;
}

@State<FeatureStateModel>({
    name:"featureStateModel",
    defaults:{
        isLoadedUserPage:true,
        isLoggedIn:true,
        isLoadedHomePage:true,
        isLoadedSaved:true,
        isLoadedStudenti:true,
        isLoadedSudionici:true,
        isLoadedProjects:true,
        isLoadedSubject:true,
        accesstokenBearer:"",
        loggedInUserId:"",
        user:{
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            description: "",
            interests: [],
            education: [],
            experience: [],
            institutions:[],
            savedUsersFolders:[],
            submissionFolders:[],
            roles:[],
            image:"",
            notifications:[],
            joinedDate: new Date,
            gender:"",
            dateOfBirth: new Date,
            location:""
        },
        userList:[
            {
                firstName: "",
                lastName: "",
                email: "",
                userName: "",
                description: "",
                interests: [],
                education: [],
                experience: [],
                institutions:[],
                savedUsersFolders:[],
                submissionFolders:[],
                roles:[],
                notifications:[],
                joinedDate: new Date,
                gender:"",
                dateOfBirth: new Date,
                location:""
            }
        ],
        savedUsers:[{
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            description: "",
            interests: [],
            education: [],
            experience: [],
            institutions:[],
            savedUsersFolders:[],
            submissionFolders:[],
            roles:[],
            notifications:[],
            joinedDate: new Date,
            gender:"",
            dateOfBirth: new Date,
            location:""
        }],
        savedFoldersByUser:[{
            id: "",
            userEmail: "",
            name: "",
            users: []
        }],
        userSubjects:[{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
                abbreviation:"",
                description:"",
                users:[]
            },
            createdDate: new Date(),
            mainPerson:{
                id:"",
                userEmail:"",
                userFirstName: "",
                userLastName: "",
                subjectID: "",
                subject: "",
                hasAdminRights: false,
                joinedDate: new Date
            }
        }],
        institutionSubject:[{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
                abbreviation:"",
                description:"",
                users:[]
            },
            createdDate: new Date(),
            mainPerson:{
                id:"",
                userEmail:"",
                userFirstName: "",
                userLastName: "",
                subjectID: "",
                subject: "",
                hasAdminRights: false,
                joinedDate: new Date
            }
        }],
        subjectList:[{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
                abbreviation:"",
                description:"",
                users:[]
            },
            createdDate: new Date(),
            users:[],
            forums:[{
                id:"",
                subjectID:"",
                subject:"",
                name:"",
                description:"",
                createdDate: new Date,
                forumPosts:[],
            }],
            projectTasks:[{
                id:"",
                subjectID:"",
                title: "",
                description:"",
                createdDate: new Date,
                maxGrade: 0,
                criteria:"",
                submissions:[{
                    id:"",
                    subjectID:"",
                    subjectName:"",
                    userEmail: "",
                    userFirstName:"",
                    userLastName:"",
                    title: "",
                    description: "",
                    link:"",
                    imageLink:"",
                    grade: 0,
                    criteria:"",
                    uploadDate: new Date
                }]
            }],
            mainPerson:{
                id:"",
                userEmail:"",
                userFirstName: "",
                userLastName: "",
                subjectID: "",
                subject: "",
                hasAdminRights: false,
                joinedDate: new Date
            }
        }],
        subjectInfo:{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
                abbreviation:"",
                description:"",
                users:[]
            },
            createdDate: new Date(),
            users:[],
            forums:[{
                id:"",
                subjectID:"",
                subject:"",
                name:"",
                description:"",
                createdDate: new Date,
                forumPosts:[],
            }],
            projectTasks:[{
                id:"",
                subjectID:"",
                title: "",
                description:"",
                createdDate: new Date,
                maxGrade: 0,
                criteria:"",
                submissions:[{
                    id:"",
                    subjectID:"",
                    subjectName:"",
                    userEmail: "",
                    userFirstName:"",
                    userLastName:"",
                    title: "",
                    description: "",
                    link:"",
                    imageLink:"",
                    grade: 0,
                    criteria:"",
                    uploadDate: new Date
                }]
            }],
            mainPerson:{
                id:"",
                userEmail:"",
                userFirstName: "",
                userLastName: "",
                subjectID: "",
                subject: "",
                hasAdminRights: false,
                joinedDate: new Date
            }
        },
        submissionFolder:[{
            id:"",
            userEmail:"",
            name:"",
            description:"",
            submissions: [],
        }],
        institution:{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            users:[]
        },
        institutions:[{
            id:"",
            name:"",
            abbreviation:"",
            description:"",
            users:[]
        }],
        notifications:[{
            userID: "",
            timestamp: "",
            message: "",
            opened: false
        }],
        post:[{
            id:"",
            subjectID:"",
            Subject:{
                id:"",
                name:"",
                abbreviation:"",
                description:"",
                institutionID:"",
                institution:{
                    id:"",
                    name:"",
                    abbreviation:"",
                    description:"",
                    users:[]
                },
                createdDate: new Date(),
            },
            subjectName:"",
            institutionName:"",
            projectTaskID:"",
            projectTask:{
                id:"",
                subjectID:"",
                title: "",
                description:"",
                createdDate: new Date,
                criteria:"",
                maxGrade: 0,
            },
            projectTaskTitle:"",
            userEmail: "",
            userFirstName:"",
            userLastName:"",
            title: "",
            description: "",
            link:"",
            imageLink:"",
            grade: "",
            uploadDate:new Date,
            comments:[]
        }],
        comments:[{
            id:"",
            text:"",
            userEmail:"",
            userFirstName:"",
            userLastName:"",
            serImage:""
        }],
        submissions:[{
            id:"",
            subjectID:"",
            subjectName:"",
            projectTaskID:"",
            projectTaskTitle:"",
            userEmail: "",
            userFirstName:"",
            userLastName:"",
            title: "",
            description: "",
            link:"",
            imageLink:"",
            grade: 0,
            criteria:"",
            uploadDate:new Date
        }],
        submissionsForSubject:[{
            id:"",
            subjectID:"",
            title: "",
            description:"",
            createdDate: new Date,
            maxGrade:0,
            criteria:"",
            submissions:      [{
                id:"",
                subjectID:"",
                subjectName:"",
                projectTaskID:"",
                projectTaskTitle:"",
                userEmail: "",
                userFirstName:"",
                userLastName:"",
                title: "",
                description: "",
                link:"",
                imageLink:"",
                grade: 0,
                criteria:"",
                uploadDate:new Date
            }]
        }],
        forumPosts:[{
            id:"",
            subjectID:"",
            subject:"",
            name:"",
            description:"",
            createdDate: new Date,
            forumPosts:[{
                id:"",
                forumID:"",
                forum:"",
                userEmail:"",
                userFirstName:"",
                userLastName:"",
                parentPostID:"",
                parentPost:"",
                content:"",
                createdDate:new Date
            }]
        }],
        chats:[{
            firstName: "",
            lastName: "",
            email: "",
            image: "",
            messages: []
        }]
    }
})

@Injectable()
export class FeatureState{
    constructor(private homepageService:HomepageService){}

    @Selector()
    static getUserInfo(state: FeatureStateModel){
        return state.user
    }
    @Selector()
    static getUserId(state: FeatureStateModel){
        return state.loggedInUserId
    }
    @Selector()
    static getSavedUsers(state: FeatureStateModel){
        return state.savedUsers
    }
    @Selector()
    static getSavedUsersFolder(state: FeatureStateModel){
        return state.savedFoldersByUser
    }
    @Selector()
    static getSubjectForUser(state: FeatureStateModel){
        return state.userSubjects
    }
    @Selector()
    static getSubmissionsFolder(state: FeatureStateModel){
        return state.submissionFolder
    }
    @Selector()
    static getInstitution(state: FeatureStateModel){
        return state.institution
    }
    @Selector()
    static getInstitutions(state: FeatureStateModel){
        return state.institutions
    }
    @Selector()
    static getSubjectForInstitutions(state: FeatureStateModel){
        return state.institutionSubject
    }
    @Selector()
    static getSubjectList(state: FeatureStateModel){
        return state.subjectList
    }
    @Selector()
    static getSubjectInfo(state: FeatureStateModel){
        return state.subjectInfo
    }
    @Selector()
    static getSubjectName(state: FeatureStateModel){
        return state.subjectInfo.name
    }
    @Selector()
    static getSubjectDescription(state: FeatureStateModel){
        return state.subjectInfo.description
    }
    @Selector()
    static getCreateDateOfSubject(state: FeatureStateModel){
        return state.subjectInfo.createdDate
    }
    @Selector()
    static getMainPersonOfSubject(state: FeatureStateModel){
        return (state.subjectInfo.mainPerson.userFirstName + " "+ state.subjectInfo.mainPerson.userLastName)
    }
    @Selector()
    static getNotifications(state:FeatureStateModel){
        return state.user.notifications
    }
    @Selector()
    static getExtactUserList(state:FeatureStateModel){
        return state.userList
    }
    @Selector()
    static getPost(state:FeatureStateModel){
        return state.post
    }
    @Selector()
    static getExactProjectList(state:FeatureStateModel){
        return state.submissions
    }
    @Selector()
    static getExactProjectListForSubject(state:FeatureStateModel){
        return state.submissionsForSubject
    }
    @Selector()
    static getForumPosts(state:FeatureStateModel){
        return state.forumPosts
    }
    @Selector()
    static getChats(state:FeatureStateModel){
        return state.chats
    }
    @Selector()
    static getIsLoggedIn(state:FeatureStateModel){
        return state.isLoggedIn
    }
    @Selector()
    static isLoadedUserPage(state:FeatureStateModel){
        return state.isLoadedUserPage
    }
    @Selector()
    static isLoadedHomePage(state:FeatureStateModel){
        return state.isLoadedHomePage
    }
    @Selector()
    static isLoadedSaved(state:FeatureStateModel){
        return state.isLoadedSaved
    }
    @Selector()
    static isLoadedSudionici(state:FeatureStateModel){
        return state.isLoadedSudionici
    }
    @Selector()
    static isLoadedStudenti(state:FeatureStateModel){
        return state.isLoadedStudenti
    }
    @Selector()
    static isLoadedProjects(state:FeatureStateModel){
        return state.isLoadedProjects
    }
    @Selector()
    static isLoadedSubject(state:FeatureStateModel){
        return state.isLoadedSubject
    }
    @Selector()
    static accessToken(state:FeatureStateModel):string{
        return state.accesstokenBearer
    }

    @Action(GetUserInfo)
    getUserInfo(ctx: StateContext<FeatureStateModel>,action:GetUserInfo){
        const state = ctx.getState();
        state.isLoadedUserPage = false
        const name:string = action.payload
        return this.homepageService.getUserInfo(name, ctx.getState().accesstokenBearer).pipe(
            tap((res) =>{
                ctx.patchState({
                    user:res,
                    isLoadedUserPage:true
                })
                
            })
        )  
    }
    @Action(GetSavedUsersInfo)
    getSavedUsersInfo(ctx: StateContext<FeatureStateModel>){
        const state = ctx.getState();
        state.isLoadedHomePage = false
        return this.homepageService.getSavedUsersInfo("1", ctx.getState().accesstokenBearer).pipe(
            tap((res) =>{
                ctx.patchState({
                    savedUsers:res.users,
                    isLoadedHomePage: true
                })
                
            })
        )
    }
    @Action(GetSavedFoldersByUser)
    getSavedFoldersByUser(ctx: StateContext<FeatureStateModel>,action:GetSavedFoldersByUser){
        const state = ctx.getState();
        state.isLoadedSaved = false
        const name:string = action.payload
        return this.homepageService.getSavedFoldersByUser(name, ctx.getState().accesstokenBearer).pipe(
            tap((res) =>{
                ctx.patchState({
                    savedFoldersByUser:res,
                    isLoadedSaved:true
                })
            })
        )
        
    }
    @Action(GetSubjectForUser)
    getSubjectsForUSer(ctx:StateContext<FeatureStateModel>,action:GetSubjectForUser){
        const state = ctx.getState();
        const email:string = action.payload
        return this.homepageService.getSubjectForUser(email, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    userSubjects:res.slice(0,10)
                })
            })
        )
    }
    @Action(GetSubmissionsFolder)
    getSubmissionsFolder(ctx:StateContext<FeatureStateModel>,action:GetSubmissionsFolder){
        const state = ctx.getState();
        state.isLoadedProjects = false
        const name:string = action.payload
        return this.homepageService.getSubmissionsFolders(name, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    submissionFolder:res,
                    isLoadedProjects:true
                })    
            })
        )
    }
    @Action(GetInstitutions)
    getInstitutions(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getInstitutions(ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    institutions:res
                })
            })
        )
    }
    @Action(GetInstitution)
    getInstitution(ctx:StateContext<FeatureStateModel>, action:GetInstitution){
        const state = ctx.getState();
        state.isLoadedStudenti=false
        const id:string = action.payload
        return this.homepageService.getInstitution(id, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    institution:res,
                    isLoadedStudenti:true
                })
            })
        )
    }
    @Action(GetSubjectForInstitution)
    getSubjectForInstitution(ctx:StateContext<FeatureStateModel>,action:GetSubjectForInstitution){
        const state = ctx.getState();
        state.isLoadedSubject = false
        const id:string = action.payload
        return this.homepageService.getInstitutionSubject(id,ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    institutionSubject:res,
                    isLoadedSubject:true
                })
            })
        )
    }
    @Action(GetSubjectInfo)
    getSubjectInfo(ctx:StateContext<FeatureStateModel>, action:GetSubjectInfo){
        const state = ctx.getState();
        state.isLoadedSudionici = false
        const id:string = action.payload
        return this.homepageService.getSubjectInfo(id,ctx.getState().accesstokenBearer).pipe(  
            tap((res)=>{
                ctx.patchState({
                    subjectInfo:res,
                    forumPosts:res.forums,
                    submissionsForSubject:res.projectTasks,
                    isLoadedSudionici:true
                })
            })
        )
    }
    @Action(GetSubjectList)
    getSubjectList(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSubjectList(ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    subjectList:res
                })
            })
        )
    }
    @Action(GetExactFolder)
    getExactFolder(ctx:StateContext<FeatureStateModel>,action:GetExactFolder){
        const state = ctx.getState();
        const id:string = action.payload
        return this.homepageService.getSavedFolder(id, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    userList:res.users
                })
            })
        )
    }
    @Action(GetPosts)
    getPosts(ctx:StateContext<FeatureStateModel>,action:GetPosts){
        const state = ctx.getState();
        const email:string = action.payload
        return this.homepageService.getPosts(email,ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    post:res
                })
            })
        )
    }
    @Action(GetExactProjectFolder)
    getExactProjectFolder(ctx:StateContext<FeatureStateModel>,action:GetExactProjectFolder){
        const state = ctx.getState();
        const id:string = action.payload
        return this.homepageService.getSubmissionFolder(id, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    submissions:res.submissions
                })
            })
        )
    }
    @Action(GetChatMessage)
    getChatMessage(ctx:StateContext<FeatureStateModel>,action:GetChatMessage){
        const state = ctx.getState();
        const email:string = action.payload
        return this.homepageService.getChatMsg(email, ctx.getState().accesstokenBearer).pipe(
            tap((res)=>{
                ctx.patchState({
                    chats:res
                })
            })
        )
    }
    @Action(isloggedIn)
    isloggedIn(ctx:StateContext<FeatureStateModel>,action:isloggedIn){
        const state = ctx.getState();
        const bool:boolean = action.payload
                ctx.patchState({
                    isLoggedIn:bool
                })
 
    }
    @Action(LoginUserName)
    loginUserName(ctx:StateContext<FeatureStateModel>,action:LoginUserName){
        const state = ctx.getState();
        const email:string = action.payload
                ctx.patchState({
                    loggedInUserId:email,
                })
 
    }
    @Action(AccessToken)
    accessToken(ctx:StateContext<FeatureStateModel>,action:AccessToken){
        const state = ctx.getState();
        const accessToken:string = action.payload
                ctx.patchState({
                    accesstokenBearer:accessToken
                })
    }
}

