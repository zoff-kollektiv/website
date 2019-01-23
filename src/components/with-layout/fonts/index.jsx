import React from "react";

import { fonts } from "../../../tokens";

const Fonts = () => (
  <style jsx global>{`
    @font-face {
      font-display: swap;
      font-family: ${fonts.mark.name};
      font-weight: ${fonts.mark.weight.medium};
      src: url(/fonts/markweb/mark-ot-medium.woff) format("woff"),
        url(/fonts/markweb/mark-ot-medium.woff2) format("woff2");
    }

    @font-face {
      font-display: swap;
      font-family: ${fonts.mark.name};
      font-weight: ${fonts.mark.weight.bold};
      src: url(/fonts/markweb/mark-ot-bold.woff)
          format("woff"),
        url(/fonts/markweb/mark-ot-bold.woff2)
          format("woff2");
    }
  `}</style>
);

export default Fonts;
