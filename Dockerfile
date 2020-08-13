FROM alpine:3.12

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories &&\
  apk update &&\
  apk add nodejs npm nginx git &&\
  npm install -g yarn &&\
  git clone https://gitee.com/licongli/cpv.git &&\
  cd /cpv &&\
  npm config set registry https://registry.npm.taobao.org &&\
  npm install -g yarn &&\
  yarn install && yarn build &&\
  echo 'server {\
      listen 80;\
      location ^~ /api {\
          proxy_pass http://localhost:8080;\
      }\
      location / {\
          root /cpv/dist;\
          index index.html;\
      }\
  }' >> /etc/nignx/conf.d/default.conf

CMD [ "nginx","-g", "daemon off" ]

EXPOSE 80