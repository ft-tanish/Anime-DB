import { useState, useEffect } from 'react';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from './components/Wishlist';
import Home from './Home';


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
			
			<BrowserRouter>
			<Header />
			
			<Routes>
			<Route path="/" element={<Home topAnime={topAnime} HandleSearch={HandleSearch} animeList={animeList}/>} />
			<Route path="/wishlist" element={<Wishlist/>} />
			</Routes>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
