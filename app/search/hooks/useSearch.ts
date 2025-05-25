"use client";

import { useState, useEffect, useCallback } from "react";
import { SearchResult, SearchState, SearchHistory } from "../types";

const HISTORY_KEY = "search_history";
const MAX_HISTORY = 5;

export function useSearch() {
  const [state, setState] = useState<SearchState>({
    query: "",
    results: [],
    isLoading: false,
  });
  const [history, setHistory] = useState<SearchHistory[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save history to localStorage
  const saveHistory = useCallback(
    (query: string) => {
      const newHistory = [
        { query, timestamp: Date.now() },
        ...history.filter((h) => h.query !== query),
      ].slice(0, MAX_HISTORY);

      setHistory(newHistory);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    },
    [history],
  );

  // Mock search function - replace with actual API call
  const searchPhotos = useCallback(
    async (query: string): Promise<SearchResult[]> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock results
      return [
        { id: "1", title: `${query} result 1`, thumbnail: "URL_1" },
        { id: "2", title: `${query} result 2`, thumbnail: "URL_2" },
        { id: "3", title: `${query} result 3`, thumbnail: "URL_3" },
      ];
    },
    [],
  );

  // Debounced search handler
  const handleSearch = useCallback(
    async (query: string) => {
      setState((prev) => ({
        ...prev,
        query,
        isLoading: true,
        error: undefined,
      }));

      try {
        const results = await searchPhotos(query);
        setState((prev) => ({ ...prev, results, isLoading: false }));
        if (query.trim()) {
          saveHistory(query);
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          results: [],
          isLoading: false,
          error: "Failed to search photos",
        }));
      }
    },
    [searchPhotos, saveHistory],
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  return {
    ...state,
    history,
    handleSearch,
    clearHistory,
  };
}
