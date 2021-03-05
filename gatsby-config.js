const roamPlugins = [
  //  { name: "roam-convert", repo: "https://github.com/aidam38/roam-convert" },
  { name: "pyroam", repo: "https://github.com/aidam38/pyroam" },
  { name: "roamsr", repo: "https://github.com/aidam38/roamsr" },
  { name: "littlescripts", repo: "https://github.com/aidam38/littlescripts" }
];

const repoFolder = ".cache/plugin-repos/";

module.exports = {
  siteMetadata: {
    siteTitle: `Roam plugins by Adam Krivka`,
    defaultTitle: `Roam plugins by Adam Krivka`,
    siteTitleShort: `Roam plugins by Adam Krivka`,
    siteDescription: `Plugins for Roam Reserach by Adam Krivka (spaced repetition, Python notebooks, etc.)`,
    siteUrl: `https://adamkrivka.com/roam-plugins`,
    siteAuthor: `Adam Krivka`,
    siteImage: `static/banner.png`,
    siteLanguage: `en`,
    themeColor: `#1E90FF`,
    basePath: `/roam-plugins`,
    roamPlugins: roamPlugins,
    repoFolder: repoFolder,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
        basePath: `/roam-plugins`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
