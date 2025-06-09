# Stage 1: Build the React application
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

# Stage 2: Serve the production build
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

# Copy the built assets from the builder stage
COPY --from=builder /app/dist .

# Copy custom nginx config if needed
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]