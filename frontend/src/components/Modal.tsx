import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { XIcon } from '@heroicons/react/solid'

export const Modal: FC<{
    children: any
    isOpen: boolean
    closeModal: () => void
}> = ({ children, isOpen, closeModal }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}>
                <div className="min-h-screen px-4 text-right">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-50"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-0"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-900/90" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    {/*<span*/}
                    {/*    className="inline-block h-screen align-middle"*/}
                    {/*    aria-hidden="true">*/}
                    {/*    &#8203;*/}
                    {/*</span>*/}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-50"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-0"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <div className="my-4 inline-block w-full max-w-sm transform overflow-hidden rounded-lg border-t border-gray-700/60 bg-white p-5 text-left align-middle shadow transition-all dark:bg-gray-800">
                            <button
                                onClick={closeModal}
                                className="absolute right-3 top-3 opacity-60 hover:opacity-80">
                                <XIcon className="h-5 w-5" />
                            </button>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
export default Modal
