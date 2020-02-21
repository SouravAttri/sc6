import { css } from "styled-components";

const sizes = {
  largedesktop: 1440,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
