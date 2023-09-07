# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy your frontend code to the appropriate directory in the image
COPY ./dist /usr/share/nginx/html

# Remove the existing default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Create a custom default.conf file to configure Nginx for front-end routing
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '    listen 80;' >> /etc/nginx/conf.d/default.conf && \
    echo '    root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    index index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

# Expose the port that the Nginx server will listen on
EXPOSE 80

# Start Nginx when the container runs
#CMD ["nginx", "-g", "daemon off;"]
