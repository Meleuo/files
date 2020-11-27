#!/bin/bash

echo "修改indigo配置文件"
curl https://raw.githubusercontent.com/Meleuo/files/master/_config_indigo.yml  > /app/blog/themes/indigo/_config.yml

echo "修改hexo配置文件"
curl https://raw.githubusercontent.com/Meleuo/files/master/_config.yml > /app/blog/_config.yml

echo "修改语法兼容问题"
curl https://raw.githubusercontent.com/Meleuo/files/master/lexer.js > /app/blog/node_modules/nunjucks/src/lexer.js
