# Stage 1: Build the application
FROM python:3.10-slim-buster as builder

# Set the working directory inside the container
WORKDIR /backend

# Copy only the requirements file to leverage Docker caching
COPY requirements.txt .

# # Create a virtual environment and install dependencies
# RUN python -m venv venv && \
#     . venv/bin/activate && \
#     pip install --no-cache-dir -r requirements.txt

# # Stage 2: Create a minimal production image
# FROM python:3.10-slim-buster

# # Set metadata as labels for the image
# LABEL maintainer="Smit Gabani <gabanismit11@gmail.com>"
# LABEL description="Crumble Flask back-end"

# # Set the working directory inside the container
# WORKDIR /backend

# # Copy the virtual environment and application code from the builder stage
# COPY --from=builder /backend/venv /backend/venv

RUN pip3 install -r requirements.txt

COPY . .

# Set environment variables
ENV FLASK_ENV=development

# Expose the port specified in the environment variable PORT
EXPOSE ${PORT}

# Define a health check command
HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:${PORT}/health || exit 1

# Run the Flask application
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]
# CMD ["venv/bin/python", "-m", "flask", "run", "--host=0.0.0.0", "--port=4567"]