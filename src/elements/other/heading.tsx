import classNames from "classnames";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type HeadingModifierProps = Partial<{ className: string }>;
export type HeadingProps = ModifierProps & HeadingModifierProps;

export const Heading = forwardRefAs<HeadingProps, "p">(
  (props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = classNames("heading", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "p" },
);