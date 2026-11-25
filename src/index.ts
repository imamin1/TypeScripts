type User = {
    username : string ,
    email : string
}
type account ={
    balance : number,
    isActive : boolean
}
const Account : User & account = {
 balance : 1,
 isActive : true,
 email : "",
 username : ''

}