FROM oven/bun:1.2.2 AS base
WORKDIR /usr/src/app

# Install dependencies
FROM base AS dependencies
RUN mkdir -p /temp/dev
COPY package.json bun.lock* /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile


# Build the app
FROM base AS build
COPY --from=dependencies /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run typecheck
RUN bun test
RUN bun run build

# Production image
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist .

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]
