#! /usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import download from 'download-git-repo'

console.log('\u{1f468} jxlust-cli working \u{1f4BB} ...');

const githubPathMap = new Map([['vue', 'github:jxlust/vue3-demo'], ['react', 'github:jxlust/ReactDom'], ['vuessr', 'github:jxlust/Vue3_Vite_Koa2_SSR']])

const downloadFromGit = (gitPath, projectName) => {
  download(
    gitPath,
    projectName,
    function (err) {
      console.log(err ? `Error \u{1f626}` : "Success \u{1f468}");
    }
  );
}
//version 版本号
//name 新项目名称
program
  .version("1.0.6", "-v, --version")
  .command("init <templateName> <projectName>")
  .description('create a new template project')
  .action(async (templateName, projectName) => {

    console.log(chalk.blue.bold(`project name ${projectName}`));
    // console.log('project name', chalk.hex('#049CDB').bold(projectName));
    if (githubPathMap.has(templateName)) {
      console.log("clone template ...");
      downloadFromGit(githubPathMap.get(templateName), projectName);
    } else {
      console.error("A template name that does not exist");
    }
  });

program
  .command("create")
  .description('create a project from select')
  .action(async () => {
    const repos = [...githubPathMap.keys()]
    // const repos = [{ name: 'vue', value: 1 }, { name: 'react', value: 2 }]
    const { repo, name } = await inquirer.prompt([{
      name: 'repo',
      type: 'list',
      choices: repos,
      message: 'Please choose a template to create project'
    }, {
      name: 'name', // key 名
      type: 'input', //type：input,confirm,list,rawlist,checkbox,password...
      message: 'Your project name', // 提示信息
      default: 'my-tpl-project' // 默认值
    }])
    console.log(chalk.green.bold(`Use ${repo} template,creating ${name} ...`))
    downloadFromGit(githubPathMap.get(repo), name);
  })
program.parse(process.argv);