import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime?q=naruto&limit=20`)
			.then(res => res.json())
		SetTopAnime(temp.data && temp.data.slice(0, 5));
		
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime();
	}

	const FetchAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime?q=naruto&limit=20`)
			.then(res => res.json())
			console.log("gggggggggg",temp)

		SetAnimeList(temp.data);
	}

	useEffect(() => {
		GetTopAnime();
		FetchAnime();
	}, []);
	console.log(animeList);
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					animeList={animeList} />
					
			</div>
		</div>
	);
}

export default App;
