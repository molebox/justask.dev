import React from "react";
import { Global, css } from "@emotion/core";

const DefaultLayout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #fbbe5b;
        }
      `}
    />
    {children}
  </>
);

export default DefaultLayout;
