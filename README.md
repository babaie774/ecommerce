# NestCommerce

A modern e-commerce platform built with NestJS, featuring a robust backend API for managing products, orders, and user interactions.

## Features

- 👤 User Authentication & Authorization
- 🛍️ Product Management
- 🛒 Shopping Cart Functionality
- 📦 Order Processing
- 🏷️ Category Management
- 📍 Address Management
- 🎫 Ticket System
- ✨ RESTful API

## Tech Stack

- NestJS
- TypeScript
- TypeORM
- MySQL
- JWT Authentication
- Class Validator
- Passport

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/nestcommerce.git
cd nestcommerce
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure environment variables

```bash
cp .env.example .env
# Edit .env with your database credentials and other configurations
```

4. Run migrations

```bash
npm run typeorm:migration:run
```

5. Start the development server

```bash
npm run start:dev
```

## API Documentation

The API will be available at `http://localhost:3000`

### Main Endpoints

- `/auth` - Authentication routes
- `/users` - User management
- `/products` - Product operations
- `/categories` - Category management
- `/orders` - Order processing
- `/tickets` - Support ticket system

## Scripts

- `npm run start:dev` - Start development server
- `npm run build` - Build the application
- `npm run start:prod` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:e2e` - Run end-to-end tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/nestcommerce](https://github.com/yourusername/nestcommerce)

## Acknowledgments

- NestJS Documentation
- TypeORM
- Node.js community
