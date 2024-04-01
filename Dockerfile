# The base image 
FROM nginx:alpine
# The working directory in the container 
WORKDIR /usr/share/ginx/html
# The application code into the container
COPY index.html .
COPY styles.css .
COPY script.js .
# Prt 80 to allow external access
EXPOSE 80
# command to start the nginx server in the foreground
CMD ["nginx","-g","daemon off;"]
