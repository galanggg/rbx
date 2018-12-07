import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";
import { Breakpoints } from "@/modifiers/responsive";
import { LevelItem } from "./level-item";
import { LevelSide } from "./level-side";

export type LevelModifierProps = Partial<{
  breakpoint: Breakpoints;
  className: string;
}>;

export type LevelProps = ModifierProps & LevelModifierProps;

export const Level = Object.assign(
  forwardRefAs<LevelProps, "nav">(
    (props, ref) => {
      const { as, breakpoint, ...rest } = transformModifiers(props);
      rest.className = cx("level", rest.className, {
        [`is-${breakpoint}`]: breakpoint,
      });
      return React.createElement(as!, { ref, ...rest });
    },
    { as: "nav" },
  ),
  {
    Item: LevelItem,
    Side: LevelSide,
  },
);
