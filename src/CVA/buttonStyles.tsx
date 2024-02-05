import { cva } from "class-variance-authority";
//cva will return string of classes according your parameters( or variants )

export const buttonStyles = cva(["transition-colors"], {
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
