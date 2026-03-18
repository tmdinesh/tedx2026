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
      name: 'Ms. Anuja Chandramouli',
      title: 'Author, Winner of Times of India Popular Choice Author award 2021',
      topic: '',
      image: '/speakers/anuja.png',
      bio: '',
    },
        {
      name: 'Mr. Shah Mohammed',
      title: 'Founder, D-Cube Designs, Author',
      topic: '',
      image: '/speakers/shah.png',
      bio: '',
    },
    {
      name: 'Ms. Dharshini Sampathkumar',
      title: 'Content Creator, Entrepreneur, Writer',
      topic: '',
      image: '/speakers/dharshini.png',
      bio: '',
    },
    {
      name: 'Mr. Sentil Raja Sennimalai',
      title: 'Founder and CEO, Namma Office',
      topic: '',
      image: '/speakers/sentil.png',
      bio: '',
    },
    {
      name: 'Mr. Vidwan Saketharaman',
      title: 'Vocalist, Tunesmith, Composer, Philanthropist, Music Educator',
      topic: '',
      image: '/speakers/saketharaman.png',
      bio: '',
    },
  ],

  // ── Schedule ───────────────────────────────────────────────────
  schedule: [
    { time: '09:30 AM', title: 'Prayer', type: 'ceremony' },
    { time: '09:32 AM', title: 'Welcome', type: 'ceremony' },
    { time: '09:35 AM', title: 'Briefing of Theme', type: 'ceremony' },
    { time: '09:40 AM', title: 'Presidential Address', type: 'ceremony' },
    { time: '09:45 AM', title: 'Felicitation', type: 'ceremony' },
    { time: '09:50 AM', title: 'Felicitation of GLF', type: 'ceremony' },
  
    { time: '10:00 AM', title: 'Ms. Anuja Chandramouli', subtitle: '', type: 'talk' },
    { time: '10:30 AM', title: 'Break', type: 'break' },
  
    { time: '11:00 AM', title: 'Mr. Shah Mohammed', subtitle: '', type: 'talk' },
    { time: '11:30 AM', title: 'Mr. Senthil Raja Sennimalai', subtitle: '', type: 'talk' },
  
    { time: '12:15 PM', title: 'Lunch Break', type: 'break' },
  
    { time: '01:45 PM', title: 'Ms. Dharshini Sampathkumar', subtitle: '', type: 'talk' },
    { time: '02:15 PM', title: 'Mr. Sakethraman', subtitle: '', type: 'talk' },
  
    { time: '02:45 PM', title: 'TEK Music', type: 'break' },
  
    { time: '03:15 PM', title: 'Closing Ceremony', type: 'ceremony' },
    { time: '03:30 PM', title: 'National Anthem', type: 'ceremony' },
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
