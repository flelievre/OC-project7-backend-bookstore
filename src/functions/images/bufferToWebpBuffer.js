const sharp = require('sharp');

const bufferToWebpBuffer = async ({
  buffer,
  width,
  height,
  fit = 'cover',
}) => {
  let webpBuffer = sharp(buffer);
  if (width && height) {
    webpBuffer = webpBuffer.resize(
      width,
      height,
      {
        fit,
      },
    );
  }
  return webpBuffer.webp().toBuffer();
};

exports.default = bufferToWebpBuffer;
