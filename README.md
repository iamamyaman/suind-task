# Suind frontend task

This project is a Dockerized React application. It uses Docker to containerize the application, allowing for easy deployment and consistency across environments.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: Install Docker on your machine. You can download it from [here](https://www.docker.com/products/docker-desktop).

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine:

`git clone https://github.com/iamamyaman/suind-task.git`

`cd suind-task`

### Step 2: Build the Docker Image

`docker buildx build -t suind-task .`

### Step 3:Run the Docker Container

`docker run -p 3000:3000 suind-task`

### Step 4: Access the Application

Open your web browser and go to: `http://localhost:3000`

Use this credential to login - (username - admin, password - password123)



