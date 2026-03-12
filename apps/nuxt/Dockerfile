ARG NODE_VERSION=24.12.0
FROM node:${NODE_VERSION}

WORKDIR /app

# Copy the monorepo root config files (package.json lives here with all deps)
COPY package.json nx.json tsconfig.base.json tsconfig.json ./

# Install all workspace dependencies (nuxt, @nx/vite, etc. live at root).
# NODE_ENV must NOT be production here – npm would skip devDependencies.
RUN npm install

# Copy only the Nuxt app sources
COPY apps/nuxt ./apps/nuxt

# Switch to production so nuxt.config.ts skips the Nx project-graph plugins
ENV NODE_ENV=production
ENV NUXT_TELEMETRY_DISABLED=1
ENV PATH="/app/node_modules/.bin:${PATH}"

WORKDIR /app/apps/nuxt
RUN nuxt build

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]