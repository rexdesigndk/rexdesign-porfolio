let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "dist/")
  .postCss("src/css/main.css", "dist/", [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["index.html", "404.html", "success.html"],
      from: ["src/css/main.css"],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || []
    })
  ])
  .options({
    clearConsole: true,
    cssNano: {
      discardComments: { removeAll: true }
    }
  });
