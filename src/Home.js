import React from 'react'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
const Home = (props) => {
  return (
    <div className="content-wrap">
				<Sidebar 
					topAnime={props.topAnime} />
				<MainContent
					HandleSearch={props.HandleSearch}
					animeList={props.animeList} />
					
			</div>
  )
}

export default Home