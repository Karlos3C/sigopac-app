import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CustomerForm from "./CustomerForm";

type CustomerDrawerFormProps = {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomerDrawerForm({ openDrawer, setOpenDrawer }: CustomerDrawerFormProps) {
    return (
        <div>
            <Dialog open={openDrawer} onClose={() => setOpenDrawer(false)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-800/80 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <DialogTitle className="text-4xl font-bold text-gray-900">Nuevo Cliente</DialogTitle>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenDrawer(false)}
                                                    className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-hidden"
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Cerrar Panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </div>
                                        <DialogTitle className="text-gray-600">Complete todos los campos requeridos para registrar el cliente.</DialogTitle>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <CustomerForm setOpenDrawer={setOpenDrawer} />
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
