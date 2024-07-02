# Candidate Form Application

This is an Angular application that provides a form for candidate submissions. The form includes fields for the candidate's first name, last name, email, phone number, time to call, LinkedIn profile, GitHub profile, and a comment section. The application is built with standalone components.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Form Validation](#form-validation)

## Prerequisites

Make sure you have the following installed:

- Node.js (>= 12.0.0)
- Angular CLI (>= 12.0.0)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Alaaeldin-Fawzy/candidate-form-app.git
   cd candidate-form-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application locally, use:

```bash
ng serve
```

## Features

- Angular reactive forms
- Form validation
- Standalone component architecture

## Form Validation

#### The form includes the following validation rules:

- First Name: Required, minimum length of 2, maximum length of 50.
- Last Name: Required, minimum length of 2, maximum length of 50.
- Email: Required, valid email format.
- Phone Number: Optional, must be a valid phone number if provided.
- Time to Call: Optional.
- LinkedIn Profile: Optional, must be a valid URL if provided.
- GitHub Profile: Optional, must be a valid URL if provided.
- Comment: Required, minimum length of 10.

## API Service

The application includes a service to make POST request to `http://localhost/candidate` to add new candidate or update an existing one.
