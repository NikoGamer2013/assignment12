FROM node:20-alpine

WORKDIR /cancino_nicolas_ui_garden

# Copy package files first
COPY package*.json ./

# Install dependencies in the container (this will get the correct platform binaries)
RUN npm ci

# Copy source code (make sure node_modules is in .dockerignore)
COPY . .

# Build commands
RUN npm run build-storybook

EXPOSE 8083