export const cleanTweet = (tweet) => {
  let cleanText = tweet?.replace(/https:\/\/[\n\S]+/g, "");
  cleanText = cleanText.replace(/#[\n\S]+/g, "");
  return cleanText;
};

export const cleanName = (name) => {
  let cleanedName = name.replace(/https:\/\/[\n\S]+/g, "");
  cleanedName = cleanedName.replace(/#[\n\S]+/g, "");
  cleanedName = cleanedName.replace(/\([\n\S]+\)/g, "");

  const thingsToClean = ["//"];

  thingsToClean.forEach((thingToClean) => {
    cleanedName = cleanedName.replace(thingToClean, "");
  });

  return cleanedName;
};
