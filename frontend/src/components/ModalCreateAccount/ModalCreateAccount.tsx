import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";

export default function ModalCreateAccount() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [status, setStatus] = useState<number>(0);
    const [messageError, setMessageError] = useState<string>('');

    async function createAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dataUser = { name: name, email: email, password: password }
            const response = await axios.post('http://localhost:4000/auth/registerUser', dataUser);
            setStatus(response.data.status)
            if (status >= 200) {
                alert('Cadastro feito com sucesso');
                setShowModal(false);
            }
        } catch (err: any) {
            setStatus(err.response.status)
            setMessageError(err.response.data.erro)
            alert(messageError)
        }



    }
    return (
        <>
            <Button className="bg-violet-500 hover:bg-violet-600 px-1.5 rounded mx-px" type="button" value="Create an account!" onClick={() => setShowModal(true)} />
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">create your account</h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <form onSubmit={e => createAccount(e)}>
                                        <input onChange={e => setName(e.target.value)}
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="text"
                                            placeholder="name"
                                            required
                                        />

                                        <input onChange={e => setEmail(e.target.value)}
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="email"
                                            placeholder="e-mail"
                                            required
                                        />

                                        <input onChange={e => setPassword(e.target.value)}
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="password"
                                            placeholder="password"
                                            required
                                        />

                                        <Button className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Register" />
                                    </form>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <Button className="absolute top-0 -right-0 border-2 rounded-full border-red-500 text-red-500 background-transparent font-bold uppercase py-0.5 px-2" type="button" value="X" onClick={() => setShowModal(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}