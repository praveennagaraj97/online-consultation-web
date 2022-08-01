# Linux + Node
FROM node:current-alpine as base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .

# Source + Project dependencies + build assets
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /app ./
RUN yarn build

#  artifacts from build
FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm i next

EXPOSE 3000
CMD yarn start
