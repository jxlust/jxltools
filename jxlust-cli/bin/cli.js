#! /usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import download from "download-git-repo";
import path from "path";
import fs from "fs";

console.log("\u{1f468} jxlust-cli working \u{1f4BB} ...");
let currenDir = path.resolve();

const packageJsonPath = path.resolve(currenDir, "./package.json");
const packageJson = fs.readFileSync(packageJsonPath, "utf-8");
let version = "0.0.1";
try {
  const packageObject = JSON.parse(packageJson);
  version = packageObject.version;
} catch (error) {
  console.log("package.json error!");
}

const githubPathMap = new Map([
  ["vue", "github:jxlust/JxlVueTpl#template"],
  ["vue-h5", "github:jxlust/JxlVueTpl#h5-tpl"],
  ["react", "github:jxlust/vite-react18"],
  ["vuessr", "github:jxlust/Vue3_Vite_Koa2_SSR"],
]);

const downloadFromGit = (gitPath, projectName) => {
  download(gitPath, projectName, function (err) {
    console.log(err ? chalk.red.bold(`Error \u{1f626}`) : "Success \u{1f468}");
  });
};
//version 版本号
//name 新项目名称
program
  .version(version, "-v, --version")
  .command("init <templateName> <projectName>")
  .description("create a new template project")
  .action(async (templateName, projectName) => {
    console.log(chalk.blue.bold(`project name: ${projectName}`));
    // console.log('project name', chalk.hex('#049CDB').bold(projectName));
    if (githubPathMap.has(templateName)) {
      console.log("clone template ...");
      downloadFromGit(githubPathMap.get(templateName), projectName);
    } else {
      console.log(chalk.red.bold("A template name that does not exist"));
    }
  });

program
  .command("create")
  .description("create a project from select")
  .action(async () => {
    const repos = [...githubPathMap.keys()];
    // const repos = [{ name: 'vue', value: 1 }, { name: 'react', value: 2 }]
    const { repo, name } = await inquirer.prompt([
      {
        name: "repo",
        type: "list",
        choices: repos,
        message: "Please choose a template to create project",
      },
      {
        name: "name", // key 名
        type: "input", //type：input,confirm,list,rawlist,checkbox,password...
        message: "Your project name", // 提示信息
        default: "my-tpl-project", // 默认值
      },
    ]);
    console.log(chalk.green.bold(`Use ${repo} template,creating ${name} ...`));
    downloadFromGit(githubPathMap.get(repo), name);
  });
program.parse(process.argv);
