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

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
