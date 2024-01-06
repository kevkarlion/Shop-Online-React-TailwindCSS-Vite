import Layout from "../../Components/Layout";
import { MiContext } from "../../Components/Context";
import { useContext, useState } from "react";

function MyAccount() {

  const context = useContext(MiContext);

  const signStorage = JSON.parse(localStorage.getItem('sign'));

  const stateSign = signStorage;
  const [stateInput, setStateInput] = useState(stateSign);


 
  const [hableButton, setHandleButton] = useState('Editar');


  const [disabled, setDisabled] = useState(true);
  const handleDisabled = ()=>{
    setDisabled(!disabled);
    if(disabled === true){
      setHandleButton('Guardar');
      console.log('stateInput',stateInput);
      
    }else{
      setHandleButton('Editar');
      context.setSign(stateInput);
    }
  }

  const handleInput = (e)=>{
    setStateInput({
      ...stateInput,
      mail: e.target.value
    });
    
  }

  



  return (
    <>
      <Layout>
        <p className="flex justify-center mb-4 mt-4 font-semibold w-auto text-3xl border-b-2 border-green-400	 p-2">
          My Account
        </p>
        <form className="flex justify-center w-[700px] h-[300px]">
          <div className="flex flex-col justify-center items-center h-full w-[400px]">
           

            <div className="flex justify-start w-full mb-2">
              <div className="flex grow justify-end mr-2">
                <label className="" htmlFor="" >Mail</label>
              </div>
              <div className="flex justify-end">
                <input className=" h-[35px] " type="text" value={stateInput.mail} disabled={disabled} onChange={handleInput}/>
                <button onClick={handleDisabled} className="ml-4" type="button">{hableButton}</button>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex grow justify-end mr-2">
                <label className="" htmlFor="" >Password</label>
              </div>
              <div className="flex justify-end">
                <input className=" h-[35px]" type="text"  disabled value={stateInput.password}/>
                <button className="ml-4" type="button">Editar</button>
              </div>
            </div>

          </div>
        </form>
      </Layout>
    </>
  );
}

export default MyAccount;
