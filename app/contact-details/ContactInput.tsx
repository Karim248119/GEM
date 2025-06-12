import Typo from "@/components/Typo";

interface ContactInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const ContactInput = ({ label, ...props }: ContactInputProps) => {
  return (
    <div className="relative ">
      <Typo font="h2" direction="none" className="text-secondary font-semibold">
        {label}
      </Typo>
      <div className="border-b border-neutral-700 focus-within:border-secondary">
        <input
          {...props}
          required
          className="w-full appearance-none bg-transparent outline-none border-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ContactInput;
