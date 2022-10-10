# We are using node-16 for our environment
FROM node:16-alpine
WORKDIR '/app'

# Copy package.json & package-lock.json for installation (include .env)
COPY package.json .
COPY package-lock.json .
COPY .env .

# npm ci is similar to npm install, see https://docs.npmjs.com/cli/v8/commands/npm-ci
RUN npm ci

# Copy all files after build
COPY . .

# Running the app
CMD ["npm", "run", "serve"]
