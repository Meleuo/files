#!/bin/bash

echo "修改indigo配置文件"
curl https://raw.githubusercontent.com/Meleuo/files/master/_config_indigo.yml  > /app/blog/themes/indigo/_config.yml

echo "修改hexo配置文件"
curl https://raw.githubusercontent.com/Meleuo/files/master/_config.yml > /app/blog/_config.yml

echo "UPDATE CNAME"
curl https://raw.githubusercontent.com/Meleuo/files/master/CNAME > /app/blog/source/CNAME
curl https://raw.githubusercontent.com/Meleuo/files/master/CNAME > /app/blog/public/CNAME
