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

4.Rollup配置
1. Rollup配置文件每个配置项的具体含义可以参考：https://www.rollupjs.com/guide/big-list-of-options
2. Rollup可用插件列表可以参考：https://github.com/rollup/plugins