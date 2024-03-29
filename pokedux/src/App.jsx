import { Col } from 'antd'
import { useEffect } from 'react'
import Searcher from './components/searcher'
import PokemonList from './components/PokemonList'
import logo from './assets/logo.svg'
// import './App.css'
import {getPokemon, getPokemonDetails } from './api'
import { SetPokemons } from './actions/index.js';
import { useDispatch, useSelector } from 'react-redux'


function App() {
  
  const pokemons = useSelector ((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
      dispatch(SetPokemons(pokemonsDetailed));
    };

      fetchPokemons();
  }, [])
  return (
    <>
      <Col span={4} offset={10}>
      <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
      <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </>
  )
}


export default App;
