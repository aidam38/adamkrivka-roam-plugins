var exec = require("await-exec");
var mergedirsObject = require("merge-dirs");
var mergedirs = mergedirsObject.default;
const fs = require("fs");
const fsPromise = fs.promises;

const gatsbyConfig = require("./gatsby-config.js");
const roamPlugins = gatsbyConfig.siteMetadata.roamPlugins;
const repoFolder = gatsbyConfig.siteMetadata.repoFolder;

/* ====== HELPERS ====== */
const createFolder = async (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
};

const deleteFolder = async (folder) => {
  try {
    fs.rmdirSync(folder, { recursive: true });
  } catch (e) {
    console.warn(e);
  }
};

const clearFolder = async (folder) => {
  await deleteFolder(folder);
  await createFolder(folder);
};

/* ====== CLONING REPOS ====== */
const cloneRepos = async () => {
  for (const plugin of roamPlugins) {
    createFolder(repoFolder);

    const pluginFolder = repoFolder + plugin.name;
    deleteFolder(pluginFolder);

    console.log("cloning " + plugin.repo + " to " + pluginFolder);
    try {
      await exec(`git clone --depth 1 "` + plugin.repo + `" ` + pluginFolder);
    } catch (e) {
      console.warn(e);
    }
  }
};

/* ====== MOVING FILES ====== */
const moveFiles = async () => {
  clearFolder("src/docs");

  for (const plugin of roamPlugins) {
    const pluginFolder = repoFolder + plugin.name;
    const moves = [
      {
        source: pluginFolder + "/docs/docs",
        target: "src/docs/" + plugin.name,
      },
      {
        source: pluginFolder + "/docs/config",
        target: "src/config/" + plugin.name,
      },
      {
        source: pluginFolder + "/dist",
        target: "static/" + plugin.name,
      },
    ];

    for (move of moves) {
      if (fs.existsSync(move.source)) {
        await clearFolder(move.target);
        mergedirs(move.source, move.target);
      }
    }
  }
};

exports.onPreBootstrap = async () => {
  await cloneRepos();
  await moveFiles();
};
