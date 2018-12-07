import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type CardContentModifierProps = Partial<{ className: string }>;

export type CardContentProps = ModifierProps & CardContentModifierProps;

export const CardContent = forwardRefAs<CardContentProps, "div">(
  (props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = cx("card-content", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "div" },
);
