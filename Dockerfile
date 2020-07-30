FROM nginx:1.18.0
ARG node=https://npm.taobao.org/mirrors/node/v14.6.0/node-v14.6.0-linux-x64.tar.xz
ARG nodename=node-v14.6.0-linux-x64
RUN  cd / && echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free' > /etc/apt-get/sources.list && \
    apt-get update &&\
    apt-get install xz-utils &&\
    curl -fsSLO ${node} &&\
    tar -xJf ${nodename}.tar.xz &&\
    ln -sf /${nodename}/bin/npm /bin/npm &&\
    ln -sf /${nodename}/bin/node /bin/node &&\
    ln -sf /${nodename}/bin/npx /bin/npx
    
COPY ./src /build/src/
COPY ./public /build/public/
COPY ./*js* /build/
COPY ./docker.nginx.conf /

RUN cd /build && \
    npm install && \
    npm run build &&\
    cp ./dist /app &&\
    rm -r /build &&\
    cd / && rm -rf node* &&\
    apt-get remove xz-utils

EXPOSE 80
ENTRYPOINT ["nginx", "-c"]
CMD ["/docker.nginx.conf"]