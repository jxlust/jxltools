# jxltools

jxlust前端工具库

1. tsconfig.json

```
tsc --init
```

2. tsconfig.json配置参考

```json
{
    "compilerOptions": {
      "target": "esnext",
      "module": "esnext",
      "strict": true,
      "jsx": "preserve",
      "importHelpers": true,
      "moduleResolution": "node",
      "skipLibCheck": true,
      "esModuleInterop": true,
      "resolveJsonModule": true,
      "allowSyntheticDefaultImports": true,
      "sourceMap": true,
      "baseUrl": ".",
      "types": [
        "webpack-env"
      ],
      "paths": {
        "@/*": [
          "src/*"
        ]
      },
      "lib": [
        "esnext",
        "dom",
        "dom.iterable",
        "scripthost"
      ]
    },
    "include": [
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.vue",
      "tests/**/*.ts",
      "tests/**/*.tsx"
    ],
    "exclude": [
      "node_modules"
    ]
  }
  
```

3. 安装依赖

```
npm i -D rollup typescript tslib rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-typescript
```

4. Rollup配置
1. Rollup配置文件每个配置项的具体含义可以参考：<https://www.rollupjs.com/guide/big-list-of-options>
2. Rollup可用插件列表可以参考：<https://github.com/rollup/plugins>

5. 配置代码规范

+ 安装依赖

```
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D prettier
npm i -D husky lint-staged
```

+ 添加配置文件 .eslintrc.js
+ 添加配置文件 .prettierrc
+ package.json 新增配置

```
"lint": "eslint 'src/**/*.{js,ts}'",
"prettier": "prettier --write --loglevel log 'src/**/*.{js,json,tsx,css,less,scss,vue,html,md,ts}'"
 "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*./src/**/*.{js,ts,json,css,less,md}": [
      "prettier --write",
      "npm run lint"
    ]
  }
```


# vue3组件开发
1. package包里面可看配置等
2. 本地测试
```shell
npm link
# link vue 开发项目和测试项目的 vue 版本不同，使用 link 保证正常使用
npm link 测试项目路径\node_modules\vue\
```
测试项目里面
```
npm link jxlUI
```