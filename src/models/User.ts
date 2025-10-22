import mongoose,{Schema,Document,Model} from "mongoose";

export interface IUser extends Document{
    name:string,
    email:string,
    passwordHashed:string,
    createdAt:Date,
    updatedAt:Date
}

const UserSchema :Schema<IUser> = new Schema<IUser>({
    
})