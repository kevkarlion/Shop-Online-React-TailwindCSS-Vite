import { useContext } from 'react';
import { MiContext } from '../Context';

export function OrdersReady() {

    const context = useContext(MiContext);



    return (
        <div className='w-32 h-6'>
            {context.ordersCheckout.map((items, index)=>(
                <div key={index}>
                    {items.map((item, subindex)=>(
                        <div key={subindex}>
                            <p>Titulo {item.title}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}