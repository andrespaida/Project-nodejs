# Project-nodejs

This project aims to showcase a simple web page built using **HTML** and **Node.js**. It is a basic demonstration of a static webpage that can be run locally using Docker.

## Technologies Used

- **HTML**
- **Node.js**

## Installation

To run this project, follow these steps:

### Download the project image from DockerHub**:

Run the following command to pull the latest image of the project:

   docker pull andrespaida/web-page-nodejs:latest

### Create a container from the downloaded image**:

Next, create and run the container with this command:

    docker run -d -p 3000:3000 --name web-container3 andrespaida/web-page-nodejs:latest

### Access the webpage:

Once the container is running, open your browser and go to:

    http://localhost:3000

## License

This project is under the creator's license (Andrés Paida). All rights reserved.