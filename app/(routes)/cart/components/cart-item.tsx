"use client";

import Image from 'next/image';
import { X } from 'lucide-react';

import IconButton from '@/components/ui/icon-button';
import useCart from '@/hooks/use-cart';
import Currency from '@/components/ui/currency';
import { Computer } from '@/types';
import { useRouter } from 'next/navigation';

interface CartItemProps {
    data: Computer;
}

const CartItem: React.FC<CartItemProps> = ({
data 
}) => {
    const cart = useCart()
    const router = useRouter();

    const handleClick = () => {
        router.push(`/computer/${data?.id}`);
       };

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className='flex py-6 border-b border-primary'>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
                <Image onClick={handleClick} fill src={data.images[0].url} alt={data.name} className='cursor-pointer object-cover object-center' quality={75} fetchPriority='high' priority={false} />
            </div>
            <div className='relative ml-4 flex flex-1 flex-col justify-between md:ml-6'>
                <div className='absolute z-10 right-0 -top-2'>
                    <IconButton onClick={onRemove} title='Remove from cart' className='shadow-none border-none bg-transparent hover:scale-100' icon={<X className='text-primary' size={32} />} />
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:pr-0 text-white'>
                    <div className='flex justify-between'>
                        <p onClick={handleClick} className='text-primary text-lg font-semibold cursor-pointer'>
                            {data.name}
                        </p>
                    </div>
                    <div className='mt-1 flex text-sm text-white overflow-hidden mr-0 sm:mr-9'>
                        <p className=''>{data.graphics.name}</p>
                        <p className='ml-4 border-l border-black100 pl-4'>{data.processor.name}</p>
                    </div>
                    <Currency value={data.price} /> 
                </div>
            </div>
        </li>
    )
}

export default CartItem