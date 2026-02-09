import React from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps } from "antd";

type Props = Omit<ButtonProps, "variant"> & {
  variant?: "primary" | "default" | "ghost";
};

export default function Button({
  variant = "primary",  
  ...props
}: Props) {
  const typeMap: Record<
    NonNullable<Props["variant"]>,
    ButtonProps["type"]
  > = {
    primary: "primary",
    default: "default",
    ghost: "dashed",
  };

  return <AntButton type={typeMap[variant]} {...props} />;
}
