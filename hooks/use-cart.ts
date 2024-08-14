import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

import { Computer } from '@/types';

interface CartStore {
    items: Computer[];
    addItem: (item: Computer) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
};

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Computer) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                return toast.error("PC is already in the cart");
            }

            set({ items: [...get().items, data] });
            toast.success("PC has been added to the cart");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("PC has been removed from the cart");
        },
        removeAll: () => {
            set({ items: [] });
            toast.success("All PCs have been removed from the cart");
        },
        
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;