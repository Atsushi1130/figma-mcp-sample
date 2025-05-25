export interface DogImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Array<{
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    reference_image_id: string;
  }>;
}

export interface SearchResult {
  images: DogImage[];
  total: number;
  page: number;
  limit: number;
} 