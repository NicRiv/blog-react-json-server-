import {useParams, useHistory, Link} from 'react-router-dom'
import useFetch from '../hook/useFetch'

const Entrada = () => {
	const {id} = useParams()
	const {data: entrada, loading, error} = useFetch('http://localhost:8000/entradas/' + id)
	const historial = useHistory()

	const borrarEntrada = () =>{
		if(window.confirm('Borrar entrada?')){
			fetch('http://localhost:8000/entradas/' + entrada.id, {
				method: 'DELETE'
			}).then(()=>{
				historial.push('/')
			})
		}
	}

	return (
		<div>
			{loading && <div className='cargando'/>}
			{error && <div style={{color: 'red'}}>{error}</div>}
			{entrada && (<div className='Entrada'>
							<div className='Ent-op'>
								<Link to={`/editar/${entrada.id}`} className='link'><div>Editar</div></Link>
								<div onClick={borrarEntrada}>Borrar</div>
							</div>
							<h2 className='Ent-tit'>{entrada.titulo}</h2>
							<p className='Ent-usuario'>{entrada.usuario}</p>
							{entrada.editado && <p className='Ent-editado'>{entrada.editado}</p>}
							<p className='Ent-cuerpo'>{entrada.cuerpo}</p>
						</div>)}
		</div>
	)
}

export default Entrada