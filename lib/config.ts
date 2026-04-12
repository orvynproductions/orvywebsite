// =============================================================================
// Microgreens Farm Configuration
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Orvyn Productions | Premium Organic Microgreens in Bangalore",
  description:
    "Orvyn Productions grows premium organic microgreens in Bangalore. Fresh, nutrient-dense superfoods delivered to homes, restaurants, and health-conscious customers.",
  language: "en",
  keywords:
    "Orvyn Productions, Orvyn Microgreens, microgreens Bangalore, organic microgreens Bangalore, buy microgreens Bangalore, fresh microgreens India, wheatgrass, sunflower microgreens, pea shoots, radish microgreens, broccoli microgreens, basil microgreens, mustard microgreens, kale microgreens, amaranth microgreens, coriander microgreens, fenugreek microgreens",
  ogImage: "/images/og-image.jpg",
  canonical: "https://orvywebsite.vercel.app/"
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavLink {
  name: string;
  href: string;
  icon: string;
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Orvyn Productions",
  brandSubname: "Premium Organic Microgreens",
  tagline: "Fresh • Organic • Local",
  navLinks: [
    { name: "Home", href: "/", icon: "Home" },
    { name: "Our Greens", href: "/#products", icon: "Leaf" },
    { name: "About Us", href: "/#about", icon: "Users" },
    { name: "Benefits", href: "/#benefits", icon: "Heart" },
    { name: "Shop", href: "/shop", icon: "ShoppingBag" },
    { name: "Contact", href: "/#contact", icon: "Mail" },
  ],
  ctaButtonText: "Order Now",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Nutrient-Packed Superfoods",
  mainTitle: "Fresh Microgreens\nDelivered Daily",
  ctaButtonText: "Explore Our Greens",
  ctaTarget: "#products",
  stats: [
    { value: 15, suffix: "+", label: "Varieties Grown" },
    { value: 100, suffix: "%", label: "Organic" },
    { value: 24, suffix: "h", label: "Farm to Table" },
    { value: 100, suffix: "+", label: "Happy Customers" },
  ],
  decorativeText: "SUSTAINABLE • ORGANIC • FRESH",
  backgroundImage: "/images/hero-microgreens.jpg",
};

// -----------------------------------------------------------------------------
// Product Showcase Config
// -----------------------------------------------------------------------------
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  nutritionFacts: string;
  flavor: string;
  shelfLife: string;
  harvestTime: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface ProductShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  products: Product[];
  features: ProductFeature[];
  quote: ProductQuote;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  scriptText: "Our Collection",
  subtitle: "PREMIUM MICROGREENS",
  mainTitle: "Discover Our Varieties",

  features: [
    {
      icon: "Leaf",
      title: "Freshly Harvested",
      description: "Cut fresh daily to ensure maximum nutrition and taste",
    },
    {
      icon: "Shield",
      title: "100% Organic",
      description: "Grown without pesticides or harmful chemicals",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Delivered fresh within hours of harvest",
    },
  ],

  products: [
    {
      id: "pea-shoots",
      name: "Pea Shoots",
      subtitle: "Sweet & Crisp",
      price: "₹69",
      image: "/images/pea-shoots.png",
      filter: "",
      glowColor: "bg-green-500/20",
      description: "Tender green shoots with a naturally sweet pea flavor. Perfect for salads, wraps, and smoothies.",
      nutritionFacts: "Rich in vitamins A, C, and folate",
      flavor: "Sweet, fresh, and slightly grassy",
      shelfLife: "3-5 days refrigerated",
      harvestTime: "10-14 days",
    },
    {
      id: "sunflower",
      name: "Sunflower Shoots",
      subtitle: "Nutty & Crunchy",
      price: "₹79",
      image: "/images/sunflower-shoots.png",
      filter: "",
      glowColor: "bg-yellow-500/20",
      description: "Crunchy and filling microgreens with a nutty taste. Great for sandwiches and bowls.",
      nutritionFacts: "High in protein, vitamin E, and healthy fats",
      flavor: "Nutty, mildly sweet with crunch",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "radish",
      name: "Radish Microgreens",
      subtitle: "Peppery & Bold",
      price: "₹89",
      image: "/images/radish-microgreens.png",
      filter: "",
      glowColor: "bg-red-500/20",
      description: "Colorful microgreens with a spicy kick. Adds heat and vibrance to dishes.",
      nutritionFacts: "Rich in vitamin C and antioxidants",
      flavor: "Spicy, peppery, and sharp",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "5-7 days",
    },
    {
      id: "broccoli",
      name: "Broccoli Microgreens",
      subtitle: "Mild & Nutritious",
      price: "₹129",
      image: "/images/broccoli-microgreens.png",
      filter: "",
      glowColor: "bg-emerald-500/20",
      description: "Nutrient-dense greens known for detox benefits and daily nutrition support.",
      nutritionFacts: "High in sulforaphane and antioxidants",
      flavor: "Mild, slightly earthy",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "fenugreek",
      name: "Fenugreek Microgreens",
      subtitle: "Bitter & Medicinal",
      price: "₹79",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-400/20",
      description: "Traditional herb with strong health benefits, especially for digestion and blood sugar.",
      nutritionFacts: "Rich in iron and fiber",
      flavor: "Slightly bitter, herbal",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "8-10 days",
    },
    {
      id: "spinach",
      name: "Spinach Microgreens",
      subtitle: "Mild & Soft",
      price: "₹79",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-600/20",
      description: "Soft and mild greens perfect for everyday nutrition and salads.",
      nutritionFacts: "High in iron, calcium, and vitamin K",
      flavor: "Mild, leafy, slightly sweet",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "10-14 days",
    },
    {
      id: "green-mustard",
      name: "Green Mustard",
      subtitle: "Spicy & Sharp",
      price: "₹89",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-lime-500/20",
      description: "Strong-flavored greens that bring heat and depth to meals.",
      nutritionFacts: "Rich in antioxidants and vitamins A, C",
      flavor: "Hot, mustard-like spice",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "6-8 days",
    },
    {
      id: "basil",
      name: "Basil Microgreens",
      subtitle: "Aromatic & Sweet",
      price: "₹99",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-700/20",
      description: "Fragrant herb microgreens ideal for Italian dishes and garnishing.",
      nutritionFacts: "Contains essential oils and antioxidants",
      flavor: "Sweet, aromatic, slightly peppery",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "10-12 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Detox & Energy",
      price: "₹69",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-lime-500/20",
      description: "Power-packed superfood used for juices and detox routines.",
      nutritionFacts: "High in chlorophyll, iron, and enzymes",
      flavor: "Earthy and grassy",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "pak-choy",
      name: "Pak Choy",
      subtitle: "Crunchy & Mild",
      price: "₹150",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-300/20",
      description: "Asian green with crunchy stems and soft leaves, great for stir-fries.",
      nutritionFacts: "Rich in calcium and vitamin C",
      flavor: "Mild, slightly cabbage-like",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "8-12 days",
    },
    {
      id: "coriander",
      name: "Coriander Microgreens",
      subtitle: "Fresh & Citrusy",
      price: "₹59",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-500/20",
      description: "Fresh herb with a citrus note, perfect for garnishing Indian dishes.",
      nutritionFacts: "Rich in vitamin C and antioxidants",
      flavor: "Fresh, citrusy, slightly spicy",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "12-14 days",
    },
    {
      id: "edible-flowers",
      name: "Edible Flowers",
      subtitle: "Premium Garnish",
      price: "₹290",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-pink-500/20",
      description: "Colorful flowers used for gourmet plating and desserts.",
      nutritionFacts: "Contains antioxidants and natural pigments",
      flavor: "Mild, floral, slightly sweet",
      shelfLife: "2-4 days refrigerated",
      harvestTime: "15-20 days",
    },
    {
      id: "onion-chives",
      name: "Onion Chives",
      subtitle: "Sharp & Savory",
      price: "₹42.50",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-green-400/20",
      description: "Fine greens with onion-like flavor, perfect for toppings and soups.",
      nutritionFacts: "Rich in vitamin K and antioxidants",
      flavor: "Mild onion taste",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "8-10 days",
    },
    {
      id: "garlic",
      name: "Garlic Microgreens",
      subtitle: "Strong & Aromatic",
      price: "₹12.50",
      image: "/images/wheatgrass.png",
      filter: "",
      glowColor: "bg-gray-400/20",
      description: "Intense garlic-flavored greens used in small quantities for flavor.",
      nutritionFacts: "Contains allicin and immune-boosting compounds",
      flavor: "Strong garlic taste",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "7-10 days",
    },
  ],

  quote: {
    text: "Good food starts with fresh ingredients. Great food finishes with microgreens.",
    attribution: "The Orvyn Team",
    prefix: "From Our Farm",
  },
};

// -----------------------------------------------------------------------------
// Facility Carousel Config
// -----------------------------------------------------------------------------
export interface FacilitySlide {
  image: string;
  title: string;
  title2: string;
  area: string;
  unit: string;
  description: string;
}

export interface FacilityCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: FacilitySlide[];
}

export const facilityCarouselConfig: FacilityCarouselConfig = {
  scriptText: "Our Farm",
  subtitle: "URBAN AGRICULTURE",
  mainTitle: "State-of-the-Art Growing Facility",
  locationTag: "K.Narayanpura, Bangalore",
  slides: [
    {
      image: "/images/growing-room.jpg",
      title: "Carefully Managed",
      title2: "Growing Space",
      area: "Dedicated",
      unit: "Cultivation",
      description: "Our plants are nurtured in a carefully maintained growing space where we focus on healthy cultivation, proper lighting, and attentive care to ensure every plant grows strong and vibrant.",
    },
    {
      image: "/images/harvesting.jpg",
      title: "Hand-Harvested",
      title2: "Fresh on Order",
      area: "Fresh",
      unit: "Daily",
      description: "Every tray is carefully monitored and hand-harvested at peak nutrition. Our team ensures only the finest greens make it to your table.",
    },
    {
      image: "/images/packaging.jpg",
      title: "100%",
      title2: "Organic Growing",
      area: "Non-GMO",
      unit: "Seeds",
      description: "Our greens are grown using 100% organic practices with high-quality non-GMO seeds. We use clean, food-grade trays to ensure safe and healthy greens for your table.",
    },
  ],
};

// -----------------------------------------------------------------------------
// About Config
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface AboutTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface AboutTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: AboutTabContent;
}

export interface AboutQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface AboutConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: AboutTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: AboutQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const aboutConfig: AboutConfig = {
  scriptText: "Our Story",
  subtitle: "FROM SEED TO PLATE",
  mainTitle: "Passion for Fresh, Healthy Food",
  introText: "Orvyn Productions began with a simple mission: to make nutrient-dense, flavorful greens accessible to everyone. What started as a small home operation has grown into a thriving urban farm, serving restaurants, farmers markets, and health-conscious families throughout the region.",
  timeline: [
    { year: "2025", event: "Started in a small room with 20 trays" },
    //{ year: "2025", event: "First restaurant partnership signed" },
    { year: "2025", event: "Moved into a dedicated space to expand production capacity" },
    { year: "2025", event: "Launched home delivery service" },
    //{ year: "2024", event: "Certified organic, serving 5,000+ customers" },
  ],
  tabs: [
    {
      id: "mission",
      name: "Our Mission",
      icon: "Heart",
      image: "/images/mission.jpg",
      content: {
        title: "Growing Health, Sustainably",
        description: "We believe everyone deserves access to fresh, nutritious food grown with care for both people and planet. Our mission is to revolutionize urban agriculture while building a healthier community.",
        highlight: "Sustainable • Local • Nutritious",
      },
    },
    {
      id: "process",
      name: "Our Process",
      icon: "Sprout",
      image: "/images/process.jpg",
      content: {
        title: "Seed to Harvest in 7-14 Days",
        description: "Using organic seeds, premium soil, and precise growing conditions, we cultivate microgreens at their nutritional peak. Each batch is carefully monitored from germination to harvest.",
        highlight: "Organic • Monitored • Fresh",
      },
    },
    {
      id: "quality",
      name: "Quality",
      icon: "Award",
      image: "/images/quality.jpg",
      content: {
        title: "100% Organic",
        description: "Our greens are grown using organic practices with premium non-GMO seeds. We follow strict cleanliness and hygiene protocols throughout the growing and harvesting process to ensure fresh and safe produce.",
        highlight: "Organic • Hygienic • Non-GMO",
      },
    },
  ],
  openingHours: "Open Daily • 6:00 AM – 11:00 PM",
  openingHoursLabel: "Farm Store Hours",
  ctaButtonText: "Visit Our Farm",
  yearBadge: "2025",
  yearBadgeLabel: "Founded",
  quote: {
    prefix: "Our Promise",
    text: "Every tray we grow is a commitment to quality, sustainability, and the health of our community. We don't just grow microgreens—we grow trust.",
    attribution: "Orvyn Founders",
  },
  founderPhotoAlt: "Raj, Vijay and Nagesh, founders of Orvyn Productions",
  founderPhoto: "/images/founders.jpg",
};

// -----------------------------------------------------------------------------
// Benefits Config
// -----------------------------------------------------------------------------
export interface BenefitArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface BenefitsQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface BenefitsTimelineItem {
  value: string;
  label: string;
}

export interface BenefitsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: BenefitArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: BenefitsTimelineItem[];
  storyQuote: BenefitsQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const benefitsConfig: BenefitsConfig = {
  scriptText: "Health Benefits",
  subtitle: "NUTRITION POWERHOUSE",
  mainTitle: "Why Microgreens?",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/nutrition.jpg",
      title: "40x More Nutrients",
      excerpt: "Research shows microgreens contain up to 40 times more vitamins and antioxidants than mature vegetables.",
      date: "Oct 15, 2025",
      category: "Nutrition",
    },
    {
      id: 2,
      image: "/images/cooking.jpg",
      title: "Easy to Use",
      excerpt: "From smoothies to salads, garnishes to sandwiches—discover creative ways to incorporate microgreens into every meal.",
      date: "Dec 10, 2025",
      category: "Recipes",
    },
    {
      id: 3,
      image: "/images/sustainability.jpg",
      title: "Eco-Friendly Farming",
      excerpt: "Vertical farming uses 95% less water and zero pesticides, making microgreens one of the most sustainable foods.",
      date: "Jan 5, 2026",
      category: "Sustainability",
    },
    {
      id: 4,
      image: "/images/health.jpg",
      title: "Boost Your Immunity",
      excerpt: "Rich in vitamins C, E, and K, microgreens support immune function and overall wellness naturally.",
      date: "Feb 25, 2026",
      category: "Health",
    },
  ],
  testimonialsScriptText: "Testimonials",
  testimonialsSubtitle: "WHAT OUR CUSTOMERS SAY",
  testimonialsMainTitle: "Loved by Home Chefs & Restaurants",
  testimonials: [
    {
      name: "Mrs.Manjula",
      role: "Home Cook",
      text: "My family eats more vegetables now! The kids love the mild flavors, and I love knowing they're getting maximum nutrition.",
      rating: 5,
    },
    {
      name: "Mr.Ganesh",
      role: "Restaurant Owner",
      text: "Orvyn Productions has been our microgreen supplier. Consistent quality, reliable delivery, and our customers notice the difference.",
      rating: 5,
    },
    {
      name: "Mr.Hari Prasad",
      role: "Food Enthusiast",
      text: "I add microgreens to my salads and sandwiches almost every day now. They're fresh, tasty, and such an easy way to make meals healthier.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Impact",
  storySubtitle: "GROWING TOGETHER",
  storyTitle: "Making a Difference",
  storyParagraphs: [
    "Since 2025, we've grown more than just microgreens—we've grown a community of health-conscious individuals who care about where their food comes from.",
    "Our urban farm model proves that sustainable agriculture can thrive in any environment, bringing fresh produce closer to where people live and eat.",
  ],
  storyTimeline: [
    { value: "5K+", label: "Trays Harvested" },
    { value: "100%", label: "Organic" },
    { value: "95%", label: "Less Water" },
    { value: "0", label: "Pesticides" },
  ],
  storyQuote: {
    prefix: "Join Us",
    text: "Be part of our journey to grow fresh, nutrient-rich microgreens for our community.",
    attribution: "The Orvyn Team",
  },
  storyImage: "/images/community.jpg",
  storyImageCaption: "Our team at the weekly farmers market",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
  href?: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  //visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get In Touch",
  subtitle: "CONTACT US",
  mainTitle: "Let's Connect",
  introText: "Have questions about our microgreens? Want to place a wholesale order? We'd love to hear from you!",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Farm Location",
      value: "BDS Nagar, K.Narayanpura",
      subtext: "Bangalore, KA 560077",
      href: "https://www.google.com/maps/place/ORVYN+PRODUCTIONS/@13.0674791,77.6449708,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19c6ad2230a3:0x8fc386979c049ca9!8m2!3d13.0674791!4d77.6449708!16s%2Fg%2F11yprbw5j9?entry=ttu",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+91 70902 00659",
      subtext: "Open Daily, 6:00 AM – 11:00 PM",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "orvynproductions@gmail.com",
      subtext: "We reply within 2 hours",
    },
    {
      icon: "Clock",
      label: "Delivery",
      value: "Harvest to Home",
      subtext: "Delivered Fresh When Ready",
    },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "John",
    emailLabel: "Email Address",
    emailPlaceholder: "john@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "7090200659",
    //visitDateLabel: "Preferred Delivery Date",
    visitorsLabel: "Order Type",
    visitorsOptions: ["Home Delivery", "Restaurant Wholesale", "Farm Pickup", "Farmers Market", "Other"],
    messageLabel: "Your Message",
    messagePlaceholder: "Tell us about your order or questions...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll be in touch within 4 hours.",
    errorMessage: "Something went wrong. Please try again or call us directly.",
  },
  privacyNotice: "We respect your privacy. Your information will never be shared.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
  href?: string; // <-- optional, allows MapPin/Phone/Mail links
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: {
  name: string;
  href: string;
}[];
  backToTopText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Orvyn",
  tagline: "Productions",
  description: "Fresh, organic microgreens grown with care in Bangalore. Delivered to your door within 12 hours of harvest.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://www.instagram.com/orvynproductions/" },
    { icon: "Facebook", label: "Facebook", href: "https://www.facebook.com/people/ORVYN-Productions/61584461464315/" },
    { icon: "Twitter", label: "Twitter", href: "https://x.com/OrvynProd" },
    { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/orvyn-productions/" },
  ],
  linkGroups: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Our Greens", href: "/#products" },
        { name: "Shop", href: "/shop" },
        { name: "About Us", href: "/#about" },
        { name: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "For Business",
      links: [
        { name: "Wholesale", href: "/#contact" },
        { name: "Restaurant Partners", href: "/#contact" },
        { name: "Catering", href: "/#contact" },
      ],
    },
  ],
  contactItems: [
    {
      icon: "MapPin",
      text: "BDS Nagar, K.Narayanpura, Bangalore ↗",
      href: "https://www.google.com/maps/place/ORVYN+PRODUCTIONS/@13.0674791,77.6449708,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19c6ad2230a3:0x8fc386979c049ca9!8m2!3d13.0674791!4d77.6449708!16s%2Fg%2F11yprbw5j9?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: "Phone",
      text: "+91 70902 00659",
      href: "tel:+917090200659",
    },
    {
      icon: "Mail",
      text: "Orvynproductions@gmail.com",
      href: "mailto:Orvynproductions@gmail.com",
    },
  ],

  newsletterLabel: "Subscribe for updates and special offers",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Please try again.",
  newsletterEndpoint: "/api/newsletter",
  copyrightText: "© 2026 Orvyn Productions. All rights reserved.",
  legalLinks: [
  { name: "Privacy Policy", href: "/legal" },
  { name: "Terms of Service", href: "/legal" },
  { name: "Shipping Policy", href: "/legal" }
],
  backToTopText: "Back to top",
};

// -----------------------------------------------------------------------------
// Shop Config
// -----------------------------------------------------------------------------
export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  inStock: boolean;
  nutritionHighlights: string[];
}

export interface ShopConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  products: ShopProduct[];
  categories: string[];
  addToCartText: string;
  outOfStockText: string;
  viewDetailsText: string;
}

export const shopConfig: ShopConfig = {
  scriptText: "Shop Fresh",
  subtitle: "ORDER ONLINE",
  mainTitle: "Our Microgreens Collection",
  introText: "Browse our selection of fresh, organic microgreens. All orders are harvested within 12 hours of delivery.",
  categories: ["All", "Shoots", "Microgreens", "Wheatgrass", "Mixes"],
  addToCartText: "Add to Cart",
  outOfStockText: "Out of Stock",
  viewDetailsText: "View Details",
  products: [
  {
    id: "pea-shoots-50g",
    name: "Pea Shoots",
    description: "Sweet, crisp tendrils perfect for salads and garnishes",
    price: 69,
    unit: "50g",
    image: "/images/pea-shoots.png",
    category: "Shoots",
    inStock: true,
    nutritionHighlights: ["High Protein", "Vitamin C", "Folic Acid"],
  },
  {
    id: "sunflower-50g",
    name: "Sunflower Shoots",
    description: "Nutty, crunchy shoots with complete protein",
    price: 79,
    unit: "50g",
    image: "/images/sunflower-shoots.png",
    category: "Shoots",
    inStock: true,
    nutritionHighlights: ["Complete Protein", "Vitamin E", "Healthy Fats"],
  },
  {
    id: "radish-50g",
    name: "Radish Microgreens",
    description: "Peppery microgreens with bold flavor and vibrant color",
    price: 89,
    unit: "50g",
    image: "/images/radish-microgreens.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Vitamin C", "Antioxidants", "Digestive Enzymes"],
  },
  {
    id: "broccoli-50g",
    name: "Broccoli Microgreens",
    description: "Mild greens packed with powerful detox nutrients",
    price: 129,
    unit: "50g",
    image: "/images/broccoli-microgreens.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Sulforaphane", "Vitamin K", "Antioxidants"],
  },
  {
    id: "wheatgrass-50g",
    name: "Wheatgrass",
    description: "Earthy superfood ideal for juicing and detox",
    price: 69,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Wheatgrass",
    inStock: true,
    nutritionHighlights: ["Chlorophyll", "Iron", "Calcium"],
  },
  {
    id: "basil-50g",
    name: "Basil Microgreens",
    description: "Aromatic herb perfect for garnishing and Italian dishes",
    price: 99,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Essential Oils", "Antioxidants", "Vitamin K"],
  },
  {
    id: "green-mustard-50g",
    name: "Green Mustard",
    description: "Spicy microgreens with a sharp mustard kick",
    price: 89,
    unit: "50g",
    image: "/images/mustard-microgreens.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Vitamin A", "Vitamin C", "Fiber"],
  },
  {
    id: "coriander-50g",
    name: "Coriander Microgreens",
    description: "Fresh, citrusy greens ideal for Indian dishes",
    price: 59,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Vitamin C", "Antioxidants", "Detox Support"],
  },
  {
    id: "fenugreek-50g",
    name: "Fenugreek Microgreens",
    description: "Medicinal greens known for digestion and health benefits",
    price: 79,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Iron", "Fiber", "Blood Sugar Support"],
  },
  {
    id: "onion-chives-50g",
    name: "Onion Chives",
    description: "Mild onion-flavored greens for soups and garnishing",
    price: 42.5,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Vitamin K", "Antioxidants", "Minerals"],
  },

  // ✅ MIX
  {
    id: "microgreens-mix-50g",
    name: "Microgreens Mix",
    description: "Balanced mix of sweet, spicy, and nutty microgreens",
    price: 120,
    unit: "50g",
    image: "/images/micro-mix.png",
    category: "Mixes",
    inStock: true,
    nutritionHighlights: ["Complete Nutrition", "Variety", "Balanced Flavor"],
  },

  // ✅ 3 NEW BANGALORE-FRIENDLY CROPS
  {
    id: "amaranth-50g",
    name: "Amaranth Microgreens",
    description: "Beautiful red microgreens packed with nutrients",
    price: 109,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Iron", "Calcium", "Antioxidants"],
  },
  {
    id: "kale-50g",
    name: "Kale Microgreens",
    description: "Mild, nutrient-rich greens great for daily consumption",
    price: 99,
    unit: "50g",
    image: "/images/kale-microgreens.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Vitamin K", "Vitamin A", "Fiber"],
  },
  {
    id: "beetroot-50g",
    name: "Beetroot Microgreens",
    description: "Slightly sweet greens with deep red stems",
    price: 109,
    unit: "50g",
    image: "/images/wheatgrass.png",
    category: "Microgreens",
    inStock: true,
    nutritionHighlights: ["Iron", "Folate", "Antioxidants"],
  },
  ],
};

// -----------------------------------------------------------------------------
// Cart Config
// -----------------------------------------------------------------------------
export interface CartConfig {
  title: string;
  emptyMessage: string;
  continueShoppingText: string;
  subtotalText: string;
  shippingText: string;
  totalText: string;
  checkoutText: string;
  removeText: string;
  quantityText: string;
  freeShippingThreshold: number;
  freeShippingText: string;
  shippingCost: number;
}

export const cartConfig: CartConfig = {
  title: "Your Cart",
  emptyMessage: "Your cart is empty. Add some fresh microgreens!",
  continueShoppingText: "Continue Shopping",
  subtotalText: "Subtotal",
  shippingText: "Shipping",
  totalText: "Total",
  checkoutText: "Proceed to Checkout",
  removeText: "Remove",
  quantityText: "Quantity",
  freeShippingThreshold: 0,
  freeShippingText: "Free shipping",
  shippingCost: 0,
};

// -----------------------------------------------------------------------------
// Checkout Config
// -----------------------------------------------------------------------------
export interface CheckoutConfig {
  title: string;
  subtitle: string;
  customerInfoTitle: string;
  shippingInfoTitle: string;
  paymentInfoTitle: string;
  orderSummaryTitle: string;
  placeOrderText: string;
  processingText: string;
  successMessage: string;
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    //deliveryDate: string;
    specialInstructions: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    specialInstructions: string;
  };
}

export const checkoutConfig: CheckoutConfig = {
  title: "Checkout",
  subtitle: "You're one step away from farm-fresh microgreens!",
  customerInfoTitle: "Customer Information",
  shippingInfoTitle: "Delivery Address",
  paymentInfoTitle: "Payment Method",
  orderSummaryTitle: "Order Summary",
  placeOrderText: "Place Order",
  processingText: "Processing...",
  successMessage: "Thank you! Your order has been placed. We'll contact you within 24 hours to confirm delivery.",
  fields: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Street Address",
    city: "City",
    state: "State",
    zip: "ZIP Code",
    //deliveryDate: "Preferred Delivery Date",
    specialInstructions: "Special Delivery Instructions",
  },
  placeholders: {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "7090200659",
    address: "123 Main Street",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560011",
    specialInstructions: "Land mark, delivery preferences, etc.",
  },
};

// -----------------------------------------------------------------------------
// Admin Config
// -----------------------------------------------------------------------------
export interface AdminConfig {
  loginTitle: string;
  loginSubtitle: string;
  usernameLabel: string;
  passwordLabel: string;
  loginButtonText: string;
  loginErrorText: string;
  dashboardTitle: string;
  ordersTab: string;
  productsTab: string;
  customersTab: string;
  settingsTab: string;
  logoutText: string;
  orderStatuses: {
    pending: string;
    confirmed: string;
    preparing: string;
    ready: string;
    delivered: string;
    cancelled: string;
  };
}

export const adminConfig: AdminConfig = {
  loginTitle: "Admin Login",
  loginSubtitle: "Orvyn Productions Management Portal",
  usernameLabel: "Username",
  passwordLabel: "Password",
  loginButtonText: "Sign In",
  loginErrorText: "Invalid username or password",
  dashboardTitle: "Order Management",
  ordersTab: "Orders",
  productsTab: "Products",
  customersTab: "Customers",
  settingsTab: "Settings",
  logoutText: "Logout",
  orderStatuses: {
    pending: "Pending",
    confirmed: "Confirmed",
    preparing: "Preparing",
    ready: "Ready for Delivery",
    delivered: "Delivered",
    cancelled: "Cancelled",
  },
};
