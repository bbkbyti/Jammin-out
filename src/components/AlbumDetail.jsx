import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import Loader from './Loader';
import { BASE_URL, headers } from "../services"



export default function AlbumDetail() {
    const [album, setAlbum] = useState({});
    const { id } = useParams();

useEffect(() => {
    const fetchAlbum = async () => {
        const URL = `${BASE_URL}/${id}`;
        const res = await axios.get(URL, { headers });
        setAlbum(res.data)
    }
    fetchAlbum();
}, []);

if(!album.fields) {
    return <Loader />
}

    return <div>{album.fields?.name}</div>
    
}
