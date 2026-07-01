type IconButtonProps = {
  children: React.ReactNode;
};

function IconButton({ children }: IconButtonProps) {
  return (
    <button className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-gray-700
            transition-colors
            duration-200
            hover:bg-gray-100
            hover:text-black
    ">
      {children}
    </button>
  );
}

export default IconButton;