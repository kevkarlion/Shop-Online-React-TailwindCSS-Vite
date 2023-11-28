import { useContext } from "react";
import { MiContext } from "../Context";

export function SearchProducts() {
  const context = useContext(MiContext);

  const productFind = (e) => {
    context.setFind(e.target.value);
  };

  return (
    <div>
      <input
        onChange={(e) => productFind(e)}
        value={context.find}
        className=" w-80 h-8 pl-2 m-3 mb-6 rounded-md border-black border-solid border-[1px] outline-0"
        placeholder="Search"
        type="text"
      />
    </div>
  );
}
