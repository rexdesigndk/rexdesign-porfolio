let mix = require("laravel-mix");

mix
  .js("src/app.js", "dist/")
  .postCss("src/main.css", "dist/", [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["index.html"],
      from: ["/src/css/main.css"],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || []
    })
  ])
  .options({
    clearConsole: true,
    cssNano: {
      discardComments: { removeAll: true }
    }
  });
