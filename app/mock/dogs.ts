import { DogImage, SearchResult } from '../types/api';

const mockDogImages: DogImage[] = [
  {
    id: '1',
    url: '/images/dog1.jpg',
    width: 107,
    height: 107,
    breeds: [{
      id: 1,
      name: 'Golden Retriever',
      bred_for: 'Retrieving game',
      breed_group: 'Sporting',
      life_span: '10-12 years',
      temperament: 'Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident',
      reference_image_id: 'golden1'
    }]
  },
  {
    id: '2',
    url: '/images/dog2.jpg',
    width: 107,
    height: 107,
    breeds: [{
      id: 2,
      name: 'Labrador Retriever',
      bred_for: 'Water retrieving',
      breed_group: 'Sporting',
      life_span: '10-13 years',
      temperament: 'Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered',
      reference_image_id: 'lab1'
    }]
  },
  {
    id: '3',
    url: '/images/dog3.jpg',
    width: 107,
    height: 107,
    breeds: [{
      id: 3,
      name: 'Siberian Husky',
      bred_for: 'Sled pulling',
      breed_group: 'Working',
      life_span: '12-14 years',
      temperament: 'Outgoing, Friendly, Alert, Gentle, Intelligent',
      reference_image_id: 'husky1'
    }]
  },
  {
    id: '4',
    url: '/images/dog4.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '5',
    url: '/images/dog5.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '6',
    url: '/images/dog6.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '7',
    url: '/images/dog7.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '8',
    url: '/images/dog8.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '9',
    url: '/images/dog9.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '10',
    url: '/images/dog10.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '11',
    url: '/images/dog11.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '12',
    url: '/images/dog12.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '13',
    url: '/images/dog13.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '14',
    url: '/images/dog14.jpg',
    width: 107,
    height: 107,
    breeds: []
  },
  {
    id: '15',
    url: '/images/dog15.jpg',
    width: 107,
    height: 107,
    breeds: []
  }
];

export async function getMockDogs(limit: number = 15): Promise<SearchResult> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    images: mockDogImages.slice(0, limit),
    total: mockDogImages.length,
    page: 1,
    limit,
  };
} 