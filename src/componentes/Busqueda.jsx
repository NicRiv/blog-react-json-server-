import React, {useState, useEffect} from 'react'
import useFetch from '../hook/useFetch'
import ListaBusqueda from './ListaBusqueda'

const Busqueda = () => {
	const [obtBusqueda, setObtBusqueda] = useState('')
	const [orden, setOrden] = useState('desc')
	const [url, setUrl] = useState(`http://localhost:8000/entradas?_sort=id&_order=${orden}`)
	const {data: entradas, loading, error} = useFetch(url)

	const formBusqueda = document.querySelector('.Form-busqueda')
	const inputBusqueda = document.querySelector('.busqueda')	

	//Obtiene lo ingresado en el input busqueda
	if(formBusqueda){
		formBusqueda.addEventListener('submit', (e) =>{
			e.preventDefault()
			setObtBusqueda(inputBusqueda.value)
		})
	}

	useEffect(()=>{
		if(inputBusqueda){ 
			setObtBusqueda(inputBusqueda.value)
			if(obtBusqueda){
				setUrl(`http://localhost:8000/entradas?_sort=id&_order=${orden}&q=${obtBusqueda}`)	
			}
			else if(obtBusqueda === ''){
				setUrl(`http://localhost:8000/entradas?_sort=id&_order=${orden}`)	
			}
			// else if(obtBusqueda[0] === '@'){
			// 	//Esta buscando usuario
			// 	setUrl(`http://localhost:8000/entradas?_sort=id&_order=${orden}&usuario=${obtBusqueda}`)
			// }
			// else if(obtBusqueda[0] === '*'){
			// 	//Esta buscando palabras clave
			// 	setUrl(`http://localhost:8000/entradas?_sort=id&_order=${orden}&q=${obtBusqueda}`)
			// }
		}
	}, [obtBusqueda, orden, inputBusqueda])

	//Establece orden
	const asc = () =>{
		setOrden('asc')
	}
	const desc = () =>{
		setOrden('desc')
	}

	return (<>
		{loading && <div className='cargando'/>}
		{error && <div style={{color: 'red'}}>{error}</div>}
		<div className='pag-busqueda'>
			<h2>Resultados</h2>
			<button onClick={desc}>Último creado</button>
			<button onClick={() => asc()}>Primero creado</button>
			{entradas && <ListaBusqueda entradas={entradas}/>}
		</div>
	</>)
}

export default Busqueda