// src/data.js

export const destinations = [
 { 
    id: 'paris', 
    name: 'Paris, France', 
    desc: 'The city of lights, known for its art, fashion, and culture.', 
    price: '$1,200', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800',
    // Adding essential services for Paris
    // ... existing fields
    essentials: {
      hospitals: ['American Hospital of Paris', 'Hôpital Pitié-Salpêtrière'],
      banks: ['BNP Paribas', 'Société Générale'],
      police: ['Police Nationale - 17']
    }
  },
  { 
    id: 'tokyo', 
    name: 'Tokyo, Japan', 
    desc: 'A perfect blend of ancient temples and futuristic city life.', 
    price: '$1,500', 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800' ,
    essentials: {
      hospitals: ['Tokyo Medical University Hospital', 'St. Luke’s International Hospital'],
      banks: ['Mitsubishi UFJ Financial Group', 'Sumitomo Mitsui Banking Corporation'],
      police: ['Tokyo Metropolitan Police Department - 110']
    }
  },
  { 
    id: 'santorini', 
    name: 'Santorini, Greece', 
    desc: 'Famous for its stunning sunsets and whitewashed buildings.', 
    price: '$1,100', 
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800' ,
    essentials: {
      hospitals: ['Santorini General Hospital'],
      banks: ['Alpha Bank', 'Eurobank'],
      police: ['Santorini Police Department - 100']
    }
  },
  { 
    id: 'rome', 
    name: 'Rome, Italy', 
    desc: 'Walk through history in the eternal city with its ancient ruins.', 
    price: '$950', 
    image: 'https://images.unsplash.com/photo-1552832230-c0317dd3746c?q=80&w=800' ,
    essentials: {
      hospitals: ['Policlinico Umberto I', 'Ospedale San Giovanni'],
      banks: ['UniCredit', 'Intesa Sanpaolo'],
      police: ['Polizia di Stato - 113']
    }
  },
  { 
    id: 'dubai', 
    name: 'Dubai, UAE', 
    desc: 'Luxury shopping, ultramodern architecture, and desert adventures.', 
    price: '$1,300', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea26dff88e0?q=80&w=800',
    essentials: {
      hospitals: ['Dubai Hospital', 'American Hospital Dubai'],
      banks: ['Emirates NBD', 'Abu Dhabi Commercial Bank'],
      police: ['Dubai Police - 999']
    } 
  }
];

export const getDestinationById = (id) => {
  return destinations.find((dest) => dest.id === id);
};