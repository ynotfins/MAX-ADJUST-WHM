# Step 1: Build the Next.js application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Step 2: Create a lightweight production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
