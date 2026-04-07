import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant: "large" | "medium" | "small";
  onClick: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "medium",
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "rounded font-semibold transition-all duration-300 active:scale-97 cursor-pointer";

  const variants = {
    large: "p-5 text-2xl bg-green-600 hover:bg-green-700",
    medium: "px-4 py-2 text-base bg-blue-600 hover:bg-blue-700",
    small: "px-2 py-1 text-sm bg-gray-600 hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
