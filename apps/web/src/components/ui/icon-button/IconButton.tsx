type IconButtonProps = {
  children: React.ReactNode;
};

function IconButton({ children }: IconButtonProps) {
  return (
    <button
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        text-slate-700
        transition-all
        duration-200
        hover:bg-blue-50
        hover:text-blue-700
      "
    >
      {children}
    </button>
  );
}

export default IconButton;