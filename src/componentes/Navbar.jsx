import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navbar = () => {
	const [busq, setBusq] = useState('')
	const historial = useHistory()

	const alEnviar = (e) =>{
		e.preventDefault()
		historial.push('/busqueda')
	}

	return (
		<div className='Navbar'>
			<h2>BLOG</h2>
			<div className='Div-Form-busqueda'>
				<form className='Form-busqueda'
					onSubmit={alEnviar}
				>
					<input classtype='search' 
						placeholder='Buscar'
						className='busqueda'
						value={busq}
						onChange={(e)=>setBusq(e.target.value)}
						/>
					<div className='icon-busqueda'/>
				</form>
				<Link to='/' className='Link'>INICIO</Link>
				<Link to='/escribir' className='Link'>ESCRIBIR</Link>
			</div>
		</div>
	)
}

export default Navbar