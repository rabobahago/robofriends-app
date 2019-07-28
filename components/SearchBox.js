import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className = 'pa2'>
		<input className = 'tc bg-light-green'
		type = 'search' 
		placeholder ='search robots'
		onChange = {searchChange} 
		/>
		</div>
		)
} 
export default SearchBox;