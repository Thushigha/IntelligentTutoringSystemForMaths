import Image from "next/image";
import Arrow from "@/assets/images/components/arrow.svg";
export interface IButtonProps {
  name: string;
  onClick?: (e: any) => void;
  image?: string;
  disabled?: boolean;
  arrow?: boolean;
  variant?: "primary" | "secondary";
  type?: any;
}

export const Button: React.FC<IButtonProps> = ({
  name,
  onClick,
  image,
  disabled,
  arrow = false,
  variant = "primary",
  type = "button",
}) => {
  const getVariantStyles = (variant: IButtonProps["variant"]) => {
    switch (variant) {
      case "primary":
        return {
          bg: "bg-themeBlue w-full",
          //   border: "bg-gradient-to-b from-[#3858B5] to-[#3858B5]/0",
        };
      case "secondary":
        return {
          bg: "bg-themeBlue",
          //   border: "bg-gradient-to-b from-[#3A4E8A] to-[#3A4E8A]/0",
        };
      default:
        return null;
    }
  };
  const variantStyles = getVariantStyles(variant);
  return (
    <div className={`rounded-md p-[1.5px] text-center flex justify-center`}>
      <button
        type={type}
        className={`${variantStyles?.bg} rounded-md py-[6px] lg:py-3 px-4 lg:px-6 text-white text-p3 md:text-p2 tracking-widest font-bold uppercase flex items-center justify-center gap-2 w-full text-center`}
        onClick={onClick}
        disabled={disabled}
      >
        {image && (
          <Image
            src={image}
            alt="button"
            priority={true}
            quality={100}
            className="h-4 w-4"
          />
        )}
        <span>{name}</span>
        {arrow && (
          <Image
            src={Arrow}
            alt="button"
            priority={true}
            quality={100}
            className="h-3 w-3"
          />
        )}
      </button>
    </div>
  );
};
