import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import analizadorEnt from '../hook/analizadorEnt.js'

const Escribir = () => {
	const [titulo, setTitulo] = useState('')
	const [usuario, setUsuario] = useState('')
	const [cuerpo, setCuerpo] = useState('')
	const [cargando, setCargando] = useState(false)
	const historial = useHistory()

	const alEnviar = (e) =>{
		e.preventDefault()
		setCargando(true)
		const nuevoCuerpo = analizadorEnt(cuerpo)
		const entrada = {titulo, usuario: '@'+usuario, cuerpo: nuevoCuerpo}
		//Crear:
		fetch('http://localhost:8000/entradas', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(entrada)
		}).then(()=>{
			setCargando(false)
			//Redirigir a la pagina de la publicacion creada
			fetch('http://localhost:8000/entradas').then(res =>{
				return res.json()
			}).then(data=>{
				// console.log(data[data.length - 1].id) //Devuelve id del ultimo post
				historial.push(`/entradas/${data[data.length - 1].id}`)
			})
		})
	}

	return (
		<div className='Escribir'>
			{cargando && <div className='cargando'/>}
			<form onSubmit={alEnviar}>
				<label>Titulo</label>
				<input type='text' 
					required
					value={titulo}
					onChange={e => setTitulo(e.target.value)}
					/>
				<label>Usuario</label>
				<input type='text' 
					required
					value={usuario}
					onChange={e => setUsuario(e.target.value)}
					/>
				<textarea required
					value={cuerpo}
					onChange={e => setCuerpo(e.target.value)}
				/>
				{!cargando && <button className='boton'>Crear</button>}
				{cargando && <button className='boton'>Agregando...</button>}
			</form>
		</div>
	)
}

export default Escribir