import type React from "react";
import dl_icon from "./assets/dl.png"

export function Download({ slug }: { slug: string }): React.ReactElement {
  return (
    <a href={`https://github.com/wikibook/${slug}/`}>
      <img src={dl_icon} alt="Sample Download" />
    </a>
  );
}