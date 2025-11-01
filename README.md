# Wild Oasis Website

A modern cabin rental booking website built with Next.js. This application allows users to browse luxury cabins, make reservations, and manage their accounts.

## Features

- 🏡 **Cabin Listings** - Browse and explore available luxury cabins
- 📅 **Reservation System** - Book and manage cabin reservations
- 👤 **User Accounts** - User authentication and profile management
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI** - Built with Tailwind CSS for a beautiful user experience

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Backend**: [Supabase](https://supabase.com)
- **Icons**: [Heroicons](https://heroicons.com)
- **Date Utilities**: [date-fns](https://date-fns.org)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ and npm (or yarn, pnpm, bun)
- A Supabase account and project

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd next-wild-oasis-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

### 4. Run the development server

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

The page auto-updates as you edit files in the `app` directory.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production (static export)
- `npm run start` - Start the production server
- `npm run preview` - Build and preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── app/
│   ├── _components/       # Reusable React components
│   ├── _lib/             # Utility functions and services
│   ├── _styles/          # Global styles
│   ├── about/            # About page
│   ├── account/          # User account pages (profile, reservations)
│   ├── cabins/           # Cabin listing and detail pages
│   └── page.tsx          # Home page
├── public/               # Static assets (images, etc.)
└── package.json          # Dependencies and scripts
```
