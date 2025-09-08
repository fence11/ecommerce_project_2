"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
    const StoreModal = useStoreModal();

    return (
        <Modal
        title="Create Store"
        description="Add a new store to manage"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}>

            Create Store Form (WIP)
        </Modal>
    )
}