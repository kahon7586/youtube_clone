import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../CVA/buttonStyles";

// //  separate cva pattern into buttonStyles.tsx because of issue #consistent-components-exports
// //  check comments there for more info about cva

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
