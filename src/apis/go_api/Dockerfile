# Use an official Go runtime as the base image
FROM golang:1.21

#ENV PROJECT_DIR=/app \
#    GO111MODULE=on \
#    CGO_ENABLED=0

# Set the working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files to the container
COPY go.mod .
COPY go.sum .

# Download and install Go module dependencies
RUN go mod download

# Copy the rest of your Go application source code into the container
COPY . .

# Build your Go application
RUN go build -o main .
#RUN go get github.com/githubnemo/CompileDaemon
#RUN go install github.com/githubnemo/CompileDaemon

# Expose the port your API will run on
EXPOSE 6000

# Command to run your application
CMD ["./main"]
#ENTRYPOINT CompileDaemon -build="go build -o /build/app" -command="/build/app"