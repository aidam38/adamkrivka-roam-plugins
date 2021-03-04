const roamPlugins = [
  { name: "roam-convert", repo: "https://github.com/aidam38/roam-convert" },
  { name: "pyroam", repo: "https://github.com/aidam38/pyroam" },
  { name: "roamsr", repo: "https://github.com/aidam38/roamsr" },
];

const repoFolder = ".cache/plugin-repos/";

module.exports = {
  siteMetadata: {
    siteTitle: `Rocket Docs`,
    defaultTitle: `Rocket Docs`,
    siteTitleShort: `Rocket Docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `@rocketseat`,
    siteImage: ``,
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
        basePath: `/`,
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
