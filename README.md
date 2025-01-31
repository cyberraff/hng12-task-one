# HNG12 Public API

This is a simple public API built with Node.js and Express that returns JSON-formatted information, including the registered email, current datetime in ISO 8601 format, and a GitHub repository URL.

## Features

-   Returns the registered email address.
-   Provides the current datetime dynamically in ISO 8601 format (UTC).
-   Includes a public GitHub repository URL.
-   Handles CORS to allow cross-origin requests.

## Technologies Used

-   **Node.js** (JavaScript runtime)
-   **Express.js** (Web framework for Node.js)
-   **CORS** (Cross-Origin Resource Sharing)

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/en/download/)
-   npm (included with Node.js)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/cyberraff/hng12-task-one.git
    cd hng12-task-one
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm run dev
    ```

    The server should now be running on `http://localhost:3000`.

## API Documentation

### Endpoint

```
GET /
```

### Response Format (200 OK)

```json
{
	"email": "your-email@example.com",
	"current_datetime": "2025-01-30T09:30:00Z",
	"github_url": "https://github.com/cyberraff/hng12-task-one"
}
```

### Example Usage

```sh
curl -X GET https://your-deployed-url.com/
```

## Deployment

To deploy the API to a cloud platform such as Vercel, Render, or Railway:

1. Push the repository to GitHub.
2. Deploy using your preferred platform (Vercel, Render, or Railway).
3. Update the `README.md` with the correct deployment URL.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

-   **Your Name** - [GitHub Profile](https://github.com/cyberraff)
