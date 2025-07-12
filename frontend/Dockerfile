# Use Node.js official image as base
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./frontend/

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Create a minimal image with only the build output
FROM alpine:latest

WORKDIR /app

# Copy built app from build stage
COPY --from=build /app/build ./build

# The build output is now in /app/build for Caddy or another server to serve
