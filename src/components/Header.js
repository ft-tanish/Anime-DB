import {useNavigate} from 'react-router-dom'

function Header() {
	const navigate = useNavigate()
	return (
		<header>
			<h1>The<strong> Anime</strong> Database</h1>
			<button onClick={()=>navigate('/wishlist')}> WishList</button>
		</header>
	)
}

export default Header
