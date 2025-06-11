import { createContext } from "react";


const FavouritesContext = createContext({
    ids: [],
    addFavorite: (id)=>{},
    removeFavorite: (id)=>{},
  




});


function FavoritesContextProvider({children}){
    return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>
}

export default FavoritesContextProvider;