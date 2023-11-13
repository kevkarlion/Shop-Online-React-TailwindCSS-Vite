import { useContext } from "react";
import { MiContext } from "../Context";
import './styles.css'


export const ProductDetail = ()=> {
    const context = useContext(MiContext);

    

    return (
        <div className="content-side-nav">
            <nav className="side-nav">
                <figure>
                    <span>Hola</span>
                    <img src="" alt="" />
                </figure>
                <div>
                    <p>
                    </p>
                    <p>
                    </p>
                </div>
            </nav>
        </div>
    )
}