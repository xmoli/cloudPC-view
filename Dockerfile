FROM nginx:1.18.0
ARG node=https://npm.taobao.org/mirrors/node/v14.6.0/node-v14.6.0-linux-x64.tar.xz
ARG nodename=node-v14.6.0-linux-x64
RUN echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free' > /etc/apt/sources.list && \
    apt-get update -y &&\
    apt-get install xz-utils -y &&\
    cd / && curl -fsSLO ${node} &&\
    tar -xJf ${nodename}.tar.xz &&\
    rm /${nodename}.tar.xz && \
    ln -sf /${nodename}/bin/npm /bin/npm &&\
    ln -sf /${nodename}/bin/node /bin/node &&\
    ln -sf /${nodename}/bin/npx /bin/npx && \
    npm install -g npm
    
COPY ./ /build/

RUN cd /build && \
    npm install && \
    npm run build &&\
    cp ./dist /app &&\
    cp ./docker.nginx.conf / &&\
    rm -r /build &&\
    cd / && rm -rf node* &&\
    apt-get remove xz-utils

EXPOSE 80
ENTRYPOINT ["nginx", "-c"]
CMD ["/docker.nginx.conf"]