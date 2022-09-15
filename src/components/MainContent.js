import React, { useState } from 'react'
// import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';

function MainContent(props) {
	const [search, SetSearch] = useState("");
	return (
		<main>
			<div className="main-head">
				
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={search}
						onChange={e => SetSearch(e.target.value)}/>
			
			</div>
			<div className="anime-list">
				{/* {console.log(props.animeList)} */}
				{props.animeList && 
				props.animeList.filter((filterData) =>  filterData.title.toLowerCase().includes(search.toLowerCase()) && filterData )
                .map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

export default MainContent
