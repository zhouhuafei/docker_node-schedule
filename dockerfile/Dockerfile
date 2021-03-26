# 从一个基础镜像node:latest开始构建
FROM node:latest

# 维护者信息
MAINTAINER zhouhuafei "1123486116@qq.com"

# 创建工作目录
RUN mkdir -p /root/app/
# 指定工作目录 - 相当于执行cd命令。切换目录，为后续的RUN、CMD、ENTRYPOINT 指令配置工作目录。
WORKDIR /root/app/

# 更新apt-get
RUN apt-get update -y

# 安装基础工具 - ifconfig
RUN apt-get install -y net-tools
# 安装基础工具 - vim
RUN apt-get install -y vim

# 安装cnpm
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
