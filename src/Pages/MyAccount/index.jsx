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
      console.log("stateInput", stateInput);
    } else {
      setHandleButtonMail("Editar");
      context.setSign(stateInput);
    }
  };

  const handleDisabledPass = () => {
    setDisabledPass(!disabledPass);
    if (disabledPass === true) {
      setHandleButtonPass("Guardar");
      console.log("stateInput", stateInput);
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
            {/* Uso de Gris con Tailwind */}
            <div className="grid grid-cols-[100px_220px_80px] w-full mb-4  h-[45px] justify-items-center items-center">
              <label className="justify-self-end font-semibold	" htmlFor="">
                Mail:
              </label>
              <input
                className="border-none focus:outline-none"
                type="text"
                value={stateInput.mail}
                disabled={disabledMail}
                onChange={handleInputMail}
              />
              <button onClick={handleDisabledMail} className="bg-blue-500 text-white p-[5px] rounded-md w-[73px]" type="button">
                {hableButtonMail}
              </button>
            </div>

            <div className="grid grid-cols-[100px_220px_80px] w-full mb-2  h-[45px]  justify-items-center items-center">
              <label className="justify-self-end font-semibold" htmlFor="">
                Password:
              </label>
              <input
                className="border-none focus:outline-none"
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
