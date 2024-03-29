
import PokemonCard from './PokemonCard'
import './PokemonList.css'

function PokemonList({ pokemons }) {
    
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} photo={pokemon.url} />
            })}
        </div>
    );
}

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill(''),
// }

export default PokemonList