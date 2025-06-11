import { createContext,useState } from "react";


export const FavouritesContext = createContext({
    ids: [],
    addFavorite: (id)=>{},
    removeFavorite: (id)=>{},
  




});


function FavoritesContextProvider({children}){
 const [favId, setFavId] = useState([]);

 function addFavorite (id){
    setFavId((currentFavIds)=> [...currentFavIds, id])

 }
 function removeFavorite (id){
     setFavId((currentFavIds)=>currentFavIds.filter((mealId) => mealId !== id))
 }
 
 const value = {
    ids: favId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
 }



    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavoritesContextProvider;