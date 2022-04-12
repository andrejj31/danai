const path = require("path");

module.exports = {
  i18n: {
    locales: ["mk", "en"],
    defaultLocale: "mk",
    localePath: path.resolve("./public/locales"),
  },
};
