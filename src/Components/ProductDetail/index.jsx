import { useContext } from "react";
import { MiContext } from "../Context";
import './styles.css'


export const ProductDetail = ()=> {
    const context = useContext(MiContext);
    return (
        <nav className="side-nav flex flex-col w-56 h-full fixed right-0">
            <figure>
                <span></span>
                <img src="" alt="" />
            </figure>
            <div>
                <p>
                </p>
                <p>
                </p>
            </div>
        </nav>
    )
}