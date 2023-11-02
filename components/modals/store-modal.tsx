"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Tienda"
      description="Crea tu tienda"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store form
    </Modal>
  );
};
