import clsx from "clsx";

type ModalProps = {
  children: React.ReactNode;
  className: string;
  onClose: () => void;
};

function Modal({ children, className, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-99 "
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-white rounded-lg shadow-lg p-6 min-w-75 max-w-[90%] text-3xl",
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
