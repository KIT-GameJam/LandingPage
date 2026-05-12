FROM node:alpine

ENV NODE_ENV=production
ENV PORT=3000

RUN corepack enable

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --chown=node:node . .
RUN pnpm run build
EXPOSE $PORT

CMD ["pnpm", "start"]