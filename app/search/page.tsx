"use client";

import React, { useCallback } from "react";
import styles from "./page.module.css";
import { useSearch } from "./hooks/useSearch";

export default function SearchPage() {
  const {
    query,
    results,
    isLoading,
    error,
    history,
    handleSearch,
    clearHistory,
  } = useSearch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearch(e.target.value);
    },
    [handleSearch],
  );

  const handleHistoryClick = useCallback(
    (query: string) => {
      handleSearch(query);
    },
    [handleSearch],
  );

  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>
        <div className={styles.time}>9:27</div>
        <div className={styles.statusIcons}>
          <div className={styles.signalIcon} />
          <div className={styles.wifiIcon} />
          <div className={styles.batteryWrapper}>
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.battery}
            >
              <rect
                opacity="0.35"
                x="0.5"
                y="0.833344"
                width="21"
                height="10.3333"
                rx="2.16667"
                stroke="black"
              />
              <path
                opacity="0.4"
                d="M23 4V8C23.8079 7.66122 24.3333 6.87313 24.3333 6C24.3333 5.12687 23.8079 4.33878 23 4Z"
                fill="black"
              />
              <rect
                x="2"
                y="2.33334"
                width="18"
                height="7.33333"
                rx="1.33333"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <h1 className={styles.title}>Search</h1>

      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search all photos"
          className={styles.searchInput}
          aria-label="Search photos"
        />
        {isLoading && <div className={styles.loader} />}
      </div>

      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className={styles.results}>
          {results.map((result) => (
            <div key={result.id} className={styles.resultItem}>
              {result.thumbnail && (
                <div className={styles.thumbnailWrapper}>
                  <img
                    src={result.thumbnail}
                    alt=""
                    className={styles.thumbnail}
                  />
                </div>
              )}
              <div className={styles.resultTitle}>{result.title}</div>
            </div>
          ))}
        </div>
      )}

      {history.length > 0 && !query && (
        <div className={styles.history}>
          <div className={styles.historyHeader}>
            <h2 className={styles.historyTitle}>Recent Searches</h2>
            <button
              onClick={clearHistory}
              className={styles.clearHistory}
              aria-label="Clear search history"
            >
              Clear
            </button>
          </div>
          <div className={styles.historyList}>
            {history.map((item, index) => (
              <button
                key={item.timestamp}
                className={styles.historyItem}
                onClick={() => handleHistoryClick(item.query)}
              >
                {item.query}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
