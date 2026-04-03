const images = {
  hero: '/images/hero.jpg',
  indoor: '/images/highlight-indoor.jpg',
  garden: '/images/highlight-garden.jpg',
  banquet: '/images/highlight-banquet.jpg',
  gallery01: '/images/gallery-01.jpg',
  gallery02: '/images/gallery-02.jpg',
  gallery03: '/images/gallery-03.jpg',
  gallery04: '/images/gallery-04.jpg',
  gallery05: '/images/gallery-05.jpg',
  gallery06: '/images/gallery-06.jpg',
  eventUpcoming: '/images/event-upcoming.jpg',
  eventPrivate: '/images/event-private.jpg',
  eventCorporate: '/images/event-corporate.jpg',
  spaceBoho: '/images/space-boho.jpg',
  spaceDelicia: '/images/space-delicia.jpg',
  spaceMaison: '/images/space-maison.jpg',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Our Menus', path: '/our-menus' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Venue', path: '/venue' },
  { label: 'Events', path: '/events' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const megaMenuConfig = {
  Gallery: {
    title: 'Gallery Curation',
    subtitle: 'Editorial visual stories captured across ceremony and reception moments.',
    preview: {
      image: images.gallery06,
      caption: 'Explore signature gallery stories',
      path: '/gallery/ceremony-aisles',
    },
    links: [
      {
        label: 'Ceremony Aisles',
        path: '/gallery/ceremony-aisles',
        description: 'Elegant aisle framing and floral focal points for vows.',
        image: images.gallery01,
      },
      {
        label: 'Editorial Portraits',
        path: '/gallery/editorial-portraits',
        description: 'Cinematic couple portraits with soft luxury composition.',
        image: images.gallery06,
      },
      {
        label: 'Reception Details',
        path: '/gallery/reception-details',
        description: 'Tablescapes, styling accents, and ambient details.',
        image: images.gallery04,
      },
      {
        label: 'Floral Installations',
        path: '/gallery/floral-installations',
        description: 'Architectural floral compositions and centerpiece drama.',
        image: images.gallery02,
      },
      {
        label: 'Night Moments',
        path: '/gallery/night-moments',
        description: 'Evening mood, lights, and timeless after-dusk captures.',
        image: images.gallery05,
      },
    ],
  },
  'Our Menus': {
    title: 'Menu Experiences',
    subtitle: 'Curated culinary chapters designed for sophisticated celebrations.',
    preview: {
      image: images.eventPrivate,
      caption: 'View signature tasting journey',
      path: '/our-menus/signature-tasting',
    },
    links: [
      {
        label: 'Signature Tasting',
        path: '/our-menus/signature-tasting',
        description: 'Private tasting format with chef-led menu refinement.',
        image: images.eventPrivate,
      },
      {
        label: 'Seasonal Plated Menu',
        path: '/our-menus/seasonal-plated-menu',
        description: 'Season-forward plated dining crafted for graceful pacing.',
        image: images.eventCorporate,
      },
      {
        label: 'Garden Brunch Menu',
        path: '/our-menus/garden-brunch-menu',
        description: 'Light daytime menu for elegant outdoor gatherings.',
        image: images.garden,
      },
      {
        label: 'Dessert Atelier',
        path: '/our-menus/dessert-atelier',
        description: 'Artisanal desserts and finale moments with visual impact.',
        image: images.gallery05,
      },
      {
        label: 'Beverage Pairings',
        path: '/our-menus/beverage-pairings',
        description: 'Curated pairings that elevate every course transition.',
        image: images.gallery04,
      },
    ],
  },
  Blogs: {
    title: 'Journal Library',
    subtitle: 'Planning intelligence, design notes, and curated hosting advice.',
    preview: {
      image: images.gallery05,
      caption: 'Read latest planning notes',
      path: '/blogs/planning-guides',
    },
    links: [
      {
        label: 'Planning Guides',
        path: '/blogs/planning-guides',
        description: 'Frameworks for timelines, flow, and ceremony sequencing.',
        image: images.eventUpcoming,
      },
      {
        label: 'Design Trends',
        path: '/blogs/design-trends',
        description: 'Emerging visual and styling directions in luxury weddings.',
        image: images.gallery02,
      },
      {
        label: 'Real Celebrations',
        path: '/blogs/real-celebrations',
        description: 'Case-style highlights from hosted celebrations.',
        image: images.spaceBoho,
      },
      {
        label: 'Venue Notes',
        path: '/blogs/venue-notes',
        description: 'Space planning insights for guest comfort and aesthetics.',
        image: images.spaceMaison,
      },
      {
        label: 'Hosting Tips',
        path: '/blogs/hosting-tips',
        description: 'Practical luxury hosting details for seamless execution.',
        image: images.eventCorporate,
      },
    ],
  },
  Venue: {
    title: 'Venue Spaces',
    subtitle: 'Explore architectural zones crafted for ceremony-to-reception flow.',
    preview: {
      image: images.spaceMaison,
      caption: 'Walk through key venue spaces',
      path: '/venue/indoor-hall',
    },
    links: [
      {
        label: 'Indoor Hall',
        path: '/venue/indoor-hall',
        description: 'Grand indoor architecture for timeless ceremonial moments.',
        image: images.indoor,
      },
      {
        label: 'Garden Ceremony Lawn',
        path: '/venue/garden-ceremony-lawn',
        description: 'Open-air vows framed by curated landscape composition.',
        image: images.garden,
      },
      {
        label: 'Banquet Salon',
        path: '/venue/banquet-salon',
        description: 'Reception salon designed for dining and evening mood.',
        image: images.banquet,
      },
      {
        label: 'Private Lounge',
        path: '/venue/private-lounge',
        description: 'Intimate lounge zone for premium host and guest comfort.',
        image: images.gallery03,
      },
      {
        label: 'Suite Preparation Rooms',
        path: '/venue/suite-preparation-rooms',
        description: 'Calm preparation suites with natural light and privacy.',
        image: images.gallery01,
      },
    ],
  },
  Events: {
    title: 'Event Formats',
    subtitle: 'Tailored event types for weddings, private and corporate hosting.',
    preview: {
      image: images.eventUpcoming,
      caption: 'Discover event experience types',
      path: '/events/wedding-weekend',
    },
    links: [
      {
        label: 'Wedding Weekend',
        path: '/events/wedding-weekend',
        description: 'Multi-day wedding programming with cohesive guest flow.',
        image: images.eventUpcoming,
      },
      {
        label: 'Private Celebrations',
        path: '/events/private-celebrations',
        description: 'Milestone private hosting with discreet premium service.',
        image: images.eventPrivate,
      },
      {
        label: 'Corporate Galas',
        path: '/events/corporate-galas',
        description: 'Executive-level events in a polished luxury environment.',
        image: images.eventCorporate,
      },
      {
        label: 'Engagement Parties',
        path: '/events/engagement-parties',
        description: 'Refined pre-wedding events with elevated social atmosphere.',
        image: images.gallery03,
      },
      {
        label: 'Bridal Showers',
        path: '/events/bridal-showers',
        description: 'Intimate bridal gatherings with curated styling direction.',
        image: images.gallery02,
      },
    ],
  },
  'About Us': {
    title: 'About Veloura',
    subtitle: 'The people, philosophy, and standards behind every hosted celebration.',
    preview: {
      image: images.gallery01,
      caption: 'Meet our story and team',
      path: '/about-us/our-story',
    },
    links: [
      {
        label: 'Our Story',
        path: '/about-us/our-story',
        description: 'How Veloura Estate became a refined celebration destination.',
        image: images.gallery01,
      },
      {
        label: 'Our Team',
        path: '/about-us/our-team',
        description: 'Creative, operations, and hospitality specialists in-house.',
        image: images.gallery02,
      },
      {
        label: 'Craft Philosophy',
        path: '/about-us/craft-philosophy',
        description: 'The design-first principles that shape our event experience.',
        image: images.gallery04,
      },
      {
        label: 'Partner Network',
        path: '/about-us/partner-network',
        description: 'Trusted collaborators in decor, fashion, and production.',
        image: images.gallery05,
      },
      {
        label: 'Service Standards',
        path: '/about-us/service-standards',
        description: 'Operational quality and hospitality benchmarks we uphold.',
        image: images.eventCorporate,
      },
    ],
  },
};

export const sharedTestimonials = [
  {
    quote:
      'Every detail felt intentional, calm, and deeply elegant. The venue transformed our day into a timeless memory.',
    author: 'Isabella Hart, Bride',
  },
  {
    quote:
      'The planning flow, culinary experience, and atmosphere were exceptionally refined. Guests still talk about it.',
    author: 'Noah Bennett, Groom',
  },
  {
    quote:
      'From ceremony to final toast, the team delivered quiet luxury and flawless execution at every step.',
    author: 'Amelia Scott, Private Event Host',
  },
];

export const pageConfigs = {
  home: {
    route: '/',
    seo: {
      title: 'Veloura Estate | Royal Wedding Venue',
      description: 'Ultra-elegant wedding venue for timeless ceremonies, curated receptions, and luxury celebrations.',
    },
    hero: {
      label: 'New York Wedding Estate',
      title: 'A Wedding Venue Crafted for Forever',
      subtitle: 'Host your ceremony, reception, and celebration weekend in one refined destination designed for timeless moments.',
      image: images.hero,
      overlayClass: 'bg-black/44',
      cta: { text: 'Explore Venue', href: '/venue' },
    },
    cta: { text: 'Book A Tour', href: '/contact-us' },
    sections: [
      {
        type: 'highlights',
        title: 'Designed for Every Celebration Style',
        items: [
          { title: 'Indoor Hall', subtitle: 'Grand vaulted interiors for timeless vows.', image: images.indoor },
          { title: 'Garden Ceremony', subtitle: 'Open-air romance framed by elegant greenery.', image: images.garden },
          { title: 'Banquet Space', subtitle: 'Curated receptions for refined celebrations.', image: images.banquet },
        ],
      },
      {
        type: 'galleryPreview',
        title: 'Signature Moments in Light',
        items: [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06],
      },
      {
        type: 'features',
        title: 'Why Choose Us',
        items: [
          { title: 'Decoration', copy: 'Elegant floral styling and immersive visual direction.' },
          { title: 'Planning', copy: 'End-to-end timeline design and guest flow coordination.' },
          { title: 'Catering', copy: 'Refined seasonal menus with private tasting sessions.' },
          { title: 'Photography', copy: 'Curated capture of every emotional and architectural detail.' },
        ],
      },
      { type: 'testimonials', items: sharedTestimonials },
      {
        type: 'spaces',
        title: 'Favorite Event Venues',
        items: [
          { title: 'Boho Garden', subtitle: 'Classic Weddings', image: images.spaceBoho },
          { title: 'Delicia Concept', subtitle: 'Summer Weddings', image: images.spaceDelicia },
          { title: 'Maison Loire', subtitle: 'Classic Weddings', image: images.spaceMaison },
        ],
      },
      {
        type: 'ctaStrip',
        title: 'Begin Your Venue Journey With a Private Tour',
        subtitle: 'Share your date and vision. Our team will guide you through every curated space.',
      },
    ],
  },

  gallery: {
    route: '/gallery',
    seo: {
      title: 'Gallery | Veloura Estate',
      description: 'Explore editorial wedding moments, ceremony scenes, and refined celebration details at Veloura Estate.',
    },
    hero: {
      label: 'Gallery',
      title: 'A Curated Visual Story of Celebrations',
      subtitle: 'An immersive collection of ceremony elegance, floral artistry, and luxurious receptions.',
      image: images.gallery06,
      overlayClass: 'bg-black/32',
      cta: { text: 'Book a Tour', href: '/contact-us' },
    },
    cta: { text: 'Start Planning', href: '/contact-us' },
    sections: [
      {
        type: 'masonry',
        title: 'Masonry Story Wall',
        items: [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06],
      },
      {
        type: 'categories',
        title: 'Curated Category Strip',
        items: ['Ceremony Aisles', 'Editorial Couple Portraits', 'Reception Styling', 'Floral Installations', 'Signature Details'],
      },
      {
        type: 'featuredBand',
        title: 'Wide Featured Composition',
        copy: 'Each composition captures balance, emotion, and the architectural beauty of the estate.',
        image: images.hero,
      },
      {
        type: 'coupleCarousel',
        title: 'Couple Moments Carousel',
        items: [images.gallery03, images.gallery06, images.gallery01, images.gallery05],
      },
      {
        type: 'socialCallout',
        title: 'Follow Us on Instagram',
        copy: '@veloura_day for latest visual stories and curated inspiration.',
      },
      {
        type: 'inquiry',
        title: 'Request a Personalized Gallery Walkthrough',
        subtitle: 'Our creative team will share tailored inspirations for your celebration vision.',
      },
    ],
  },

  menus: {
    route: '/our-menus',
    seo: {
      title: 'Our Menus | Veloura Estate',
      description: 'Discover signature wedding menus, tasting journeys, pairings, and culinary curation at Veloura Estate.',
    },
    hero: {
      label: 'Our Menus',
      title: 'Culinary Stories Crafted for the Occasion',
      subtitle: 'Seasonal, elegant, and personalized menus curated for every guest experience.',
      image: images.eventPrivate,
      overlayClass: 'bg-black/35',
      cta: { text: 'Reserve Tasting', href: '/contact-us' },
    },
    cta: { text: 'Reserve Tasting', href: '/contact-us' },
    sections: [
      {
        type: 'philosophy',
        title: 'Menu Philosophy',
        copy: 'Our kitchen blends seasonal ingredients with refined presentation to create an atmosphere of effortless luxury.',
      },
      {
        type: 'collections',
        title: 'Signature Menu Collections',
        items: [
          { title: 'Classic Elegance', subtitle: 'Timeless plated experiences with modern refinement.', image: images.eventCorporate },
          { title: 'Garden Romance', subtitle: 'Light seasonal courses inspired by outdoor celebrations.', image: images.eventPrivate },
          { title: 'Royal Banquet', subtitle: 'Grand tasting menus for extraordinary evening receptions.', image: images.eventUpcoming },
        ],
      },
      {
        type: 'timeline',
        title: 'Tasting Journey Timeline',
        items: [
          { title: 'Discovery Session', copy: 'Discuss flavor preferences, dietary needs, and celebration mood.' },
          { title: 'Chef Curation', copy: 'Receive a bespoke tasting plan with pairings and alternatives.' },
          { title: 'Private Tasting', copy: 'Experience your selected courses in an intimate session.' },
          { title: 'Final Refinement', copy: 'Lock menu sequencing and service choreography.' },
        ],
      },
      {
        type: 'pairings',
        title: 'Beverage & Dessert Pairings',
        items: ['Sparkling aperitif pairings', 'Signature tableside tea service', 'Artisanal dessert atelier', 'Night lounge petit-fours'],
      },
      {
        type: 'chef',
        title: 'Chef Curation Spotlight',
        copy: 'Executive culinary direction focused on heritage flavors, modern precision, and gracious hospitality.',
        image: images.gallery04,
      },
      {
        type: 'cta',
        title: 'Reserve a Private Tasting Experience',
        subtitle: 'Let us design a menu that reflects your story and celebration style.',
      },
    ],
  },

  blogs: {
    route: '/blogs',
    seo: {
      title: 'Blogs | Veloura Estate Journal',
      description: 'Read luxury wedding insights, styling guidance, and curated planning ideas from Veloura Estate.',
    },
    hero: {
      label: 'Blogs',
      title: 'The Veloura Wedding Journal',
      subtitle: 'Elegant planning intelligence, visual trends, and timeless hosting ideas.',
      image: images.gallery02,
      overlayClass: 'bg-black/34',
      cta: { text: 'Plan With Us', href: '/contact-us' },
    },
    cta: { text: 'Talk to Our Team', href: '/contact-us' },
    sections: [
      {
        type: 'featuredPost',
        title: 'Featured Insight',
        post: {
          title: 'How to Design an Airy, Royal Reception Flow',
          excerpt: 'A step-by-step framework for pacing ceremony, dinner, speeches, and dance without losing elegance.',
          tag: 'Planning',
          image: images.hero,
        },
      },
      {
        type: 'posts',
        title: 'Latest Articles',
        topics: ['All', 'Planning', 'Decor', 'Venue', 'Culinary', 'Guest Experience'],
        items: [
          { title: 'Choosing the Right Ceremony Layout', tag: 'Venue', image: images.spaceBoho },
          { title: 'Muted Bronze Styling for Modern Weddings', tag: 'Decor', image: images.gallery02 },
          { title: 'Building a Seasonal Reception Menu', tag: 'Culinary', image: images.eventPrivate },
          { title: 'Guest Comfort in Long Celebrations', tag: 'Guest Experience', image: images.eventCorporate },
          { title: 'Floral Architecture Trends in 2026', tag: 'Decor', image: images.gallery04 },
          { title: 'From Arrival to Farewell: Event Pacing', tag: 'Planning', image: images.eventUpcoming },
        ],
      },
      {
        type: 'trends',
        title: 'Trend Strip',
        items: ['Ceremony storytelling', 'Garden lounge corners', 'Live culinary experiences', 'Editorial portrait stations'],
      },
      {
        type: 'newsletter',
        title: 'Subscribe for Monthly Insights',
        subtitle: 'Receive luxury planning notes, fresh ideas, and event inspiration.',
      },
      {
        type: 'cta',
        title: 'Need Personal Guidance for Your Wedding Vision?',
        subtitle: 'Our planners can help you turn trends into a timeless celebration.',
      },
    ],
  },

  venue: {
    route: '/venue',
    seo: {
      title: 'Venue | Veloura Estate Spaces',
      description: 'Discover ceremony halls, garden settings, capacities, and amenities designed for luxury wedding hosting.',
    },
    hero: {
      label: 'Venue',
      title: 'Spaces Crafted for Grand and Intimate Moments',
      subtitle: 'A private estate with curated ceremony pathways, refined dining spaces, and timeless architecture.',
      image: images.spaceMaison,
      overlayClass: 'bg-black/30',
      cta: { text: 'Book A Tour', href: '/contact-us' },
    },
    cta: { text: 'Book A Tour', href: '/contact-us' },
    sections: [
      {
        type: 'masterGrid',
        title: 'Spaces Master Grid',
        items: [
          { title: 'Boho Garden', subtitle: 'Classic Weddings', image: images.spaceBoho },
          { title: 'Delicia Concept', subtitle: 'Summer Weddings', image: images.spaceDelicia },
          { title: 'Maison Loire', subtitle: 'Classic Weddings', image: images.spaceMaison },
        ],
      },
      {
        type: 'amenities',
        title: 'Amenities Matrix',
        items: [
          'Bridal and Groom private suites',
          'Indoor-outdoor climate flexibility',
          'Integrated AV and lighting controls',
          'Private valet and arrival lounge',
          'Dedicated culinary preparation zones',
          'Late-night guest comfort services',
        ],
      },
      {
        type: 'capacity',
        title: 'Capacity and Layout',
        copy: 'Host up to 400 guests with adaptable seating plans for ceremonies, dining, and dancing across connected spaces.',
      },
      {
        type: 'flow',
        title: 'Ceremony-to-Reception Flow',
        items: ['Welcome Courtyard', 'Garden Vows', 'Signature Cocktail Hour', 'Reception Hall', 'Afterparty Lounge'],
      },
      {
        type: 'miniGallery',
        title: 'Gallery Mini Slider',
        items: [images.indoor, images.garden, images.banquet, images.gallery03],
      },
      {
        type: 'cta',
        title: 'Schedule Your Personal Venue Walkthrough',
        subtitle: 'Experience space, light, and flow before you finalize your wedding date.',
      },
    ],
  },

  events: {
    route: '/events',
    seo: {
      title: 'Events | Veloura Estate',
      description: 'Host upcoming showcases, private milestones, and corporate celebrations in a refined event setting.',
    },
    hero: {
      label: 'Events',
      title: 'Curated Events in a Royal Setting',
      subtitle: 'From private milestones to corporate evenings, every gathering is tailored with quiet precision.',
      image: images.eventUpcoming,
      overlayClass: 'bg-black/35',
      cta: { text: 'Host An Event', href: '/contact-us' },
    },
    cta: { text: 'Host An Event', href: '/contact-us' },
    sections: [
      {
        type: 'eventCards',
        title: 'Upcoming, Private, and Corporate',
        items: [
          { title: 'Upcoming Events', subtitle: 'Seasonal showcases and curated open-house evenings.', image: images.eventUpcoming },
          { title: 'Private Celebrations', subtitle: 'Milestone moments hosted with tailored hospitality.', image: images.eventPrivate },
          { title: 'Corporate Events', subtitle: 'Executive gatherings in a polished destination venue.', image: images.eventCorporate },
        ],
      },
      {
        type: 'tiers',
        title: 'Package Tiers',
        items: [
          { title: 'Signature', copy: 'Essential luxury hosting with curated spatial flow.' },
          { title: 'Prestige', copy: 'Enhanced styling, culinary customization, and concierge.' },
          { title: 'Royal', copy: 'Full-scale production, bespoke experiences, and premium service team.' },
        ],
      },
      {
        type: 'timeline',
        title: 'Event Planning Process',
        items: [
          { title: 'Inquiry', copy: 'Share event goals, audience, and date priorities.' },
          { title: 'Concept', copy: 'Align theme, flow, and service scope with your team.' },
          { title: 'Production', copy: 'Finalize decor, hospitality, and operation logistics.' },
          { title: 'Execution', copy: 'Deliver a smooth, elegant guest experience.' },
        ],
      },
      {
        type: 'galleryRail',
        title: 'Event Gallery Rail',
        items: [images.eventPrivate, images.eventCorporate, images.eventUpcoming, images.gallery03, images.gallery04],
      },
      {
        type: 'quotes',
        title: 'Client Notes',
        items: [
          'Our corporate gala felt as polished as a five-star private event.',
          'The service choreography made hosting effortless from start to finish.',
        ],
      },
      {
        type: 'cta',
        title: 'Let Us Design Your Next Signature Event',
        subtitle: 'Connect with our planners to build a tailored event blueprint.',
      },
    ],
  },

  about: {
    route: '/about-us',
    seo: {
      title: 'About Us | Veloura Estate',
      description: 'Meet the vision, team, and craftsmanship behind Veloura Estate and its luxury event experiences.',
    },
    hero: {
      label: 'About Us',
      title: 'The Story Behind Veloura Estate',
      subtitle: 'A design-first hospitality team devoted to timeless celebrations and elevated guest experiences.',
      image: images.gallery01,
      overlayClass: 'bg-black/34',
      cta: { text: 'Work With Us', href: '/contact-us' },
    },
    cta: { text: 'Work With Us', href: '/contact-us' },
    sections: [
      {
        type: 'manifesto',
        title: 'Philosophy Manifesto',
        copy: 'We believe luxury is measured by atmosphere, pacing, and thoughtful detail rather than excess.',
      },
      {
        type: 'team',
        title: 'Team & Curators',
        items: [
          { title: 'Elena Maris', subtitle: 'Creative Director', image: images.gallery02 },
          { title: 'Noah Sinclair', subtitle: 'Event Operations Lead', image: images.gallery03 },
          { title: 'Livia Hart', subtitle: 'Hospitality Curator', image: images.gallery04 },
        ],
      },
      {
        type: 'partners',
        title: 'Partner Network',
        items: ['Julia Bridal', 'Wedding Planner', 'Vogue Weddings', 'Love Story Atelier', 'Honey Moon Co.'],
      },
      {
        type: 'pillars',
        title: 'Craft Pillars',
        items: [
          { title: 'Atmosphere', copy: 'Spatial styling that feels airy and intentional.' },
          { title: 'Precision', copy: 'Operational excellence for seamless event flow.' },
          { title: 'Hospitality', copy: 'Warm, discreet, and polished guest care.' },
          { title: 'Storytelling', copy: 'Every celebration reflects the couple or host.' },
        ],
      },
      {
        type: 'milestones',
        title: 'Milestones',
        items: [
          { value: '350+', label: 'Celebrations Hosted' },
          { value: '98%', label: 'Guest Satisfaction' },
          { value: '40+', label: 'Trusted Partners' },
          { value: '12', label: 'Years of Craft' },
        ],
      },
      {
        type: 'cta',
        title: 'Create Something Timeless With Our Team',
        subtitle: 'Let us shape your wedding or private event experience from concept to farewell.',
      },
    ],
  },

  contact: {
    route: '/contact-us',
    seo: {
      title: 'Contact Us | Veloura Estate',
      description: 'Get in touch with Veloura Estate to book a tour, plan your wedding, or host a private event.',
    },
    hero: {
      label: 'Contact Us',
      title: 'Send Us a Request',
      subtitle: 'Share your vision and preferred date. We will respond with tailored next steps.',
      image: images.indoor,
      overlayClass: 'bg-black/45',
      cta: { text: 'Call Concierge', href: '/contact-us#direct-contact' },
    },
    cta: { text: 'Send Inquiry', href: '/contact-us#inquiry-form' },
    sections: [
      {
        type: 'contactCards',
        title: 'Direct Contact',
        items: [
          { title: 'Phone', value: '+1 234-567-8910' },
          { title: 'Email', value: 'concierge@velouraestate.com' },
          { title: 'Address', value: '198 West 21st Street, New York, NY' },
        ],
      },
      {
        type: 'map',
        title: 'Venue Map Placeholder',
        copy: 'Interactive venue map integration can be connected in the next backend phase.',
      },
      {
        type: 'faq',
        title: 'Quick Answers',
        items: [
          { q: 'How far in advance should we book?', a: 'For peak seasons, we recommend 8-12 months in advance.' },
          { q: 'Can you support custom menus?', a: 'Yes. We provide custom tasting and menu refinement sessions.' },
          { q: 'Do you host non-wedding events?', a: 'Yes, private and corporate events are available year-round.' },
          { q: 'Is decor included?', a: 'Core styling support is included with optional premium decor packages.' },
        ],
      },
      {
        type: 'socials',
        title: 'Social Links',
        items: ['Instagram', 'Facebook', 'YouTube', 'Pinterest'],
      },
      {
        type: 'cta',
        title: 'Ready to Begin Your Celebration Journey?',
        subtitle: 'Submit your inquiry and our team will coordinate your personalized plan.',
      },
    ],
  },
};

const makeSubpageConfig = (menuLabel, link, previewImage) => ({
  seo: {
    title: `${link.label} | Veloura Estate`,
    description: `${link.description} Discover refined planning, design, and hosting details at Veloura Estate.`,
  },
  hero: {
    label: menuLabel,
    title: link.label,
    subtitle: link.description,
    image: link.image ?? previewImage,
    overlayClass: 'bg-black/32',
    cta: { text: 'Book A Tour', href: '/contact-us' },
  },
  focus: {
    title: `Signature ${link.label}`,
    copy: `Our ${link.label.toLowerCase()} approach blends quiet luxury with precise coordination, creating a polished and memorable guest experience from first impression to final farewell.`,
    image: link.image ?? previewImage,
  },
  details: {
    title: 'Experience Outline',
    items: [
      `Creative direction tailored for ${link.label.toLowerCase()}`,
      'Guest flow designed for comfort and visual rhythm',
      'Hospitality choreography aligned with event timing',
      'Refined styling layers with subtle premium finish',
    ],
  },
  metrics: {
    title: 'What Makes It Distinct',
    items: [
      { value: '01', label: 'Concept-led design planning' },
      { value: '02', label: 'Calm, elegant execution' },
      { value: '03', label: 'Luxury hospitality standards' },
      { value: '04', label: 'Timeless visual storytelling' },
    ],
  },
  cta: {
    title: `Plan ${link.label} With Veloura Estate`,
    subtitle: 'Connect with our team to shape a tailored concept around your celebration goals.',
  },
});

export const subpageConfigs = Object.values(megaMenuConfig).reduce((acc, menu) => {
  menu.links.forEach((link) => {
    acc[link.path] = makeSubpageConfig(menu.title, link, menu.preview.image);
  });
  return acc;
}, {});

export const subpageRoutes = Object.keys(subpageConfigs);

export const routeMeta = {
  '/': pageConfigs.home,
  '/gallery': pageConfigs.gallery,
  '/our-menus': pageConfigs.menus,
  '/blogs': pageConfigs.blogs,
  '/venue': pageConfigs.venue,
  '/events': pageConfigs.events,
  '/about-us': pageConfigs.about,
  '/contact-us': pageConfigs.contact,
  ...subpageConfigs,
};
