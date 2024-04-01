# Web_application
  # To run the application locally:
    1. clone the repository
    2. navigate the project directory
    3. start a Web server
    4. open application in a web browser.
    5. interact with the application
  # Containerization with Docker:
    1. Dockerfile:
            - specified a base image suitable fo hosting the web application
            - innstalled any necessary dependecies required by our application
            - copied the HTML, CSS, and JavaScript files into the container
            - eexpose the port on which the application runs
            - specify the command to run the application, such as starting the web server.
    2. Built Docker Image:
            - built the Docker image using the Dockerfile
            - Ensured that the Docker image encapsulates all the components requiredto run the web application
    3. Push to docker Hub:
            - pushed the built Docker image to Docker Hub
            - Docker image is publicly accessible for evaluation purposes.

