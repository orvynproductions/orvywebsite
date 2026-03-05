import type { Metadata } from 'next';
import { Cormorant_Garamond, Poppins, Qwitcher_Grypen } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { OrdersProvider } from '@/contexts/OrdersContext';
import { siteConfig } from '@/lib/config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const qwitcher = Qwitcher_Grypen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  metadataBase: new URL("https://orvywebsite.vercel.app"),

  verification: {
    google: "ODHv9ELXkk13LjALCbXLDQTIIbR_rwgHBLULAXquRug",
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://orvywebsite.vercel.app",
    siteName: "Orvyn Productions",
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${qwitcher.variable}`}>
      <body className="font-sans bg-page text-white overflow-x-hidden">
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
        <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FoodEstablishment",
                "name": "Orvyn Productions",
                "image": "https://orvywebsite.vercel.app/images/og-image.jpg",
                "url": "https://orvywebsite.vercel.app/",
                "description": "Premium organic microgreens grown locally and delivered fresh in Bangalore.",
                "servesCuisine": "Microgreens",
                "areaServed": "Bangalore",
                "brand": {
                "@type": "Brand",
                "name": "Orvyn Productions"
                }
                 })
                   }}
                 />
      </body>
    </html>
  );
}
