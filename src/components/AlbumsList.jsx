import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import AlbumCard from './AlbumCard';
import { BASE_URL, headers } from "../services"



export default function AlbumList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const res = await axios.get(BASE_URL, {
                headers,

            });
            setAlbums(res.data.records)
        };
        fetchAlbums();
    }, [])

    if (albums.length === 0) {
        return <Loader />
    }



    return (
        <div>
            {albums.map((album) => {
                return <AlbumCard album={album} />
            })}
        </div>
    )
}


// state for the albums
// useEffect for render
// fetch axios request
// render view for all albums 
