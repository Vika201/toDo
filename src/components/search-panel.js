import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'search';
    const searchStyle = {
        fontSize: '20px'
    }
    return <input
        className="search-input"
        style={searchStyle}
        placeholder={searchText}
        />
};

export default SearchPanel;