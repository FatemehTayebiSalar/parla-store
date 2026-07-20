type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;