
const PokemonPage = ({newPokemon,id}) => {
    return (<div >
            <button onClick={newPokemon}>START</button>
            {/*<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`} alt={"pokemon"}/>*/}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`} alt={"pokemon"}/>
        </div>

    )

}

export default PokemonPage