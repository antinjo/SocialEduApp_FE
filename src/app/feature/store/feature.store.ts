import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HomepageService } from "../services/homepage.service";
import { GetInstitutions, GetSavedFoldersByUser, GetSavedUsersInfo, GetSubjectForInstitution, GetSubjectForUser, GetSubjectInfo, GetSubmissionsFolder, GetUserInfo } from "./feature.action";
import { map, tap } from "rxjs";
import { UserModel } from "../models/user.model";
import { SavedUserModel } from "../models/savedUsers.model";
import { SubjectModel } from "../models/subject.model";
import { SubmissionFolderModel } from "../models/submissionFolder.model";
import { InstitutionsModel } from "../models/institution.model";
import { SubmissionModel } from "../models/submission.model";
import { ProjectTaksModel } from "../models/projectTask.model";


interface FeatureStateModel{
    user:UserModel;
    savedUsers: SavedUserModel;
    userSubjects: SubjectModel[];
    savedFoldersByUser: SavedUserModel[];
    submissionFolder: SubmissionFolderModel[];
    institution:InstitutionsModel;
    institutionSubject:SubjectModel[];
    subjectInfo:SubjectModel;
}

@State<FeatureStateModel>({
    name:"featureStateModel",
    defaults:{
        user:{
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            description: "",
            interests: "",
            education: "",
            experience: "",
            institutions:[],
            savedUsersFolders:[],
            submissionFolders:[],
            roles:[],
            notifications:[]
        },
        savedUsers:
            {
                id: "",
                userEmail: "",
                name: "",
                users: [],
        },
        savedFoldersByUser:[{
            id: "",
            userEmail: "",
            name: "",
            users: []
        }],
        userSubjects:[{
            id:"",
            name:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
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
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
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
        subjectInfo:{
            id:"",
            name:"",
            description:"",
            institutionID:"",
            institution:{
                id:"",
                name:"",
                description:"",
                users:[]
            },
            createdDate: new Date(),
            users:[],
            forum:[{
                id:"",
                subjectID:"",
                subject:"",
                name:"",
                description:"",
                createdDate: new Date,
                forumPost:[],
            }],
            projectTasks:[{
                id:"",
                subjectID:"",
                title: "",
                description:"",
                createdDate: new Date,
                maxGrade: "",
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
                    grade: "",
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
            description:"",
            users:[]
        }
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
    static getSavedUsers(state: FeatureStateModel){
        return state.savedUsers
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
    static getInstitutions(state: FeatureStateModel){
        return state.institution
    }
    @Selector()
    static getSubjectForInstitutions(state: FeatureStateModel){
        return state.institutionSubject
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
    static getCreateDateOfSubject(state: FeatureStateModel){
        return state.subjectInfo.createdDate
    }
    @Selector()
    static getMainPersonOfSubject(state: FeatureStateModel){
        return (state.subjectInfo.mainPerson.userFirstName + " "+ state.subjectInfo.mainPerson.userLastName)
    }

    @Action(GetUserInfo)
    getUserInfo(ctx: StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getUserInfo().pipe(
            tap((res) =>{
                ctx.patchState({
                    user:res
                })
            })
        )  
    }
    @Action(GetSavedUsersInfo)
    getSavedUsersInfo(ctx: StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSavedUsersInfo().pipe(
            tap((res) =>{
                ctx.patchState({
                    savedUsers:res
                })
            })
        )
        
    }
    @Action(GetSavedFoldersByUser)
    getSavedFoldersByUser(ctx: StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSavedFoldersByUser().pipe(
            tap((res) =>{
                ctx.patchState({
                    savedFoldersByUser:res
                })
            })
        )
        
    }
    @Action(GetSubjectForUser)
    getSubjectsForUSer(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSubjectForUser().pipe(
            tap((res)=>{
                ctx.patchState({
                    userSubjects:res
                })
            })
        )
    }
    @Action(GetSubmissionsFolder)
    getSubmissionsFolder(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSubmissionsFolders().pipe(
            tap((res)=>{
                ctx.patchState({
                    submissionFolder:res
                })    
            })
        )
    }
    @Action(GetInstitutions)
    getInstitutions(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getInstitutions().pipe(
            tap((res)=>{
                ctx.patchState({
                    institution:res
                })
            })
        )
    }
    @Action(GetSubjectForInstitution)
    getSubjectForInstitution(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getInstitutionSubject().pipe(
            tap((res)=>{
                ctx.patchState({
                    institutionSubject:res
                })
            })
        )
    }
    @Action(GetSubjectInfo)
    getSubjectInfo(ctx:StateContext<FeatureStateModel>){
        const state = ctx.getState();
        return this.homepageService.getSubjectInfo().pipe(
            tap((res)=>{
                ctx.patchState({
                    subjectInfo:res
                })
            })
        )
    }
}

