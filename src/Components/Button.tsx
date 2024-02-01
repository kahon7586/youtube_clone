import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//cva will return string of classes according your parameters( or variants )

const buttonStyles = cva(["transition-colors"], {
  // the first parameter is props list that must includes; second is optional
  variants: {
    // variants is the list of forehand designed style that you can implement
    variant: {
      // we design two options to implement: variant(for colors) and size(for shape)
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"], // pattern with no default bg
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    // default variant to implement when not specified
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
// merge variantProp from cva and ComponentProps from react

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  // includes "...props" to inherit props of normal button
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
  // note that "buttonStyles({ variant, size })" will return needed classes string according to buttonStyles
  // twMerge will overwrite the former(buttonStyles) with later(className), so we can directly write indiviual class without worrying about conflict, weight or order when using Button
};

export default Button;
