"use client";

import { Computer } from "@/types";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import DeliveryTime from "./delivery-time";

interface ComputerCard {
    data: Computer;
}

const ComputerCard: React.FC<ComputerCard> = ({ data }) => {
    const router = useRouter();
    const previewModal = usePreviewModal();
    const cart = useCart();
   
    const handleClick = () => {
     router.push(`/computer/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();

      previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();

      cart.addItem(data);
    }
   
    return (
     <div onClick={handleClick} className="bg-black200 hover:bg-black100 group cursor-pointer p-3 space-y-2 rounded-md transform transition-all duration-300 h-full">
       <div className="aspect-square rounded-xl bg-white relative">
         <Image loading="lazy" alt={data.name} src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md" quality={100} fetchPriority="low" priority={false} />
         <div className="sm:opacity-0 group-hover:opacity-100 transistion absolute w-full px-6 bottom-5 ">
           <div className="flex gap-x-6 justify-center">
             <IconButton title="Expand button" className="hover:bg-primary hover:border-primary" onClick={onPreview} icon={<Expand size={20} className="text-black"/> } />
             <IconButton title="Add to cart" className="hover:bg-primary hover:border-primary" onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-black"/> } />
           </div>
         </div>
       </div>
       <div>
       <DeliveryTime deliveryTime={data.deliveryTime} />
       </div>
       <div className="border-b py-2 border-gray">
         <p className="font-semibold text-lg overflow-auto md:h-auto">
           {data.name}
         </p>
         <div className="text-sm text-gray block sm:hidden">
           <p>
              {data.graphics.model}
           </p>
            <p>
                {data.processor.name}
            </p>
            <p>
                {data.memory.name}
            </p>
         </div>
       </div>
       <div className="border-b py-2 border-gray hidden sm:block">
         <p className="font-semibold pb-2 text-lg">Specificaties</p>
         <p className="text-md text-white">- {data.processor.name}</p>
         <p className="text-md text-white">- {data.graphics.model}</p>
         <p className="text-md text-white">- {data.memory.name}</p>
       </div>
       <div className="sm:flex items-center justify-between ">
         <Currency value={data?.price} />
         <IconButton title="Add to cart" className="rounded-md px-6 hover:bg-primary border-0 transition-all w-full sm:w-auto mt-2 sm:mt-0" onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-black"/> } />
       </div>
     </div>
    );
   };
   
   export default ComputerCard;