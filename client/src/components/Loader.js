import React from "react";

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const loaderCSS = css`
  display: flex;
`;

export default function Loader() {
  return <BeatLoader css={loaderCSS} color="#fff" size={8} margin={4} />;
}
