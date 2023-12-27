import { useContext } from "react";
import { MiContext } from "../../Components/Context";
import { Link } from "react-router-dom";

export function SignIn (){

    const enviarDatos = () => {
        context.setLogin(true);
      };
    

    const context = useContext(MiContext);
    return (
        <div
          className="flex flex-col gap-1 justify-center mt-[150px] mx-auto  w-[600px] h-[300px] items-center bg-white
                p-8 rounded-xl"
        >
            <form action="" className="flex flex-col w-full h-full items-center">
    
                <h1 className="text-3xl grow">Hi 😁</h1>
                <div className="flex flex-col grow mt-4 items-center">
                    <label htmlFor="">Email</label>
                    <input
                    className="border mb-2 outline-none rounded-lg pl-2 m-2"
                    type="text"
                    placeholder={context.signStorage.mail}
    
                   
                    />
                    <label htmlFor="" className="mt-6">Password</label>
                    <input
                    className="border outline-none rounded-lg pl-2 m-2"
                    type="text"
                    placeholder={context.signStorage.password}
                    
                    />
                </div>
                <Link to='/'>
                    <button
                        className="bg-black text-white w-[100px] rounded-xl p-2 text-center mt-2"
                        type="button"
                        onClick={enviarDatos}
                    >
                        Sign in
                    </button>
                </Link>
            </form>
        </div>
      );
}
    