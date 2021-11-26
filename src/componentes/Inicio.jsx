import React from 'react'
import useFetch from '../hook/useFetch'
import ListaInicio from './ListaInicio'
import listaAleatoria from '../hook/listaAleatoria.js'

const Inicio = () => {
	const {data: entradas, loading, error} = useFetch('http://localhost:8000/entradas?_sort=id&_order=desc')

	return (
		<div className='Inicio'>
			{loading && <div className='cargando'/>}
			{error && <div style={{color: 'red'}}>{error}</div>}
			{entradas && <ListaInicio entradas={entradas} 
				listaAleatoria={listaAleatoria(entradas.length, 8)} //Devuelve 8 entradas aleatorias
				/>}
		</div>
	)
}

export default Inicio