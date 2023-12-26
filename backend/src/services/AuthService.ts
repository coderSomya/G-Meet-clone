interface AccountCreationData {
    name: string,
    email: string,
    password: string
}

export const createNewAccount = (data: AccountCreationData
)=>{
   let {name, email, password} = data;
}