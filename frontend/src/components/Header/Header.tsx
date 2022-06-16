import Button from "../Button/Button";
import FormLogin from "../FormLogin/FormLogin";

interface Props {
    user: string | null | undefined;
    setUser: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

export default function Header({ user, setUser }: Props) {
    function logout() {

    }
    return (
        <header className="bg-white w-full 2xl:container xl:mx-auto py-4 shadow-md">
            <div className='w-full flex justify-around flex-wrap'>
                <div className="">
                    <h1>ProductsGram &#123; &#125;</h1>
                </div>
                {user ? (
                    <div className="flex">
                        <p className="mr-1">
                            Olá <strong>{user}</strong>
                        </p>
                    </div>
                ) : (
                    <div className="flex max-w-screen-md flex-wrap">
                        <FormLogin user={user} setUser={setUser} />
                    </div>
                )}
            </div>
        </header>
    )
}