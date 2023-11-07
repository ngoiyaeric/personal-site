# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Expose port 80 for the web server
EXPOSE 8080

# Define the command to run the application
CMD CMD ["npm", "run", "dev"]
