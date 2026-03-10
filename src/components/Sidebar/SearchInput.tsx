import React from 'react';
import styles from './Sidebar.module.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Поиск чатов..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className={styles.searchIcon}>🔍</span>
    </div>
  );
};

export default SearchInput;