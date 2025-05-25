export interface SearchResult {
  id: string;
  title: string;
  thumbnail?: string;
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error?: string;
}

export interface SearchHistory {
  query: string;
  timestamp: number;
}
