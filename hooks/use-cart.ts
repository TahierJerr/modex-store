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
                return toast.error("Artikel is al toegevoegd aan de winkelwagen")
            }

            set({ items: [...get().items, data] });
            toast.success("Artikel is toegevoegd aan de winkelwagen");
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Artikel is verwijderd uit de winkelwagen");
        },
        removeAll: () => {
            set({ items: [] });
            toast.success("Alle artikelen zijn verwijderd uit de winkelwagen");
        },
        
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;