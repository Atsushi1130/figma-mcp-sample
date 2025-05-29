import { DogImage, SearchResult } from '../types/api';

const API_KEY = process.env.NEXT_PUBLIC_DOG_API_KEY;
const API_BASE_URL = 'https://api.thedogapi.com/v1';

export async function searchDogs(query: string, limit: number = 15): Promise<SearchResult> {
  const response = await fetch(`${API_BASE_URL}/images/search?limit=${limit}`, {
    headers: {
      'x-api-key': API_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dog images');
  }

  const images: DogImage[] = await response.json();
  
  return {
    images,
    total: images.length,
    page: 1,
    limit,
  };
} 