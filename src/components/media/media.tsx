import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/components/exotic";
import { ModifierProps, transformModifiers } from "@/modifiers";
import { MediaContent } from "./media-content";
import { MediaItem } from "./media-item";

export type MediaProps = ModifierProps;

export const Media = Object.assign(
  forwardRefAs<MediaProps, "article">((props, ref) => {
    const { as, ...rest } = transformModifiers(props);
    rest.className = cx("media", rest.className);
    return React.createElement(as!, { ref, ...rest });
  }, "article"),
  {
    Content: MediaContent,
    Item: MediaItem,
  },
);