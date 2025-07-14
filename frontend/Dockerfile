# Use Node.js official image as base (using standard debian-based image for better compatibility)
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package files from the project subdirectory
COPY project/package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code from the project subdirectory
COPY project/ ./

# Build the React app
RUN npm run build

# Create a minimal image with nginx to serve the static files
FROM nginx:alpine

# Copy built app from build stage to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
