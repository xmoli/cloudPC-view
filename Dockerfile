FROM nginx:1.18.0
ARG node=https://npm.taobao.org/mirrors/node/v14.6.0/node-v14.6.0-linux-x64.tar.xz
ARG nodename=node-v14.6.0-linux-x64
RUN  cd / && echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free' > /etc/apt/sources.list && \
    apt update &&\
    apt install xz-utils &&\
    curl -fsSLO ${node} &&\
    tar -xJf ${nodename}.tar.xz &&\
    ln -sf /${nodename}/bin/npm /bin/npm &&\
    ln -sf /${nodename}/bin/node /bin/node &&\
    ln -sf /${nodename}/bin/npx /bin/npx
    
COPY ./src /app/src/
COPY ./*js* /app/
COPY ./*conf /app/

RUN cd /app && \
    npm install && \
    npm run build

EXPOSE 80
ENTRYPOINT ["nginx", "-c"]
CMD ["/app/nginx.conf"]