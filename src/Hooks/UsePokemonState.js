import {useEffect, useState} from "react";

const UsePokemonState = () => {
    const [pokemon, setPokemon] = useState(1);

    const getPokemon =  () => {
        const id = Math.floor(Math.random() * 904) + 1;
        setPokemon(id)
    };

    useEffect(() => {
        // getPokemon().then();
    }, []);

    return {getPokemon, pokemon};
}
export default UsePokemonState