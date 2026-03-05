export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://orvywebsite.vercel.app/sitemap.xml",
  };
}