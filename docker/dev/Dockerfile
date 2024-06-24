# Install dependencies only when needed
FROM node:16-alpine

ENV NODE_ENV=development

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js jsconfig.json ./
COPY package.json yarn.lock ./
#COPY /app/node_modules ./node_modules
COPY . .

EXPOSE 3030

ENV PORT=3030

CMD ["npm", "run", "dev"]