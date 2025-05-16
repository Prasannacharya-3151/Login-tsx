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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="border p-3 rounded w-full mb-6"
                />
                <input
                ty
            </form>
        </div>

    )
}