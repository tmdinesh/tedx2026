/**
 * TEDx PSG Tech — Configuration File
 * ====================================
 * Edit this single file each year to update speakers, schedule, theme, and branding.
 * No other files need to change for yearly updates.
 */

const tedxConfig = {
  // ── Event Details ──────────────────────────────────────────────
  year: 2026,
  eventName: 'TEDxPSGTech',
  tagline: 'Ideas Worth Spreading',
  theme: 'Beyond the Horizon',
  themeDescription:
    'Exploring the frontiers where imagination meets innovation — from AI-driven futures to reimagining human connection in a post-digital world.',
  date: 'September 20, 2026',
  venue: 'L-Hall, PSG College of Technology, Coimbatore',

  // ── Speakers ───────────────────────────────────────────────────
  // Replace this array each year. Images can be URLs or local imports.
  speakers: [
    {
      name: 'Dr. Ananya Sharma',
      title: 'Neuroscientist & AI Researcher',
      topic: 'When Machines Dream: The Neuroscience of Artificial Creativity',
      image: null, // placeholder — will show initials
      bio: 'Pioneering research at the intersection of brain-computer interfaces and generative AI at IIT Madras.',
    },
    {
      name: 'Vikram Rajan',
      title: 'Climate Tech Entrepreneur',
      topic: 'Carbon Negative by Design: Building the Future We Want',
      image: null,
      bio: 'Founder of GreenForge Labs, building carbon-capture technology deployed across 12 countries.',
    },
    {
      name: 'Priya Natarajan',
      title: 'Space Systems Engineer, ISRO',
      topic: 'Small Satellites, Big Impact: Democratizing Access to Space',
      image: null,
      bio: 'Lead systems engineer behind India\'s constellation of micro-satellites for rural connectivity.',
    },
    {
      name: 'Arjun Mehta',
      title: 'Filmmaker & Visual Storyteller',
      topic: 'The Empathy Engine: How Stories Rewire Societies',
      image: null,
      bio: 'Award-winning documentarian whose films on migration have been screened at Sundance and Cannes.',
    },
    {
      name: 'Kavitha Krishnamurthy',
      title: 'Quantum Computing Researcher',
      topic: 'Quantum Leaps: Computing at the Edge of Possibility',
      image: null,
      bio: 'Leading a 50-qubit quantum computing lab focused on drug discovery and cryptography.',
    },
    {
      name: 'Rohan Das',
      title: 'Urban Design Futurist',
      topic: 'Cities That Breathe: Designing for the Next Billion',
      image: null,
      bio: 'Architect and urbanist reshaping Indian cities with biophilic and human-centered design principles.',
    },
  ],

  // ── Schedule ───────────────────────────────────────────────────
  schedule: [
    { time: '09:00 AM', title: 'Doors Open & Registration', type: 'break' },
    { time: '09:30 AM', title: 'Opening Ceremony & Welcome Address', type: 'ceremony' },
    { time: '10:00 AM', title: 'Dr. Ananya Sharma', subtitle: 'When Machines Dream', type: 'talk' },
    { time: '10:30 AM', title: 'Vikram Rajan', subtitle: 'Carbon Negative by Design', type: 'talk' },
    { time: '11:00 AM', title: 'Networking Break & Refreshments', type: 'break' },
    { time: '11:30 AM', title: 'Priya Natarajan', subtitle: 'Small Satellites, Big Impact', type: 'talk' },
    { time: '12:00 PM', title: 'Arjun Mehta', subtitle: 'The Empathy Engine', type: 'talk' },
    { time: '12:30 PM', title: 'Lunch & Interactive Experience Zone', type: 'break' },
    { time: '02:00 PM', title: 'Kavitha Krishnamurthy', subtitle: 'Quantum Leaps', type: 'talk' },
    { time: '02:30 PM', title: 'Rohan Das', subtitle: 'Cities That Breathe', type: 'talk' },
    { time: '03:00 PM', title: 'Panel Discussion & Audience Q&A', type: 'ceremony' },
    { time: '03:45 PM', title: 'Closing Ceremony & Vote of Thanks', type: 'ceremony' },
  ],

  // ── Branding ───────────────────────────────────────────────────
  colors: {
    tedRed: '#e62b1e',
    tedRedDark: '#c41912',
    tedRedGlow: 'rgba(230, 43, 30, 0.4)',
    bgDark: '#0a0a0a',
    bgCard: 'rgba(255, 255, 255, 0.04)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
  },

  // ── Social Links ───────────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/tedxpsgtech/',
    linkedin: 'https://www.linkedin.com/showcase/tedxpsgtech/posts/?feedView=all',
    phone: '+91 00000 00000',
    contactPerson: 'Jane Doe',
    website: 'https://psgtech.edu',
  },
};

export default tedxConfig;
