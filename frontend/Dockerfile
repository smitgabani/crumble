# Stage 1: Build the application
FROM node:16.14.0@sha256:fd86131ddf8e0faa8ba7a3e49b6bf571745946e663e4065f3bff0a07204c1dde as builder
# Set the working directory to /frontend
WORKDIR /frontend
# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./
# Install all dependencies including development dependencies
RUN npm install
# Copy the rest of the application code into the image
COPY . .
# Build the React application
RUN npm run build

# Stage 2: Create a minimal production image
FROM node:16.14.0-slim
# Set metadata as labels for the image
LABEL maintainer="Smit Gabani <gabanismit11@gmail.com>"
LABEL description="Crumble React front-end"
# Set the environment variable for the application's port
ENV PORT=3000
# Create a non-root user to run the application
RUN useradd -m user
USER user
# Set the working directory inside the user's home directory
WORKDIR /home/user/frontend
# Copy the built application from the builder stage
COPY --from=builder /frontend/build ./build
# Expose port 3000 to allow external access to the application
EXPOSE 3000
# Define the default command to serve the production application
CMD ["npx", "serve", "-s", "build"]
