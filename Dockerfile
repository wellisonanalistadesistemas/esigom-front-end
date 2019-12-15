FROM node:latest as node

#dev qa production
ARG environment

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli \
    && npm install node-sass \
    && npm install \    
    && cp ./src/environments/environment.dev.ts ./src/environments/environment.ts \
    && ng build --prod --configuration=$environment
    
# STAGE 2

FROM node:10.15.3-alpine
#FROM node:latest 

WORKDIR /app

COPY --from=node /app/package-server.json /app/package.json

COPY --from=node /app/server.ts /app/server.ts

COPY --from=node /app/dist /app/dist

    
RUN npm install \
    && mkdir remessas \
    && cp -rf dist/browser/* remessas \
    && mv remessas dist/browser

EXPOSE 4000

CMD node server.ts
