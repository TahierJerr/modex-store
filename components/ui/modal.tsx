"use client"

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "@/components/ui/icon-button";
import { X } from "lucide-react";


interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (
        <Transition show={open} appear as={Fragment} >
            <Dialog as="div" className="relative z-10 mt-12 sm:mt-0" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-50" />
                <div className="fixed inset-0 overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center text-center p-4 ">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opcaity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle border border-primary">
                                <div className="relative flex w-full overflow-hidden text-white bg-black px-4 items-center pt-16 shadow-2xl sm:p-6 sm:pt-8 md:p-6 lg:p-8 pb-6">
                                    <div className="absolute right-4 top-3 md:top-4">
                                        <IconButton title='Close modal' className="bg-black text-black hover:scale-100" onClick={onClose} icon={<X className="text-primary hover:scale-100" size={30} />} />
                                    </div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;