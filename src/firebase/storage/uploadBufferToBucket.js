const firebase = require('../firebase').default;

const uploadBufferToBucket = async (bucketPath, buffer) => {
  const file = firebase.storage().bucket().file(bucketPath);
  await file.save(buffer);
  await file.makePublic();
  const [{ mediaLink }] = await file.getMetadata();
  return mediaLink;
};

exports.default = uploadBufferToBucket;
