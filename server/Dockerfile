# Install deps
FROM node:14 AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Run in development mode
FROM node:14 AS dev
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

EXPOSE 5001
CMD ["npm", "run", "dev"]

# Run in production mode
FROM node:14 AS prod
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

EXPOSE 5001
CMD ["npm", "run", "start"]
