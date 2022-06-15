import { useState } from "react";
import Button from "../Button/Button";
import ModalCreateAccount from "../ModalCreateAccount/ModalCreateAccount";

interface Props {
    setUser: React.Dispatch<React.SetStateAction<string | null | undefined>>
    user: string | null | undefined
}

export default function FormLogin({user, setUser}: Props){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={(e) => login(e)}>
                <input onChange={e => setEmail(e.target.value)} id='a' value={email} className='border-solid border-2 border-indigo-600 px-1.5 rounded mx-px' type="email" placeholder="e-mail" />
                <input onChange={e => setPassword(e.target.value)} id='emailLogin' value={password} className='border-solid border-2 border-indigo-600 px-1.5 rounded mx-px' type="password" placeholder="password" />
                <Button type='submit' value='Entrar' />
            </form>
            <ModalCreateAccount />
        </>
    )
}