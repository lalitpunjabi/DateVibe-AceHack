import { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: '1',
    name: 'Palladio Terrace',
    description: 'Elegant rooftop dining with panoramic views of Jaipur and authentic Italian cuisine.',
    fullDescription: 'Palladio Terrace offers an elegant rooftop dining experience with breathtaking panoramic views of Jaipur. Specializing in authentic Italian cuisine prepared by expert chefs, this venue creates the perfect romantic atmosphere with soft lighting, live music, and impeccable service. The terrace setting under the stars makes it an ideal choice for a memorable date night.',
    images: [
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    rating: 4.8,
    reviews: 342,
    location: 'Civil Lines, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 43210',
    email: 'reservations@palladioterrace.com',
    averagePrice: 3500,
    servesAlcohol: true,
    openingHours: '6:00 PM - 11:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: false
    }
  },
  {
    id: '2',
    name: 'Spice Garden',
    description: 'Traditional Rajasthani cuisine in a garden setting with private dining cabanas.',
    fullDescription: 'Spice Garden offers an authentic Rajasthani dining experience in a lush garden setting. The venue features private dining cabanas surrounded by fragrant flowers and soft lighting, creating an intimate atmosphere perfect for couples. Their menu showcases traditional Rajasthani dishes prepared with secret family recipes passed down through generations, offering a true taste of local culture in a romantic setting.',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    rating: 4.6,
    reviews: 278,
    location: 'Malviya Nagar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 12345',
    email: 'bookings@spicegarden.com',
    averagePrice: 2800,
    servesAlcohol: false,
    openingHours: '12:00 PM - 10:30 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '3',
    name: 'Café de Amour',
    description: 'Charming French-inspired café with intimate seating and delectable pastries.',
    fullDescription: 'Café de Amour is a charming French-inspired café that transports you straight to the streets of Paris. With its intimate seating arrangements, soft French music, and authentic décor, it creates the perfect setting for a romantic date. The café is famous for its delectable pastries, artisanal coffees, and French cuisine prepared by chefs trained in France. Their signature chocolate soufflé is a must-try for couples.',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80',
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    ],
    rating: 4.7,
    reviews: 312,
    location: 'C-Scheme, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 67890',
    email: 'hello@cafedeamour.com',
    averagePrice: 1800,
    servesAlcohol: true,
    openingHours: '9:00 AM - 10:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '4',
    name: 'Moonlight Pavilion',
    description: 'Luxury dining in a heritage haveli with private poolside tables and live music.',
    fullDescription: 'Moonlight Pavilion offers a luxury dining experience set in a beautifully restored heritage haveli. The venue features private poolside tables where couples can enjoy an intimate dinner under the stars. With live classical music performances, traditional Rajasthani decor, and impeccable service, it creates a magical atmosphere for special occasions. Their menu combines international cuisine with local flavors, prepared by award-winning chefs.',
    images: [
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.9,
    reviews: 186,
    location: 'Amer Road, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 23456',
    email: 'reservations@moonlightpavilion.com',
    averagePrice: 5000,
    servesAlcohol: true,
    openingHours: '7:00 PM - 11:30 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '5',
    name: 'Rose Terrace',
    description: 'Romantic rooftop restaurant with rose-themed decor and Continental cuisine.',
    fullDescription: 'Rose Terrace is a romantic rooftop restaurant that captivates with its beautiful rose-themed decor. Every detail, from the rose petal pathways to the floral centerpieces, is designed to create a romantic ambiance. The restaurant specializes in Continental cuisine with a focus on aphrodisiac ingredients. Their signature rose petal desserts and rose-infused cocktails add a unique touch to the dining experience, making it perfect for anniversary celebrations and romantic dates.',
    images: [
      'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.5,
    reviews: 245,
    location: 'Vaishali Nagar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 34567',
    email: 'contact@roseterrace.com',
    averagePrice: 2500,
    servesAlcohol: true,
    openingHours: '5:00 PM - 11:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '6',
    name: 'Haveli Courtyard',
    description: 'Authentic Rajasthani dining experience in a 150-year-old restored haveli.',
    fullDescription: 'Haveli Courtyard offers an authentic Rajasthani dining experience in a 150-year-old restored haveli. The courtyard setting, with its traditional architecture, hand-painted murals, and antique furnishings, creates a royal ambiance that reflects Jaipur rich heritage. Diners are treated to traditional Rajasthani thalis served on silver platters, while folk musicians and dancers provide entertainment. The venue specializes in royal recipes once prepared for the Maharajas of Rajasthan.',
    images: [
      'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1567636788276-40a47795ba4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    rating: 4.7,
    reviews: 298,
    location: 'Jaipur Old City',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 45678',
    email: 'dine@havelicourtyard.com',
    averagePrice: 3200,
    servesAlcohol: false,
    openingHours: '12:30 PM - 10:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '7',
    name: 'Twilight Lounge',
    description: 'Modern fusion cuisine with private cabanas and spectacular city views.',
    fullDescription: 'Twilight Lounge is a contemporary dining destination that offers modern fusion cuisine in a sophisticated setting. The venue features private cabanas with spectacular city views, perfect for an intimate dining experience. The innovative menu combines global flavors with local ingredients, creating unique dishes that surprise and delight. With mood lighting, ambient music, and attentive yet unobtrusive service, Twilight Lounge creates the perfect atmosphere for couples looking for a modern romantic experience.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    rating: 4.6,
    reviews: 215,
    location: 'Tonk Road, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 56789',
    email: 'info@twilightlounge.com',
    averagePrice: 4000,
    servesAlcohol: true,
    openingHours: '6:30 PM - 1:00 AM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '8',
    name: 'Garden of Eden',
    description: 'Vegetarian fine dining in a lush garden setting with waterfall features.',
    fullDescription: 'Garden of Eden offers vegetarian fine dining in a lush garden setting that feels like a private paradise. The venue features natural waterfall features, exotic plants, and intimate seating areas hidden among the greenery. Their farm-to-table approach ensures the freshest ingredients in their innovative vegetarian and vegan dishes. The peaceful environment, with the gentle sounds of flowing water and birds, creates a serene atmosphere perfect for meaningful conversations and connection.',
    images: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.5,
    reviews: 189,
    location: 'Jagatpura, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 67890',
    email: 'reservations@gardenofeden.com',
    averagePrice: 2200,
    servesAlcohol: false,
    openingHours: '11:00 AM - 10:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '9',
    name: 'Starlight Deck',
    description: 'Exclusive rooftop dining with telescopes for stargazing and gourmet cuisine.',
    fullDescription: 'Starlight Deck offers an exclusive rooftop dining experience that combines gourmet cuisine with stargazing. The venue provides telescopes at each table, allowing couples to explore the night sky between courses. Their expert staff includes an astronomy enthusiast who can guide guests through celestial observations. The menu features international gourmet cuisine with dishes named after constellations and celestial bodies. With limited tables and private dining spaces, it ensures an intimate and unique romantic experience.',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    ],
    rating: 4.8,
    reviews: 156,
    location: 'Mansarovar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 78901',
    email: 'bookings@starlightdeck.com',
    averagePrice: 4500,
    servesAlcohol: true,
    openingHours: '7:00 PM - 12:00 AM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '10',
    name: 'Maharaja Table',
    description: 'Royal dining experience with traditional floor seating and live folk music.',
    fullDescription: 'Maharaja Table offers a royal dining experience that recreates the grandeur of Rajasthan royal past. The venue features traditional floor seating with plush cushions and low tables in a space adorned with mirrors, chandeliers, and royal artifacts. Guests are welcomed with rose water and traditional tilak, then served a multi-course meal on silver thalis by staff dressed in traditional attire. Live folk music and dance performances enhance the authentic experience, making diners feel like royalty for the evening.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.7,
    reviews: 210,
    location: 'Bani Park, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 89012',
    email: 'dine@maharajastable.com',
    averagePrice: 3800,
    servesAlcohol: true,
    openingHours: '6:30 PM - 10:30 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '11',
    name: 'Lakeside Pavilion',
    description: 'Peaceful dining by a natural lake with floating candles and continental cuisine.',
    fullDescription: 'Lakeside Pavilion offers a peaceful dining experience by a natural lake on the outskirts of Jaipur. The venue features a wooden pavilion extending over the water, surrounded by nature and illuminated by hundreds of floating candles in the evening. The tranquil setting, with the sounds of water and wildlife, creates a magical atmosphere for couples. Their menu focuses on continental cuisine with fresh seafood options, complemented by an extensive wine list. The secluded location ensures privacy and an escape from the city hustle.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.6,
    reviews: 178,
    location: 'Kukas, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 90123',
    email: 'info@lakesidepavilion.com',
    averagePrice: 3500,
    servesAlcohol: true,
    openingHours: '12:00 PM - 3:30 PM, 7:00 PM - 10:30 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '12',
    name: 'Vintage Vineyard',
    description: 'Wine-focused dining with vineyard views and Mediterranean cuisine.',
    fullDescription: 'Vintage Vineyard offers a wine-focused dining experience set against the backdrop of a boutique vineyard just outside Jaipur. The restaurant features a glass-walled dining area with panoramic views of the vineyard, creating a European-inspired romantic setting. Their sommelier guides couples through wine tastings paired perfectly with Mediterranean cuisine prepared using herbs grown on the property. The venue also offers vineyard tours before dinner, allowing guests to learn about winemaking while enjoying the beautiful landscape.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    ],
    rating: 4.9,
    reviews: 145,
    location: 'Chandwaji, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 01234',
    email: 'reservations@vintagevineyard.com',
    averagePrice: 4200,
    servesAlcohol: true,
    openingHours: '4:00 PM - 11:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '13',
    name: 'Zen Garden',
    description: 'Contemporary Asian fusion cuisine in a serene garden setting.',
    fullDescription: 'Zen Garden offers a peaceful dining experience with contemporary Asian fusion cuisine. The restaurant features private dining pods surrounded by a meticulously maintained Japanese garden, complete with koi ponds and bamboo groves. Each pod provides an intimate setting for couples to enjoy their meal in privacy.',
    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9',
      'https://images.unsplash.com/photo-1515668236457-83c3b8764839',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    ],
    rating: 4.3,
    reviews: 156,
    location: 'Malviya Nagar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 11111',
    email: 'info@zengarden.com',
    averagePrice: 2200,
    servesAlcohol: true,
    openingHours: '12:00 PM - 10:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '14',
    name: 'The Rustic Kitchen',
    description: 'Farm-to-table dining experience with organic ingredients.',
    fullDescription: 'The Rustic Kitchen celebrates farm-to-table dining with a focus on organic, locally-sourced ingredients. Set in a converted farmhouse, the restaurant offers both indoor and outdoor seating with views of their organic garden. Their menu changes seasonally to showcase the best local produce.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9'
    ],
    rating: 4.2,
    reviews: 189,
    location: 'Sirsi Road, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 22222',
    email: 'dine@rustickitchen.com',
    averagePrice: 1800,
    servesAlcohol: false,
    openingHours: '11:00 AM - 10:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: false,
      vegan: true
    }
  },
  {
    id: '15',
    name: 'Skyline Lounge',
    description: 'Modern rooftop lounge with city views and international cuisine.',
    fullDescription: 'Skyline Lounge offers a sophisticated dining experience with panoramic views of Jaipur from its rooftop location. The venue features both indoor and outdoor seating, with glass walls that provide unobstructed views of the city lights. Their menu includes international cuisine with a modern twist.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    ],
    rating: 4.4,
    reviews: 234,
    location: 'C-Scheme, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 33333',
    email: 'reservations@skylinelounge.com',
    averagePrice: 3000,
    servesAlcohol: true,
    openingHours: '5:00 PM - 12:00 AM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: false
    }
  },
  {
    id: '16',
    name: 'The Green Table',
    description: 'Premium vegetarian and vegan dining experience.',
    fullDescription: 'The Green Table specializes in premium vegetarian and vegan cuisine, proving that plant-based dining can be both sophisticated and satisfying. Their innovative menu features dishes made from organic, locally-sourced ingredients, beautifully presented in an elegant setting.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
    ],
    rating: 4.5,
    reviews: 167,
    location: 'Vaishali Nagar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 44444',
    email: 'hello@greentable.com',
    averagePrice: 2000,
    servesAlcohol: false,
    openingHours: '11:00 AM - 10:30 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: false,
      vegan: true
    }
  },
  {
    id: '17',
    name: 'Carnivore\'s Den',
    description: 'Premium steakhouse with extensive wine collection.',
    fullDescription: 'Carnivore\'s Den is Jaipur\'s premier steakhouse, offering the finest cuts of meat paired with an extensive wine collection. The restaurant features private dining booths, each themed after different hunting lodges, creating an intimate atmosphere for meat lovers.',
    images: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
    ],
    rating: 4.6,
    reviews: 198,
    location: 'Raja Park, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 55555',
    email: 'bookings@carnivoresden.com',
    averagePrice: 3500,
    servesAlcohol: true,
    openingHours: '6:30 PM - 11:00 PM',
    dietaryOptions: {
      veg: false,
      nonVeg: true,
      vegan: false
    }
  },
  {
    id: '18',
    name: 'Fusion Flavors',
    description: 'Indo-Mexican fusion cuisine in a vibrant setting.',
    fullDescription: 'Fusion Flavors brings together the best of Indian and Mexican cuisines in unexpected and delightful ways. The restaurant\'s colorful, vibrant decor matches its innovative menu. Each dish tells a story of cultural fusion, creating unique taste experiences.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9'
    ],
    rating: 4.1,
    reviews: 145,
    location: 'Tonk Road, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 66666',
    email: 'info@fusionflavors.com',
    averagePrice: 1500,
    servesAlcohol: true,
    openingHours: '12:00 PM - 11:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: true,
      vegan: true
    }
  },
  {
    id: '19',
    name: 'The Coastal Affair',
    description: 'Fresh seafood and coastal cuisine in a maritime-themed setting.',
    fullDescription: 'The Coastal Affair brings the seaside to Jaipur with its fresh seafood and coastal cuisine from around India. The maritime-themed decor creates a unique atmosphere, while the menu features daily fresh catches and traditional coastal recipes.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    ],
    rating: 4.3,
    reviews: 167,
    location: 'Mansarovar, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 77777',
    email: 'dine@coastalaffair.com',
    averagePrice: 2800,
    servesAlcohol: true,
    openingHours: '12:30 PM - 10:30 PM',
    dietaryOptions: {
      veg: false,
      nonVeg: true,
      vegan: false
    }
  },
  {
    id: '20',
    name: 'The Buddha Bowl',
    description: 'Healthy Asian-inspired bowls and meditation garden dining.',
    fullDescription: 'The Buddha Bowl combines healthy eating with mindful dining. Set in a peaceful garden with a meditation area, the restaurant specializes in nutritious and beautiful bowl meals inspired by Asian cuisines. Each dish is carefully crafted to provide a balance of flavors and nutrients.',
    images: [
      'https://images.unsplash.com/photo-1515668236457-83c3b8764839',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
    ],
    rating: 4.4,
    reviews: 178,
    location: 'Jagatpura, Jaipur',
    mapLink: 'https://maps.google.com',
    phone: '+91 98765 88888',
    email: 'eat@buddhabowl.com',
    averagePrice: 1000,
    servesAlcohol: false,
    openingHours: '8:00 AM - 9:00 PM',
    dietaryOptions: {
      veg: true,
      nonVeg: false,
      vegan: true
    }
  }
];