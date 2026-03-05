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

  verification: {
    google: "ODHv9ELXkk13LjALCbXLDQTIIbR_rwgHBLULAXquRug",
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
      </body>
    </html>
  );
}
