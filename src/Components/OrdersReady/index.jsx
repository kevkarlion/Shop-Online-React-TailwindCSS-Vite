import { useContext } from 'react';
import { MiContext } from '../Context';

export function OrdersReady() {

    const context = useContext(MiContext);



    return (
        <div className='flex justify-center  w-96 h-52'>
            {context.ordersCheckout.map((items, index)=>(
                <div className=' border-solid ' key={index}>
                    {items.map((item, subindex)=>(
                        <div key={subindex}>
                            <p className=' text-xs '>Titulo {item.title}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}