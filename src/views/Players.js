import axios from "axios";
import { useState } from 'react';

let Players = () => {

    let getPlayerdata = async () => {
        let data = await axios.get('https://foxes78api.herokuapp.com/api/players');
        return data.status === 200 ? data.data : null
    }
    let loadPlayerdata = async () => {
        let data = await getPlayerdata();
        console.log(data);
        setPlayers(data);
    }
    const [players, setPlayers] = useState(() => { loadPlayerdata(); });

    return (
        <div>
            <h1>{}</h1>
            {/* <div className="card">
                        <img src="{{ character.image }}" className="card-img-top" alt="...">
                    <div className="card-body">
                        <h5 className="card-title">{{ character.name }}</h5>
                        <p className="card-text">{{ character.description }}</p>
                        <p className="card-text">Superpowers: {{ character.super_power }}</p>
                        <p className="card-text"><small className="text-muted">{{ character.comics_appeared_in }} Comic Appearances</small></p>
                    </div>
                    </div> */}
        </div>
    )
}

export default Players;