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
  products: [
    {
      id: "pea-shoots",
      name: "Pea Shoots",
      subtitle: "Sweet & Crisp",
      price: "₹8.00",
      image: "/images/pea-shoots.png",
      filter: "",
      glowColor: "bg-green-500/20",
      description: "Delicate tendrils with a sweet, fresh pea flavor. Perfect for salads, garnishes, and smoothies. Rich in vitamins A, C, and folic acid.",
      nutritionFacts: "High in protein, fiber, and antioxidants",
      flavor: "Sweet, mild pea taste with crunchy texture",
      shelfLife: "3-5 days refrigerated",
      harvestTime: "10-14 days",
    },
    {
      id: "sunflower-shoots",
      name: "Sunflower Shoots",
      subtitle: "Nutty & Crunchy",
      price: "₹9.00",
      image: "/images/sunflower-shoots.png",
      filter: "brightness(1.1) sepia(0.1)",
      glowColor: "bg-yellow-500/20",
      description: "Substantial, crunchy shoots with a delightful nutty flavor. Excellent source of protein and essential amino acids.",
      nutritionFacts: "Complete protein, vitamins D and E",
      flavor: "Nutty, slightly sweet with satisfying crunch",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "radish-microgreens",
      name: "Radish Microgreens",
      subtitle: "Peppery & Bold",
      price: "₹7.50",
      image: "/images/radish-microgreens.png",
      filter: "brightness(1.15) sepia(0.05) hue-rotate(-10deg)",
      glowColor: "bg-red-500/20",
      description: "Vibrant purple stems with spicy, peppery leaves. Adds a kick to any dish while providing digestive enzymes and vitamin C.",
      nutritionFacts: "Rich in vitamin C, B6, and antioxidants",
      flavor: "Peppery, spicy with beautiful color",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "5-7 days",
    },
    {
      id: "broccoli-microgreens",
      name: "Broccoli Microgreens",
      subtitle: "Mild & Nutritious",
      price: "₹8.50",
      image: "/images/broccoli-microgreens.png",
      filter: "brightness(1.05) sepia(0.02)",
      glowColor: "bg-emerald-500/20",
      description: "Mild, cabbage-like flavor packed with sulforaphane, a powerful compound known for its health benefits. Perfect for smoothies and salads.",
      nutritionFacts: "40x more nutrients than mature broccoli",
      flavor: "Mild, slightly peppery cabbage taste",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "wheatgrass",
      name: "Wheatgrass",
      subtitle: "Earthy & Energizing",
      price: "₹6.00",
      image: "/images/wheatgrass.png",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg)",
      glowColor: "bg-lime-500/20",
      description: "The ultimate superfood shot. Packed with chlorophyll, enzymes, and minerals. Best juiced for maximum benefits.",
      nutritionFacts: "High in chlorophyll, iron, and calcium",
      flavor: "Earthy, grassy with sweet undertones",
      shelfLife: "7-10 days refrigerated",
      harvestTime: "7-10 days",
    },
    {
      id: "micro-mix",
      name: "Signature Mix",
      subtitle: "Chef's Selection",
      price: "₹12.00",
      image: "/images/micro-mix.png",
      filter: "brightness(1.1)",
      glowColor: "bg-amber-500/20",
      description: "Our chef-curated blend of premium microgreens. A perfect balance of flavors, colors, and textures for gourmet presentations.",
      nutritionFacts: "Complete spectrum of vitamins and minerals",
      flavor: "Complex blend of sweet, spicy, and nutty",
      shelfLife: "5-7 days refrigerated",
      harvestTime: "7-14 days",
    },
  ],
  features: [
    {
      icon: "Leaf",
      title: "100% Organic",
      description: "Pesticide-free and naturally grown using organic methods in clean, hygienic growing conditions.",
    },
    {
      icon: "Clock",
      title: "Harvested Fresh",
      description: "Harvested fresh after your order and delivered soon after to ensure the best taste and nutrition.",
    },
    {
      icon: "Heart",
      title: "Nutrient Dense",
      description: "Up to 40 times more nutrients than mature vegetables, packed with living enzymes.",
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
      text: "Orvyn Productions has been our microgreen supplier for 2 years. Consistent quality, reliable delivery, and our customers notice the difference.",
      rating: 5,
    },
    {
      name: "Mr.Hari",
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
      subtext: "We reply within 12 hours",
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
  description: "Fresh, organic microgreens grown with care in Portland, Oregon. Delivered to your door within 24 hours of harvest.",
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
      text: "BDS Nagar, K.Narayanpura, Bangalore",
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
  introText: "Browse our selection of fresh, organic microgreens. All orders are harvested within 24 hours of delivery.",
  categories: ["All", "Shoots", "Microgreens", "Wheatgrass", "Mixes"],
  addToCartText: "Add to Cart",
  outOfStockText: "Out of Stock",
  viewDetailsText: "View Details",
  products: [
    {
      id: "pea-shoots-4oz",
      name: "Pea Shoots",
      description: "Sweet, crisp tendrils perfect for salads and garnishes",
      price: 8.00,
      unit: "4 oz",
      image: "/images/pea-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["High Protein", "Vitamin C", "Folic Acid"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "radish-microgreens-3oz",
      name: "Radish Microgreens",
      description: "Peppery, vibrant purple stems with bold flavor",
      price: 7.50,
      unit: "50g",
      image: "/images/radish-microgreens.png",
      category: "Microgreens",
      inStock: true,
      nutritionHighlights: ["Vitamin C", "B6", "Antioxidants"],
    },
    {
      id: "broccoli-microgreens-3oz",
      name: "Broccoli Microgreens",
      description: "Mild flavor, 40x more nutrients than mature broccoli",
      price: 8,
      unit: "3 oz",
      image: "/images/broccoli-microgreens.png",
      category: "Microgreens",
      inStock: true,
      nutritionHighlights: ["Sulforaphane", "Vitamin K", "Fiber"],
    },
    {
      id: "wheatgrass-4oz",
      name: "Wheatgrass",
      description: "Earthy superfood, perfect for juicing",
      price: 6,
      unit: "4 oz",
      image: "/images/wheatgrass.png",
      category: "Wheatgrass",
      inStock: true,
      nutritionHighlights: ["Chlorophyll", "Iron", "Calcium"],
    },
    {
      id: "signature-mix-4oz",
      name: "Signature Mix",
      description: "Chef-curated blend of premium varieties",
      price: 12,
      unit: "4 oz",
      image: "/images/micro-mix.png",
      category: "Mixes",
      inStock: true,
      nutritionHighlights: ["Complete Nutrition", "Variety", "Gourmet"],
    },
    {
      id: "kale-microgreens-3oz",
      name: "Kale Microgreens",
      description: "Nutrient-dense with mild, sweet flavor",
      price: 8.00,
      unit: "3 oz",
      image: "/images/kale-microgreens.png",
      category: "Microgreens",
      inStock: true,
      nutritionHighlights: ["Vitamin K", "Vitamin A", "Antioxidants"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "sunflower-shoots-4oz",
      name: "Sunflower Shoots",
      description: "Nutty, crunchy shoots with complete protein",
      price: 9.00,
      unit: "4 oz",
      image: "/images/sunflower-shoots.png",
      category: "Shoots",
      inStock: true,
      nutritionHighlights: ["Complete Protein", "Vitamin E", "Amino Acids"],
    },
    {
      id: "mustard-microgreens-3oz",
      name: "Mustard Microgreens",
      description: "Spicy, horseradish-like kick",
      price: 7.00,
      unit: "3 oz",
      image: "/images/mustard-microgreens.png",
      category: "Microgreens",
      inStock: true,
      nutritionHighlights: ["Vitamin A", "Vitamin C", "Fiber"],
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
