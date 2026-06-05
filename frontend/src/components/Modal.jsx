const Modal = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-5 rounded-xl w-125">

        {children}

        <button
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default Modal;