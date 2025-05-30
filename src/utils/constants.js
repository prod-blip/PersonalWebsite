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
  "Documentary Filmmaking", 
  "Technical Production", 
  "Content Strategy", 
  "Video Editing", 
  "Creative Direction", 
  "Project Management",
  "Multimedia Content", 
  "Brand Storytelling", 
  "Team Leadership"
];

// Timeline data
export const TIMELINE_DATA = [
  { 
    year: "2025", 
    event: "Co-founded Unit3 Inc.", 
    description: "Finally started his own documentary film production company. Pitching some really impactful pieces",
    type: "milestone"
  },
  { 
    year: "2024", 
    event: "Continued Growth", 
    description: "Expanding creative projects and building stronger industry connections",
    type: "growth"
  },
  { 
    year: "2020-2023", 
    event: "Technical Producer - Editor, MoneyTalk", 
    description: "Started a four-year term with the Strategic & Editorial Content department at TD Bank. Managed technical production and editing of finance content for internal channels and post-produced a weekly news show airing on BNN Bloomberg",
    type: "career"
  },
  { 
    year: "2018", 
    event: "Relocated from Mumbai to Toronto", 
    description: "Received a scholarship to study the history of documentary film at Seneca College's Documentary Filmmaking Institute",
    type: "education"
  },
  { 
    year: "2016-2017", 
    event: "Producer - Standing By, Red Bull", 
    description: "Produced a docuseries chronicling the history of the Independent music scene in India. A multi-year project with over 300 interviews, archives, animation, to tell a story that's never been told before or since. One of my proudest pieces to date",
    type: "career"
  },
  { 
    year: "2015-2016", 
    event: "Segment Director - On Air with AIB", 
    description: "Directed creative segments and managed shoot floor operations for a first-of-its-kind news comedy show made for broadcast television with a live studio audience",
    type: "career"
  },
  { 
    year: "2013-2014", 
    event: "Producer-Director, Red Bull Tour Bus", 
    description: "Created branded documentaries, music videos, and supporting content around the Red Bull Tour Bus' 17000 km journey through India",
    type: "career"
  },
  { 
    year: "2010-2013", 
    event: "Copywriter, MullenLowe Lintas India", 
    description: "First job as a creative. Set himself up with fundamentals he follows to this day. Created radio spots, print ads, TV commercials and spearheaded social media projects for brands looking to expand their reach to internet-based audiences",
    type: "career"
  },
  { 
    year: "Late 80s", 
    event: "Born on March 12th, Mumbai", 
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
  email: 'mailto:aniket@example.com',
  linkedin: 'https://linkedin.com/in/aniketrao',
  twitter: 'https://twitter.com/aniketrao',
  github: 'https://github.com/aniketrao'
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