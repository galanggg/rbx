import { cx } from "emotion";
import React from "react";

import { Element } from "@/components/element";
import { ModifierProps } from "@/modifiers";
import { NavbarContext } from "./navbar-context";

export type NavbarMenuProps = Prefer<
  ModifierProps,
  React.HTMLAttributes<HTMLDivElement>
>;

export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <NavbarContext.Consumer>
        {({ active }) => (
          <Element
            className={cx("navbar-menu", className, {
              "is-active": active,
            })}
            ref={ref}
            {...rest}
          />
        )}
      </NavbarContext.Consumer>
    );
  },
);