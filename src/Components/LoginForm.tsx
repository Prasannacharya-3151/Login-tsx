import React, {useState} from "react";

interface LoginFormProps{
    onLogin: (email: string, password: string) => void;
}

const LoginForm:React.Fc<LoginFromProps> = ({onLogin}) =>{
    const[email, setEmail]=useState<string>("")
    const[password, setPassword]=useState<string>("")

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(!email || !password){
            alert("please enter both email and password.")
            return;
        }
        onLogin(email, password)
    }
    return(
        
    )
}