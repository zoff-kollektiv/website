import React from "react";

const ResetStyles = () => (
  <style jsx global>{`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    body {
      background-color: #fff;
      margin: 0;
      padding: 0;
    }

    a {
      color: currentColor;
    }
  `}</style>
);

export default ResetStyles;
