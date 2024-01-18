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
   
    function getDeliveryTimeDetails(deliveryTime: string) {
      let number = '';
      if (deliveryTime) {
        number = deliveryTime.replace(/[^0-9]/g, '');
      }
      const deliveryTimeNumber = Number(number);
      let colorClass: string;
      let text: string;
      
      if (deliveryTimeNumber === 1) {
         colorClass = 'text-success';
         text = `Voor 17:00 besteld, morgen in huis!`;
      } else if (deliveryTimeNumber > 1 && deliveryTimeNumber < 5) {
         colorClass = 'text-success';
         text = `Wordt binnen ${deliveryTimeNumber} werkdagen bezorgd!`;
      } else if (deliveryTimeNumber >= 5 && deliveryTimeNumber < 7) {
         colorClass = 'text-warning';
         text = `Wordt binnen ${deliveryTimeNumber} werkdagen bezorgd!`;
      } else if (deliveryTimeNumber >= 7) {
         colorClass = 'text-danger';
         text = `Tussen 7-14 werkdagen bezorgd.`;
      } else {
         colorClass = 'text-danger';
         text = 'Onbekende leverdatum';
      }
    
      return { colorClass, text };
    }
      
   
    const { colorClass, text } = getDeliveryTimeDetails(data.deliveryTime);

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
       <div className="aspect-square rounded-xl bg-black relative">
         <Image alt={data.name} src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md" quality={100} fetchPriority="low" priority={false} />
         <div className="sm:opacity-0 group-hover:opacity-100 transistion absolute w-full px-6 bottom-5 ">
           <div className="flex gap-x-6 justify-center">
             <IconButton title="Expand button" className="hover:bg-primary hover:border-primary" onClick={onPreview} icon={<Expand size={20} className="text-black"/> } />
             <IconButton title="Add to cart" className="hover:bg-primary hover:border-primary" onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-black"/> } />
           </div>
         </div>
       </div>
       <div className="-mt-4">
       <p className={`${colorClass} font-semibold`}>
           {text}
         </p>
       </div>
       <div className="border-b py-2 border-gray">
         <p className="font-semibold text-lg overflow-auto h-16 md:h-auto">
           {data.name}
         </p>
         <p className="text-sm text-gray">
           {data.pccase.name} {data.graphics.name}
         </p>
       </div>
       <div className="border-b py-2 border-gray">
         <h3 className="font-semibold pb-2">Specificaties</h3>
         <p className="text-md text-white">{data.processor.name}</p>
         <p className="text-md text-white">{data.graphics.name}</p>
         <p className="text-md text-white">{data.memory.name}</p>
       </div>
       <div className="flex items-center justify-between">
         <Currency value={data?.price} />
         <IconButton title="Add to cart" className="rounded-md px-6 hover:bg-primary border-0 transition-all" onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-black"/> } />
       </div>
     </div>
    );
   };
   
   export default ComputerCard;