import { create } from 'zustand';

import { Computer } from '@/types';

interface PreviewModalStore {
    isOpen: boolean;
    data?: Computer;
    onOpen: (data: Computer) => void;
    onClose: () => void;
};

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Computer) => set({data: data, isOpen: true}),
    onClose: () => set({ isOpen: false })
}));

export default usePreviewModal;