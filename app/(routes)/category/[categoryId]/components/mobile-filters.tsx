"use client"

import { useState } from "react";
import Button from "@/components/ui/button";

import { Graphics, Memory, Storage, Processor } from "@/types";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface mobileFiltersProps {
    graphics: Graphics[];
    processors: Processor[];
    memory: Memory[];
    storage: Storage[];
}

const MobileFilters: React.FC<mobileFiltersProps> = ({
    graphics,
    processors,
    memory,
    storage
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
    <>
    <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden bg-white text-black">
        Filters
        <Plus size={20} />
    </Button>
    <Dialog open={open} as="div" onClose={onClose} className="relative z-40 lg:hidden">
        <div className="fixed bg-black inset-0 bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full max-w-xs flex-col overflow-y-auto bg-black py-4 pb-6 shadow-xl w-full">
                <div className="flex items-center justify-end px-4">
                    <IconButton className="bg-black hover:scale-100" icon={<X size={32} className="text-primary" />} onClick={onClose}></IconButton>
                </div>
                <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <Filter valueKey="graphicsId" name="Grafische kaart" data={graphics} />
                    <Filter valueKey="processorId" name="Processor" data={processors} />
                    <Filter valueKey="memoryId" name="Geheugen" data={memory} />
                    <Filter valueKey="storageId" name="Opslag" data={storage} />
                </div>
            </Dialog.Panel>
        </div>
    </Dialog>
    </>
    );
}

export default MobileFilters;
