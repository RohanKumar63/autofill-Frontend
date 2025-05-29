import { useEffect, useState, useRef } from 'react';
import { dummyData } from '../data';
import { LRUCache } from '../utils/LRUCache';
import '../style/SearchInput.css';

const cache = new LRUCache(10);

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const timeout = useRef();

  const highlightMatch = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} style={{ color: '#3b82f6', fontWeight: '700' }}>
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const handleSearch = (input) => {
    if (!input.trim()) return setResults([]);
    const cached = cache.get(input);
    if (cached) {
      setResults(cached);
      return;
    }
    const filtered = dummyData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    cache.set(input, filtered);
    setResults(filtered);
  };

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      handleSearch(query);
    }, 300);
    return () => clearTimeout(timeout.current);
  }, [query]);

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          className="search-input"
          value={query}
          placeholder="Search tutorials..."
          onChange={(e) => setQuery(e.target.value)}
          spellCheck="false"
          aria-label="Search tutorials"
        />
        {/* Search Icon */}
        <span className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"/></svg>
        </span>
        {/* Close Icon */}
        {query && (
          <button
            className="close-icon"
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"/></svg>
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="results-list" tabIndex={-1} aria-label="Search results" role="listbox">
          {results.map((item) => (
            <li
              key={item.id}
              className="result-item"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setQuery(item.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setQuery(item.name);
              }}
              tabIndex={0}
              role="option"
              aria-selected={query === item.name}
            >
              {highlightMatch(item.name, query)}
            </li>
          ))}
        </ul>
      ) : query.trim() !== '' ? (
        <div className="no-results">No results found</div>
      ) : null}
    </div>
  );
}
