const fs = require("fs");
const path = require("path");

let rootFolders = [
  "components",
  "sections",
  "mdx-components",
  "pages",
  "layouts",
  "embeds",
];

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const choiceFolders = rootFolders.reduce((obj, v) => {
  try {
    const folders = getDirectories(v);
    obj[v] = folders;
  } catch {
    return obj;
  }

  return obj;
}, {});

let component = {
  description: "component generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
    {
      type: "list",
      name: "root",
      choices: rootFolders,
      message: "root folder",
    },
    {
      type: "list",
      name: "folder",
      choices: ({ root }) => {
        return ["none", ...choiceFolders[root]];
      },
      message: "nest folder",
    },
  ],
  actions: function ({ folder, root }) {
    var actions = [];
    folder = folder === "none" ? undefined : folder;

    actions.push({
      type: "add",
      path: `app/${root}/${
        folder ? `${folder}/` : ""
      }/{{pascalCase name}}/index.tsx`,
      templateFile: "plop-templates/component.tsx",
    });

    return actions;
  },
};

module.exports = component;
