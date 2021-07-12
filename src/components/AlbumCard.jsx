import React from 'react'
import { Link } from 'react-router-dom';

export default function AlbumCard({ album }) {
    const{ id, fields, } = album;
    return (
        <Link to={`/album/${id}`}>
        <div>
            <h3>{fields.name}</h3>
            <img src={fields.coverArt} />
        </div>
        </Link>
    )
}
