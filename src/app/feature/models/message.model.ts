export interface MessageModel{
    id: string,
    senderEmail: string,
    recipientEmail: string,
    content: string,
    timeStamp: string,
    uniqueChatId: string
}