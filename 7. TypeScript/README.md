### typescript 초기 Setting 

```
npm init --y
npm i -D typescript ts-node  
npm i -D @types/node  
npm i  
tsc --init
```

### package.json 환경 설정
```
"script": {
    "dev": "ts-node src",
    "build": "tsc && node dist"
}
```

### tsconfig.json 환경 설정
```
{
    "complierOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "targer": "es5",
        "moduleResolution": "node",
        "outDir": "dist",
        "baseUrl": ".",
        "sourceMap": true,
        "douwnlevelIteration": true,
        "noImplicitAny": false,
        "paths": { "*": [ "node_modules/*" ] }
    },
    "include": [ "src/**/*" ]
}
```
