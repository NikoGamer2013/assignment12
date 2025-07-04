### Prerequisites

- Docker installed on your system
- Node.js 18+ (for local development)

### Running with Docker

1. Clone the repository
2. Build the Docker image:
   ```bash
   docker build -t lastName_firstName_coding_assignment12 .
   ```

3. Run the container:
   ```bash
   docker run -p 8083:8083 --name lastName_firstName_coding_assignment12 lastName_firstName_coding_assignment12
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8083