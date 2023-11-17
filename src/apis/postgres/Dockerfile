# Use the official PostgreSQL image as the base image
FROM postgres:16.1

# Copy your bootstrap script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Set environment variables if needed
ENV POSTGRES_USER=postgres
ENV POSTGRES_DB=music_streaming

# Expose the PostgreSQL port
EXPOSE 5432
