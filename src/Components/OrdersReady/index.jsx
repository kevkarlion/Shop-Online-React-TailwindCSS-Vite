import { useContext } from 'react';
import { MiContext } from '../Context';

export function OrdersReady() {

    const context = useContext(MiContext);



    return (
        <div className='flex flex-col gap-1 justify-center mt-4  w-auto h-auto'>
            {context.ordersCheckout.map((items, index)=>(
                <div className=' border rounded-md border-black h-auto mt-4 p-4' key={index}>
                    {items.map((item, subindex)=>(
                        <div className='flex justify-between' key={subindex}>
                            <p className=' text-xs h-8 w-4/5'>{item.title}</p>
                            <p className='text-xs'>{item.price}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}