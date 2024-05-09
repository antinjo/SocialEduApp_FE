import { MessageModel } from "./message.model";

export interface ChatMessageModel{
    firstName: string,
    lastName: string,
    email: string,
    image: string,
    messages: MessageModel[]
}