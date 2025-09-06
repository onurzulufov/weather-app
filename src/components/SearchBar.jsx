import React, { useRef } from 'react'
import search_icon from '../assets/search.png'
import '../index.css'

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef()

  const handleSearch = () => {
    onSearch(inputRef.current.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onSearch(inputRef.current.value)
    }
  }

  return (
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder="Enter City Name" onKeyDown={handleKeyDown} />
      <img src={search_icon} alt="search" onClick={handleSearch} />
    </div>
  )
}

export default SearchBar
