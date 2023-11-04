//Custom Hook API
import useApi from "../../API";

const Card = () => {
  //Custom hook Api
  const items = useApi();

  return (
    <div className="grid gap-4 grid-cols-3 ">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white cursor-pointer w-40 h-44 rounded-lg"
        >
          <figure className="relative mb-4 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 px-3 py-0.5">
              {item.category}
            </span>
            <img
              className="w-full h-full object-cover rounded-lg"
              src={item.image}
              alt="Headphones"
            />
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
              +
            </div>
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light">{item.title}</span>
            <span className="text-lg font-medium">{item.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
