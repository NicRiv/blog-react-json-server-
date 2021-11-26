import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import useFetch from '../hook/useFetch'
import analizadorEnt from '../hook/analizadorEnt.js'

const Editar = () => {
	const {id} = useParams()
	const historial = useHistory()
	const {data: entrada, loading, error} = useFetch('http://localhost:8000/entradas/' + id)
	const [titulo, setTitulo] = useState('i')
	const [cuerpo, setCuerpo] = useState('i')
	const [cargando, setCargando] = useState(false)

	const alEditar = (e) =>{
		e.preventDefault()
		setCargando(true)
		const fecha = new Date()
		const obtFecha = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}, 
						${fecha.getHours().toString()}:${fecha.getMinutes().toString()}hs.`
		const nuevoCuerpo = analizadorEnt(cuerpo)
		const Entrada = {titulo, cuerpo: nuevoCuerpo, editado: `Última edición: ${obtFecha}`}
 
		fetch('http://localhost:8000/entradas/' + entrada.id, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(Entrada)
		}).then(()=>{
			setCargando(false)
			historial.push(`/entradas/${entrada.id}`)
		})
	}

	//agranda la altura del textarea automaticamente
	const txtarea = document.querySelector('.cuerpo')
	if(txtarea){
		const altura = txtarea.scrollHeight
		txtarea.style.height = `${altura}px` //Actualiza altura
	}

	const txtareaC = document.querySelector('.titulo')
	if(txtareaC){
		const altura = txtarea.scrollHeight
		txtarea.style.height = `${altura}px` //Actualiza altura
	}

	return (
		<div className='Editar'>
			{loading && <div className='cargando'/>}
			{error && <div style={{color: 'red'}}>{error}</div>}
			{entrada && (<div className='Editar-form'>
				<form onSubmit={alEditar}>
					<div className='btn'>
						{!cargando && <button className='boton'>Guardar</button>}
						{cargando && <button className='boton'>Guardando...</button>}
					</div>
					<textarea className='titulo'
						value={titulo === 'i' ? setTitulo(entrada.titulo) : titulo}
						onChange={e => setTitulo(e.target.value)}
					/>
					<textarea id='cuerpo' className='cuerpo'
						value={cuerpo === 'i' ? setCuerpo(entrada.cuerpo) : cuerpo}
						onChange={e => setCuerpo(e.target.value)}
					/>
				</form>
			</div>)}
		</div>
	)
}

export default Editar