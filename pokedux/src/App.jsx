import { Col } from 'antd'
import {connect} from 'react-redux';
import { useEffect, useState } from 'react'
import Searcher from './components/searcher'
import PokemonList from './components/PokemonList'
import logo from './assets/logo.svg'
// import './App.css'
import getPokemon from './api'
import { SetPokemons as setPokemonsActions } from './actions/index.js';


function App({pokemons, setPokemons}) {
  


  useEffect(() => {
    const fetchPokemons = async() =>{
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
      fetchPokemons();
  }, [setPokemons])
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

const mapStateToProps = (state) => ({
  pokemons:state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons : (value) => dispatch(setPokemonsActions(value)),
}) ;

export default connect(mapStateToProps,mapDispatchToProps)(App);
