# Square Payment Form MERN Application

## Overview

This repository contains a MERN (MongoDB, Express.js, React, Node.js) application that integrates Square's payment processing capabilities. It includes a frontend React component for handling payments and a backend server for processing transactions with Square. To use it in your Project, just move the components into your app and install the dependencies.

## Features

- Full-stack MERN application with a focus on payment processing.
- Integration with Square's secure payment system.
- Reusable React component for Square payment forms.
- Backend service for handling payment transactions.

## Prerequisites

- Node.js and npm installed.
- MongoDB setup (locally or remotely).
- Square account with Application and Location IDs for payment processing.

## Installation

1. Clone the repository:

    ```bash
    git clone [your-repo-link]
    ```

2. Navigate to the project directory:

    ```bash
    cd [your-project-directory]
    ```

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install backend dependencies:

    ```bash
    npm install dotenv mongoose cors express square uuid
    ```

3. Create a `.env` file in the backend directory and set your Square access token:

    ```
    SQUARE_ACCESS_TOKEN=[Your Square Access Token]
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install react-square-web-payments-sdk
    ```

3. Create a `.env` file in the frontend directory and set your Square Application and Location IDs:

    ```
    REACT_APP_SQUARE_APPLICATION_ID_SANDBOX=[Your Application ID]
    REACT_APP_SQUARE_LOCATION_ID_SANDBOX=[Your Location ID]
    ```

4. Start the frontend application:

    ```bash
    npm start
    ```

## Usage

Once both the frontend and backend are set up and running, navigate to the frontend URL (typically `http://localhost:3000`) to interact with the payment form.

## Contributing

Contributions to the project are welcome. Feel free to fork the repository, make changes, and submit pull requests.

## License

MIT

## Screenshots
<img width="500" alt="Screenshot 2024-01-18 at 1 43 34 PM" src="https://github.com/Austin1serb/SQUARE_PAYMENT_FORM/assets/128577470/e52eb389-0581-4490-bf81-94d44ea82f2f">

<img width="500" alt="Screenshot 2024-01-18 at 1 43 51 PM" src="https://github.com/Austin1serb/SQUARE_PAYMENT_FORM/assets/128577470/182993c9-8586-4d0d-868d-6de404841f96">

<img width="500" alt="Screenshot 2024-01-18 at 1 44 00 PM" src="https://github.com/Austin1serb/SQUARE_PAYMENT_FORM/assets/128577470/147f60cd-2112-47fa-b4a3-bd27a4da6a1c">

