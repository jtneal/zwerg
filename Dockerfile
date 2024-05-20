FROM node:20-alpine as build
USER node
WORKDIR /app
COPY --chown=node:node apps apps
COPY --chown=node:node libs libs
COPY --chown=node:node .eslintrc.json .
COPY --chown=node:node nx.json .
COPY --chown=node:node package*.json .
COPY --chown=node:node tsconfig.base.json .
RUN npm ci
RUN npx nx run-many --verbose --target=build --projects=zwerg-api,zwerg-web
RUN npm prune --omit=dev

FROM node:20-alpine as prod
USER node
WORKDIR /app
ENV NODE_ENV production
COPY --chown=node:node --from=build /app/dist/apps/zwerg/api ./dist
COPY --chown=node:node --from=build /app/dist/apps/zwerg/web/browser ./dist/public
COPY --chown=node:node --from=build /app/node_modules ./node_modules
CMD ["node", "dist/main"]
