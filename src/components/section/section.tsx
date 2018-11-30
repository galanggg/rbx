import { cx } from "emotion";
import React from "react";

import { asExoticComponent } from "@/components/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type SectionModifierProps = Partial<{
  size: "medium" | "large";
}>;

export type SectionProps = ModifierProps & SectionModifierProps;

export const Section = asExoticComponent<SectionProps, "section">(
  (props, ref) => {
    const { as, size, ...rest } = transformModifiers(props);
    rest.className = cx("section", rest.className, {
      [`is-${size}`]: size,
    });
    return React.createElement(as!, { ref, ...rest });
  },
  "section",
);
