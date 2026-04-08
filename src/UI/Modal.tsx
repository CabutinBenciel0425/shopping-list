import clsx from "clsx";

type ModalProps = {
  children: React.ReactNode;
  className: string;
  id?: number;
  item: string;
  onClose: () => void;
};

function Modal({ children, className, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-99"
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-white rounded-lg shadow-lg p-6 min-w-75 max-w-[90%]",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
