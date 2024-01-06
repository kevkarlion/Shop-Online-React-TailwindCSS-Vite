import { SignIn } from "../../Components/SignIn";
import { SignUp } from "../../Components/SignUp";
import { MiContext } from "../../Components/Context";
import { useContext } from "react";

export function Sign() {




  const context = useContext(MiContext);

  function stateLog() {
    

    

    if (
      context.login === false &&
      context.sign.mail !== "" &&
      context.sign.password !== ""
    ) {
      return <SignIn />;
    }
    if (
      context.login === false &&
      context.sign.mail === "" &&
      context.sign.password === ""
    ) {
      return <SignUp />;
    }
  }

  return <div>{stateLog()}</div>;
}
