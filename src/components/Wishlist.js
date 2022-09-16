import React, { useState,useEffect} from 'react'
import WishListCard from './WishListCard';

const Wishlist = (props) => {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')));
    
    function getUniqueItems(items) {
        const uniqueIds = new Set(items.map((item) => item.mal_id))
      
        const itemsWithUniqueIds = [...uniqueIds].map(id => items.find(item => item.mal_id === id)).filter(Boolean)
      
        return itemsWithUniqueIds
      }
useEffect(()=>{
    setWishlist(getUniqueItems(wishlist))
},[])

const myStyle = {
    padding: "30px",
    display: "flex",
    justifyContent : 'space-between',
    
}
     
  return (
    <div style={myStyle}>
        {
            wishlist ? wishlist.map((data,id)=>{
                return(
                    <WishListCard
						anime={data}
						key={id} 
						
						/>
                )
            }):

            <div>Nothing in wishlist, please add something</div>
        }
    </div>
  )
}

export default Wishlist