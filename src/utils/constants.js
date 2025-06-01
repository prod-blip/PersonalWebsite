// Project data
export const PROJECTS_DATA = [
  { 
    title: "Standing By - Red Bull", 
    description: "Produced a docuseries chronicling the history of the Independent music scene in India. A multi-year project with over 300 interviews, archives, animation, to tell a story that's never been told before or since. One of my proudest pieces to date.", 
    year: "2016-2017",
    tags: ["Documentary", "Music", "Culture"],
    link: "#"
  },
  { 
    title: "On Air with AIB", 
    description: "Directed creative segments and managed shoot floor operations for a first-of-its-kind news comedy show made for broadcast television with a live studio audience", 
    year: "2015-2016",
    tags: ["Television", "Comedy", "Live Production"],
    link: "#"
  },
  { 
    title: "MoneyTalk - TD Bank", 
    description: "Started a four-year term with the Strategic & Editorial Content department at TD Bank. Managed technical production and editing of finance content for internal channels and post-produced a weekly news show airing on BNN Bloomberg", 
    year: "2020-2024",
    tags: ["Finance", "Corporate", "News"],
    link: "#"
  },
  { 
    title: "Red Bull Tour Bus", 
    description: "Created branded documentaries, music videos, and supporting content around the Red Bull Tour Bus' 17000 km journey through India", 
    year: "2013-2014",
    tags: ["Travel", "Music", "Branded Content"],
    link: "#"
  }
];

// Skills data
export const SKILLS_DATA = [
  "Product Management",
  "Consumer Insights", 
  "Data Analytics",
  "Cross-functional Leadership",
  "Regional Strategy",
  "Digital Transformation",
  "AI Integration",
  "Growth Strategy",
  "Market Research",
  "Stakeholder Management",
  "Product Localization",
  "Campaign Optimization"
];

// Timeline data
export const TIMELINE_DATA = [
  { 
    year: "2025-", 
    event: "Learning continues with a focus on AI", 
    description: "Continuing to learn and adapt to the evolving landscape of AI and its applications in product management. This includes exploring new tools, methodologies, and strategies to enhance product development and user experience.",
    type: "milestone"
  },
  { 
    year: "2022-2024", 
    event: "Product Manager - ICICI Bank", 
    description: "Started a new role as a Product Manager at ICICI Bank, focusing on digital lending solutions. This role involves leading product development, managing cross-functional teams, and driving growth through innovative financial products.",
    type: "career"
  },
  { 
    year: "2018-2021", 
    event: "Growth Manager - Tata", 
    description: "Worked in Growth and Strategy at Tata Metaliks. Oversaw different markets in Delhi, Punjab, Chandigarh & Srinagar in this duration focussing on product adoption and digital onborading ",
    type: "career"
  },
  { 
    year: "2016-2018", 
    event: "Masters in Business Administration - IIFT", 
    description: "Pursued an MBA at the Indian Institute of Foreign Trade, specializing in International Business. Focused on understanding global markets and business strategies",
    type: "post-graduation"
  },
  { 
    year: "2015-2016", 
    event: "Software Engineer - Accenture Services", 
    description: "Moved to Bangalore to work as a Software Engineer at Accenture Services. Learned the ways of the corporate world and how to work with clients. Inspired to get an MBA to understand business better",
    type: "career"
  },
  { 
    year: "2010-2014", 
    event: "Graduate", 
    description: "Graduated with a Bachelor's of Engineering degree in Electronics and Instrumentation",
    type: "graduation"
  },
  { 
    year: "2009", 
    event: "Senior Secondary School", 
    description: "Passed with a 90+% aggregate from City Montessori School, Lucknow",
    type: "school"
  },
  { 
    year: "Early 90s", 
    event: "Born on September 21st, Lucknow, India", 
    description: "One of my parents greatest decisions!",
    type: "birth"
  }
];

// Companies worked with
export const COMPANIES_WORKED_WITH = [
  'Red Bull', 
  'TD Bank', 
  'AIB', 
  'Unit3 Inc.', 
  'BNN Bloomberg', 
  'Seneca College'
];

// Social media links (update these with actual links)
export const SOCIAL_LINKS = {
  email: 'mailto:atulpandey.iift1618@gmail.com',
  linkedin: 'https://www.linkedin.com/in/atulpandey-iift',
  twitter: 'https://twitter.com/productnstuff',
  github: 'https://github.com/prod-blip'
};

// Animation variants for reuse
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  scaleOnHover: {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  }
};