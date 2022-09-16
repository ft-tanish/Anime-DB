import React from 'react'

function WishListCard(props) {
  return (
    <article className="anime-card">
			<a 
				href={props.anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={props.anime.images.jpg.image_url} 
						alt="Anime" />
				</figure>
				<h3>{ props.anime.title }</h3>
				
			</a>
		</article>
  )
}

export default WishListCard