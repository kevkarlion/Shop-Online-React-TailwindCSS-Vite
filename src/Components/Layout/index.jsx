/* eslint-disable react/prop-types */

/*
    Creo un Layout para que todas mis
    vistas sean consistentes.
    Entonces lo usare para envolver a otros 
    componentes y que tengan un dieseño unificado
*/
const Layout = ( { children }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            { children }
        </div>
    );
}

export default Layout;