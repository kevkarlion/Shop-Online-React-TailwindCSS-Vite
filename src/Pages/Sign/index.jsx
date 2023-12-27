
import { SignIn } from "../../Components/SignIn";
import { SignUp } from '../../Components/SignUp'
import { MiContext } from "../../Components/Context";
import { useContext } from "react";


export function Sign() {

  const context = useContext(MiContext)

  function stateLog() {
    
    console.log(context.sign);

    
    if (context.login === false && context.signStorage.mail !== '' && context.signStorage.password !== '') {
      return (
        <SignIn />
        ) 
      } if (context.login === false && context.signStorage.mail === '' && context.signStorage.password === '')  {
        return (
          <SignUp />
      )
    }
  } 


  return (
    <div>
      {stateLog()}
    </div>
  )
}
  
  
  