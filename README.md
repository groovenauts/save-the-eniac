# help-eniac

> Experience programming for Kids

[Play here!](https://nacanori.github.io/help-eniac/)


## Build Setup

``` bash
# if via container
sudo docker run --name eniac -it  -p 3000:8080 -v `pwd`:/usr/app -w /usr/app node:8.0 bash

# install dependencies
npm install

# serve with hot reload at localhost:8080 (port 3000 if via container)
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# deployment to GithubPage
npm run deploy
```
