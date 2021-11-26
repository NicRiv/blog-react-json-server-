import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const ListaBusqueda = ({entradas}) => {
	const [mas, setMas] = useState(10)
	
	return (
		<div className='resultados'>
			{entradas.length === 0 && <p>No hay resultados</p>}
			{entradas.length !== 0 && <p>Se encontraron {entradas.length} resultados.</p>}			
			{
				entradas.map((entradas, index) => (
						(index < mas) && <div className='list-ent-busq' key={entradas.id}>
							<Link to={`/entradas/${entradas.id}`} className='link'>
								<h4 className='titulo'>{entradas.titulo}</h4>
								<p className='usuario'>{entradas.usuario}</p>
								<p className='cuerpo'>{entradas.cuerpo}</p>
								{entradas.palabrasClave && <p className='pClave'>#{entradas.palabrasClave}</p>}
							</Link>
						</div>					
				))
			}
			{(mas < entradas.length) ?
				<div className='masResultados-act' 
					onClick={() => setMas(mas + 10)}
				>Más resultados</div>
				:
				(entradas.length !== 0 && <div className='masResultados-inact'>No hay más resultados</div>)			
			}			
		</div>
	)
}

export default ListaBusqueda