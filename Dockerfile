FROM alpine:3.12

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories &&\
  apk update &&\
  apk add nodejs npm nginx git -y &&\
  npm install -g yarn &&\
  git clone https://github.com/xmoli/cloudPC-view.git /app-view &&\
  cd /app-view &&\
  npm install -g yarn &&\
  yarn install && yarn build
  
COPY ./*.conf ./

ENTRYPOINT [ "nginx","-c","/app-view/nginx.conf" ]
EXPOSE 80