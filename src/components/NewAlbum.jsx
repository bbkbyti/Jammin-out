import { useState } from 'react';
import axios from 'axios';
import { BASE_URL, headers } from '../services';
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';

const defaultForm = {
    name: "",
    artistName: "",
    genre: "",
    coverArt: "",
    year: "",
    trackList: "",
}

export default function NewAlbum() {
    const [input, setInput] = useState(defaultForm);
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput(prevInput => ({
            ...prevInput,
            [name]: value,
        }));
    };

    console.log(input.name)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(BASE_URL, { fields: input },
            { headers })

    }

    toast("created")
    history.push('/all-albums')
    return (
        <div>
            <h3>Add a new Album</h3>
            <form onSubmit={handleSubmit}>
                <label>Album Name</label>
                <br />
                <input name="name"
                    value={input.name}
                    placeholder="album name"
                    onChange={handleChange} />
                <br />

                <label>Artist Name</label>
                <br />
                <input name="artistName"
                    value={input.artistName}
                    placeholder='artist name'
                    onChange={handleChange} />
                <br />

                <label>Genre</label>
                <br />
                <input name="genre"
                    value={input.genre}
                    onChange={handleChange} />
                <br />

                <label>Cover Art</label>
                <br />
                <input name="coverArt"
                    value={input.coverArt}
                    onChange={handleChange} />
                <br />

                <label>Release Date</label>
                <br />
                <input name="year"
                    value={input.year}
                    onChange={handleChange} />
                <br />

                <label>Track List</label>
                <br />
                <input name="" />
                <br />
                <br />
                <button>Create new Album</button>
                <br />

            </form>
        </div>

    )

}

