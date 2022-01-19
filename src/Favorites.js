import React, { useState } from 'react';
import storage from './localStorage';

export default () =>{
    let Storage = new storage()
    let [favs,setFavs] = useState(Storage.getVideosJson())
    return(
        <div>
            Favorites
        </div>
    )
}