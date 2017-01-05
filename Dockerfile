# Create image based on the official Node 6 image from dockerhub
FROM node:6

ENV INSTALL_PATH /onebnb_client

RUN npm install -g angular-cli

# Create a directory where our app will be placed
RUN mkdir -p $INSTALL_PATH

# Change directory so that our commands run inside this new directory
WORKDIR $INSTALL_PATH

# Copy dependency definitions
COPY package.json .

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Serve the app
CMD ["npm", "start"]
