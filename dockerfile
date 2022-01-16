# Build AdonisJS
FROM node:16-alpine as builder
# Set directory for all files
WORKDIR /home/node/app
# Copy over package.json files
COPY package*.json ./
# Install all packages
RUN npm install
# Copy over source code
COPY . .
# Build AdonisJS for production
RUN npm run build --production


# Build final runtime container
FROM node:16-alpine
# Set environment variables
WORKDIR /home/node/app
# Copy over built files
COPY --from=builder /home/node/app/build .
# Install only required packages
RUN yarn install --frozen-lockfile --production
# Expose port to outside world
EXPOSE 3333
# Start server up
CMD node server.js | ./node_modules/.bin/pino-papertrail --host logs4.papertrailapp.com --port 18518 --appname helios
