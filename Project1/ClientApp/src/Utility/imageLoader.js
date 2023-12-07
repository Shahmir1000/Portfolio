const images = require.context("Assets/Projects", true, /\.png$/);

export const loadImage = (imagePath) => {
  return images(`./${imagePath}`);
};
