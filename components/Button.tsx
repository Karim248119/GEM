import Typo from "./Typo";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 border border-secondary text-primary rounded-full relative group overflow-hidden duration-500 z-10 ${className}`}
      {...props}
    >
      <span className="w-full aspect-square rotate-45 absolute bg-secondary -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 scale-0 group-hover:scale-100 duration-500 ease-in-out" />
      <Typo font="h2" direction="none" className="text-sm">
        {children}
      </Typo>
    </button>
  );
};
