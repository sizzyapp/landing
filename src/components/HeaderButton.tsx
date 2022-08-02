import { Button, ButtonProps, createPolymorphicComponent } from "@mantine/core";
import React, { forwardRef } from "react";

type HeaderButtonType = ButtonProps & React.ComponentPropsWithoutRef<"button">;

const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonType>(
  ({ children, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        variant="subtle"
        color="gray"
        sx={(theme) => ({ color: theme.colors.gray[7] })}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default createPolymorphicComponent<"button", HeaderButtonType>(
  HeaderButton
);
