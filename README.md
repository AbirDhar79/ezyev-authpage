# ezyev-authpage
#Next.js ShadCN UI Authentication Project
#Project Overview
This is a simple Next.js application that demonstrates a basic authentication flow with ShadCN UI components. The project includes:




# EzyEV Authentication Page

This project is a Next.js-based authentication system with protected routes, built using ShadCN UI components.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Contributing](#contributing)

## Project Overview

This project provides a basic authentication mechanism using Next.js and ShadCN UI. Users can log in using hardcoded credentials, and authenticated users can access protected routes.

## Technologies Used

- [Next.js](https://nextjs.org/) - Framework for server-rendered React applications
- [ShadCN UI](https://shadcn.dev) - A simple, responsive UI component library
- [Zustand](https://zustand.surge.sh/) - A small, fast, and scalable state management solution
- [TypeScript](https://www.typescriptlang.org/) - Type safety and enhanced code quality

## Features

- Simple login page
- Protected page accessible only by logged-in users
- Client-side authentication using Zustand for state management
- Responsive and clean UI using ShadCN components

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbirDhar79/ezyev-authpage.git

A /login page where users can log in using a hardcoded username and password.
A protected /example page that is only accessible to authenticated users.
State management using Zustand to handle the authentication state.
Client-side authentication logic with form validation.
Features
Authentication: Users can log in using the credentials:
Username: user
Password: password
Protected Page: If users are not authenticated, they are redirected to the login page.
Responsive Design: The authentication page is fully responsive, utilizing ShadCN UI for styling.
State Persistence: Authentication state persists across page reloads.
Tech Stack
Next.js (Latest stable version)
ShadCN UI (For UI components and styling)
Zustand (For state management)
TypeScript (For type safety)
Getting Started
Prerequisites
Node.js: Make sure you have Node.js installed (version 14.x or above).
npm or yarn: Ensure you have either npm or yarn installed as the package manager.
