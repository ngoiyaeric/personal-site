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

# Build the React app for production (if necessary)

# Install required tools
RUN apk --no-cache add python3 py3-pip
RUN pip3 install beautifulsoup4

# Copy the embed script (embed.py) and password template (password_template.html)
COPY embed.py .
COPY password_template.html .

# Embed assets and protect the HTML page
RUN python3 embed.py
RUN staticrypt index.html -p ${PASSWORD} --short \
    --template "password_template.html" \
    --template-title "Login" \
    --template-instructions "This is a test website, use the password 'test' to enter." \
    --template-button "Open Page" \
    --template-color-primary "#113e9f" \
    --template-color-secondary "#e4e4e4" \
    && mv encrypted/index.html index.html \
    && rm -r encrypted

# Expose port 80 for the web server
EXPOSE 80

# Define the command to run the application
CMD ["npm", "start"]
