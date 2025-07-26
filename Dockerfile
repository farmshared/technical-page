FROM node:23-alpine3.20 AS build

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    linux-headers \
    eudev-dev  \  
    && yarn install  \
    && yarn run build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
