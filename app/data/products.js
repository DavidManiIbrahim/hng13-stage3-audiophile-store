export const products = [
  {
    id: 1,
    slug: 'xx99-mark-ii-headphones',
    name: 'XX99 Mark II Headphones',
    category: 'headphones',
    new: true,
    price: 2999,
    description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally homogeneous polyurethane diaphragm for the woofer pairs perfectly with the dome-shaped cap that generates a uniformly wide dispersion field.`,
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['zx9-speaker', 'xx99-mark-i', 'xx59']
  },
  {
    id: 2,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    category: 'speakers',
    new: true,
    price: 4500,
    description: 'Upgrade your sound system with the all new ZX9 active speaker. It\'s a bookshelf speaker system that offers truly wireless connectivity.',
    features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter.`,
    includes: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 2, item: 'Speaker Cable' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
      { quantity: 1, item: '10m Optical Cable' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['zx7-speaker', 'xx99-mark-ii-headphones', 'xx59']
  },
  {
    id: 3,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    category: 'speakers',
    new: false,
    price: 3500,
    description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components.',
    features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound.`,
    includes: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 2, item: 'Speaker Cable' },
      { quantity: 1, item: 'User Manual' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['zx9-speaker', 'xx99-mark-ii-headphones', 'yx1-earphones']
  },
  {
    id: 4,
    slug: 'xx99-mark-i',
    name: 'XX99 Mark I Headphones',
    category: 'headphones',
    new: false,
    price: 1750,
    description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles.',
    features: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience.`,
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['xx99-mark-ii-headphones', 'zx9-speaker', 'xx59']
  },
  {
    id: 5,
    slug: 'xx59',
    name: 'XX59 Headphones',
    category: 'headphones',
    new: false,
    price: 899,
    description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.',
    features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style.`,
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['xx99-mark-ii-headphones', 'zx9-speaker', 'yx1-earphones']
  },
  {
    id: 6,
    slug: 'yx1-earphones',
    name: 'YX1 Wireless Earphones',
    category: 'earphones',
    new: true,
    price: 599,
    description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.',
    features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit.`,
    includes: [
      { quantity: 2, item: 'Earphone Unit' },
      { quantity: 6, item: 'Multi-size Earplugs' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: 'USB-C Charging Cable' },
      { quantity: 1, item: 'Travel Pouch' },
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=600&fit=crop',
      ]
    },
    relatedProducts: ['xx99-mark-ii-headphones', 'zx9-speaker', 'xx59']
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// Helper function to get related products
export function getRelatedProducts(productSlug) {
  const product = getProductBySlug(productSlug);
  if (!product) return [];
  
  return product.relatedProducts
    .map(slug => getProductBySlug(slug))
    .filter(Boolean);
}