const Configuration = {
 /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
 extends: ['@commitlint/config-conventional'],
 /*
  * Resolve and load conventional-changelog-atom from node_modules.
  * Referenced packages must be installed
  */
//  parserPreset: 'conventional-changelog-atom',
 /*
  * Resolve and load @commitlint/format from node_modules.
  * Referenced package must be installed
  */
 formatter: '@commitlint/format',
 
//  rules: { 'body-leading-blank': [2, 'always'],
//  'footer-leading-blank': [1, 'always'],
//  'header-max-length': [2, 'always', 108],
//  'subject-empty': [2, 'never'],
//  'type-empty': [2, 'never'],
//  'subject-case': [0],
//  'type-enum': [
//    2,
//    'always',
//    [
//      'feat',
//      'fix',
//      'perf',
//      'style',
//      'docs',
//      'test',
//      'refactor',
//      'build',
//      'ci',
//      'chore',
//      'revert',
//      'wip',
//      'workflow',
//      'types',
//      'release',
//    ],
//  ]},
 /*
  * Functions that return true if commitlint should ignore the given message.
  */
 ignores: [(commit) => commit === ''],
 /*
  * Whether commitlint uses the default ignore rules.
  */
 defaultIgnores: true,
 /*
  * Custom URL to show upon failure
  */
 helpUrl:
   'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
 /*
  * Custom prompt configs
  */
 prompt: {
   messages: {},
   questions: {
     type: {
       description: 'please input type:',
     },
   },
 },
};

module.exports = Configuration;