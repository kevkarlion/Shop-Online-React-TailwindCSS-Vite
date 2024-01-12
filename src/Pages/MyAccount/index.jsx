import Layout from "../../Components/Layout";
import { MiContext } from "../../Components/Context";
import { useContext, useState } from "react";

function MyAccount() {
  const context = useContext(MiContext);

  const signStorage = JSON.parse(localStorage.getItem("sign"));

  const stateSign = signStorage;
  const [stateInput, setStateInput] = useState(stateSign);

  const [hableButtonMail, setHandleButtonMail] = useState("Editar");
  const [hableButtonPass, setHandleButtonPass] = useState("Editar");

  const [disabledMail, setDisabledMail] = useState(true);
  const [disabledPass, setDisabledPass] = useState(true);
  const handleDisabledMail = () => {
    setDisabledMail(!disabledMail);
    if (disabledMail === true) {
      setHandleButtonMail("Guardar");
   
    } else {
      setHandleButtonMail("Editar");
      context.setSign(stateInput);
    }
  };

  const handleDisabledPass = () => {
    setDisabledPass(!disabledPass);
    if (disabledPass === true) {
      setHandleButtonPass("Guardar");
    
    } else {
      setHandleButtonPass("Editar");
      context.setSign(stateInput);
    }
  };

  const handleInputMail = (e) => {
    setStateInput({
      ...stateInput,
      mail: e.target.value,
    });
  };

  const handleInputPass = (e) => {
    setStateInput({
      ...stateInput,
      password: e.target.value,
    });
  };

  return (
    <>
      <Layout>
        <p className="flex justify-center mb-4 mt-4 font-semibold w-auto text-3xl border-b-2 border-green-400	 p-2">
          My Account
        </p>
        <form className="flex justify-center w-[700px] h-[300px]">
          <div className="flex flex-col justify-center items-center h-full w-[500px]">
            {/* Uso de Grid con Tailwind */}
            <div
              className="grid grid-cols-[100px_220px_80px] w-auto  h-auto p-2 justify-items-center items-center
                            border-b-[3px] rounded-md mb-12"
            >
              <label
                className="justify-self-end self-center font-semibold	"
                htmlFor=""
              >
                Mail:
              </label>
              <input
                className="focus:outline-none  bg-[#f5f5f4] pl-[1px]" //focus:outline-none para quitar el borde predeterminado cuando el input está activo
                type="text"
                value={stateInput.mail}
                disabled={disabledMail}
                onChange={handleInputMail}
              />
              <button
                onClick={handleDisabledMail}
                className="bg-blue-500 text-white p-[5px] rounded-md w-[73px]"
                type="button"
              >
                {hableButtonMail}
              </button>
            </div>

            <div className="grid grid-cols-[100px_220px_80px] w-auto mb-2  h-auto p-2  justify-items-center items-center border-b-[3px] rounded-md">
              <label className="justify-self-end font-semibold" htmlFor="">
                Password:
              </label>
              <input
                className="focus:outline-none bg-[#f5f5f4] pl-[1px]"
                type="text"
                disabled={disabledPass}
                value={stateInput.password}
                onChange={handleInputPass}
              />
              <button
                onClick={handleDisabledPass}
                className="bg-blue-500 text-white p-[5px] rounded-md w-[73px]"
                type="button"
              >
                {hableButtonPass}
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default MyAccount;
