FROM node:14

WORKDIR /new_hasura_project

# Install serverless locally
RUN npm install -g serverless

# Copy the project files into the container
COPY . /new_hasura_project
