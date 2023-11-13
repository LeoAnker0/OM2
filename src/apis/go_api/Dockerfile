# Use an official Go runtime as the base image
FROM golang:1.21

# FOR GETTING IMAGE TRANSFORMATIONS WORKING
# install build essentials
RUN apt-get update && \
    apt-get install -y wget build-essential pkg-config --no-install-recommends

# Install ImageMagick deps
RUN apt-get -q -y install libjpeg-dev libpng-dev libtiff-dev \
    libgif-dev libx11-dev ffmpeg --no-install-recommends

ENV IMAGEMAGICK_VERSION=6.9.10-11

RUN cd && \
	wget https://github.com/ImageMagick/ImageMagick6/archive/${IMAGEMAGICK_VERSION}.tar.gz && \
	tar xvzf ${IMAGEMAGICK_VERSION}.tar.gz && \
	cd ImageMagick* && \
	./configure \
	    --without-magick-plus-plus \
	    --without-perl \
	    --disable-openmp \
	    --with-gvc=no \
	    --disable-docs && \
	make -j$(nproc) && make install && \
	ldconfig /usr/local/lib

#ENV PROJECT_DIR=/app \
#    GO111MODULE=on \
#    CGO_ENABLED=0

ENV STORAGE_MODE=system

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

# Expose the port your API will run on
EXPOSE 6000

# Command to run your application
CMD ["./main"]
