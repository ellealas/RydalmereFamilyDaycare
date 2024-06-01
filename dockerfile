# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 5500 (or any port you prefer)
EXPOSE 5500

# Run the command to start the HTTP server
CMD ["python3", "-m", "http.server", "5500"]
