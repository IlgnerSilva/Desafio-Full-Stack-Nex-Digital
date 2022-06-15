
interface Props {
    user: string | null | undefined;
    setUser: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

export default function Header({ user, setUser }: Props){
    return (
        <header className="bg-white w-full 2xl:container xl:mx-auto py-4 shadow-md">
        <div className='w-full flex justify-around'>
            <div className="">
                <h1>Mago &#123; &#125;</h1>
            </div>
            {user ? (
                <div>
                    <p>
                        Olá <strong>@{user}</strong>
                    </p>
                    {/* <Button onClick={()=> logout()} value='Sair'/> */}
                </div>
            ) : (
                <div>
                    {/* <Form user={user} setUser={setUser}/> */}
                </div>
            )}
            </div>
    </header>
    )
}