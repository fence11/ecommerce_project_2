"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "./dialog";

interface ModalProps{
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;    
    // onConfirm: () => void;
    // loading: boolean;    
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    onConfirm,
    loading,
    children
}) => {
    const onChange = (open: boolean) =>{
        if(!open){
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}
