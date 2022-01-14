export class User{
  constructor(
    public name:string,
    public lastName:string,
    public email:string,
    public role:string,
    public password?:string,
    public img?:string,
    public google?:boolean,
    public state?:boolean,
    public uId?:string,
  ){}
}
