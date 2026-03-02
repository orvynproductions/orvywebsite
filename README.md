# GreenSprout Microgreens - Next.js 14

A complete e-commerce website for a microgreens business built with Next.js 14, App Router, and Tailwind CSS.

## Features

- **Home Page**: Hero section, product showcase, facility carousel, about section, benefits, testimonials, contact form
- **Shop**: Product catalog with filtering and search
- **Cart**: Add/remove items, update quantities
- **Checkout**: Complete order form with delivery information
- **Admin**: Login and order management dashboard

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Runtime**: Node.js 20+
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Poppins, Qwitcher Grypen)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd microgreens-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Admin Access

- **URL**: `/admin`
- **Username**: `admin`
- **Password**: `greensprout2025`

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin login and dashboard
│   ├── shop/              # Shop page
│   ├── checkout/          # Checkout page
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/                # UI components
│   └── ScrollToTop.tsx    # Scroll to top button
├── contexts/              # React contexts
│   ├── AuthContext.tsx    # Authentication
│   ├── CartContext.tsx    # Shopping cart
│   └── OrdersContext.tsx  # Order management
├── lib/                   # Utility functions and config
│   ├── config.ts          # Site configuration
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   └── images/            # Product and section images
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

Vercel will automatically detect the Next.js project and configure the build settings.

### Other Platforms

The project can be deployed to any platform that supports Node.js 20+ and Next.js 14.

## License

MIT
