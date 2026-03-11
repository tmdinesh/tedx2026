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
  theme: 'GenZ to Gen Alpha Leadership: Ideas Today, Leaders Tomorrow',
  themeDescription:
    'The theme highlights youth-driven change, digital-era leadership, adaptability, and the evolving definition of influence and impact.',
  date: 'March 27, 2026',
  time: '9:00 am - 5:00 pm',
  venue: 'D-Block Conference Hall (GF), PSG College of Technology, Coimbatore',
  registrationFee: 'Rs. 650* (*inclusive of GST)',
  lastDateForRegistration: '23 Mar 2026',

  // ── Speakers ───────────────────────────────────────────────────
  // Replace this array each year. Images can be URLs or local imports.
  speakers: [
    {
      name: 'Sakethraman',
      title: 'Vocalist, Tunesmith, Composer, Philanthropist, Music Educator',
      topic: '',
      image: null,
      bio: '',
    },
    {
      name: 'Sentil Raja Sennimalai',
      title: 'Founder and CEO, Namma Office',
      topic: '',
      image: null,
      bio: '',
    },
    {
      name: 'Anuja Chandramouli',
      title: 'Author, Winner of Times of India Popular Choice Author award 2021',
      topic: '',
      image: null,
      bio: '',
    },
    {
      name: 'Shah Mohammed',
      title: 'Founder, D-Cube Designs, Author',
      topic: '',
      image: null,
      bio: '',
    },
    {
      name: 'Dharshini Sampathkumar',
      title: 'Content Creator, Entrepreneur, Writer',
      topic: '',
      image: null,
      bio: '',
    },
  ],

  // ── Schedule ───────────────────────────────────────────────────
  schedule: [
    { time: '09:00 AM', title: 'Registration & Refreshments', type: 'break' },
    { time: '09:30 AM', title: 'Opening Ceremony', type: 'ceremony' },
    { time: '10:00 AM', title: 'Sakethraman', subtitle: '', type: 'talk' },
    { time: '10:45 AM', title: 'Sentil Raja Sennimalai', subtitle: '', type: 'talk' },
    { time: '11:30 AM', title: 'Networking Break', type: 'break' },
    { time: '12:00 PM', title: 'Anuja Chandramouli', subtitle: '', type: 'talk' },
    { time: '01:00 PM', title: 'Lunch Break', type: 'break' },
    { time: '02:00 PM', title: 'Shah Mohammed', subtitle: '', type: 'talk' },
    { time: '02:45 PM', title: 'Dharshini Sampathkumar', subtitle: '', type: 'talk' },
    { time: '03:30 PM', title: 'Refreshments & Networking', type: 'break' },
    { time: '04:00 PM', title: 'Closing Ceremony & Certificate Distribution', type: 'ceremony' },
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

  // ── Contacts ───────────────────────────────────────────────
  contacts: [
    { name: 'Aadish Narayan', phone: '+91 90420 13747' },
    { name: 'Kirthi Maheswaran', phone: '+91 75980 46590' }
  ],

  // ── Social Links ───────────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/tedxpsgtech/',
    linkedin: 'https://www.linkedin.com/showcase/tedxpsgtech/posts/?feedView=all',
    phone: '+91 90420 13747',
    contactPerson: 'Aadish Narayan',
    website: 'https://psgtech.edu',
    emails: ['kpr.hum@psgtech.ac.in', 'db.hum@psgtech.ac.in'],
  },
};

export default tedxConfig;
