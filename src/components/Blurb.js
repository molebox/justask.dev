/** @jsx jsx */
import { jsx } from "../context";

const Blurb = ({ children }) => (
  <h1
    sx={{
      fontFamily: "heading"
    }}
  >
    {children}
  </h1>
);

export default Blurb;
