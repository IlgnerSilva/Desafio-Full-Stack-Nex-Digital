import { useState } from "react";
import Button from "../Button/Button";
import ModalCreateAccount from "../ModalCreateAccount/ModalCreateAccount";
import axios from 'axios';

interface Props {
    setUser: React.Dispatch<React.SetStateAction<string | null | undefined>>
    user: string | null | undefined
}

export default function FormLogin({ user, setUser }: Props) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [status, setStatus] = useState<number>(0);
    const [messageError, setMessageError] = useState<string>('');

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dataUser = { email: email, password: password }
            const response = await axios.post('http://localhost:4000/auth/user/login', dataUser);
            setUser(response.data.name);
        }
        catch (err) {
            setStatus(err.response.status)
            setMessageError(err.response.data.erro)
            alert(messageError);
            setEmail('');
            setPassword('');
        }

    }
    return (
        <div className="flex">
            <form className="flex flex-wrap justify-center" onSubmit={(e) => login(e)}>
                <input onChange={e => setEmail(e.target.value)} id='a' value={email} className='w-32 border-solid border-2 border-indigo-600 px-1.5 rounded mx-px' type="email" placeholder="e-mail" required />
                <input onChange={e => setPassword(e.target.value)} id='emailLogin' value={password} className='w-32 border-solid border-2 border-indigo-600 px-1.5 rounded mx-px' type="password" placeholder="password" required />
                <Button type='submit' value='Login' />
            </form>
            <ModalCreateAccount />
        </div>
    )
}