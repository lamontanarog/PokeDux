
import PokemonCard from './PokemonCard'
import './PokemonList.css'

function PokemonList({ pokemons }) {
    
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default}/>
            })}
        </div>
    );
}

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill(''),
// }

export default PokemonList

//This line of code is for images without pixelated style
// image={pokemon.sprites.other["official-artwork"].front_default} 