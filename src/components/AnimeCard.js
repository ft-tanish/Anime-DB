import React, { useState } from 'react'

function AnimeCard({anime}) {
	const [wishlist1, setWishlist] = useState([]);
	function Addtowishlist(){
		setWishlist([...wishlist1, anime])
		localStorage.setItem("wishlist", JSON.stringify(wishlist1)); //store colors
	} 
	console.log(wishlist1)
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.images.jpg.image_url} 
						alt="Anime" />
				</figure>
				<h3>{ anime.title }</h3>
				
			</a>
			<button onClick={Addtowishlist}>Add to wishlist</button>
		</article>
	)
}

export default AnimeCard
