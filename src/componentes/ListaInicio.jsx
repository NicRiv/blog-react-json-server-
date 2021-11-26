import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const ListaInicio = ({entradas, listaAleatoria}) => {
	const [pag, setPag] = useState(1)

	const clic1 = () =>{
		setPag(1)
	}
	const clic2 = () =>{
		setPag(2)
	}

	let pag1 = []
	let pag2 = []
	
	const val = listaAleatoria

	//obtiene 4 entradas, que luego van a ser mostradas
	entradas.map((en, index) => {
			if((index+1) === val[0] ||
			   (index+1) === val[1] || 
			   (index+1) === val[2] || 
			   (index+1) === val[3]){
					pag1.push(en)
			} else if((index+1) === val[4] ||
					  (index+1) === val[5] ||
					  (index+1) === val[6] ||
					  (index+1) === val[7]){
					pag2.push(en)
			}
			return 0
		})

	return (
		<div className='ListaInicio'>
			<div className='visor'>
				{pag === 1 &&
					pag1.map((entradas) =>(
						<div className='list-ent' key={entradas.id}>
							<Link to={`/entradas/${entradas.id}`} className='link-ent'>
								<h4 className='titulo'>{entradas.titulo}</h4>
								<p className='usuario'>{entradas.usuario}</p>
								<p className='cuerpo'>{entradas.cuerpo}</p>
								{entradas.palabrasClave && <p className='pClave'>#{entradas.palabrasClave}</p>}
							</Link>
						</div>
					))
				}
				{pag === 2 &&
					pag2.map((entradas) =>(
						<div className='list-ent' key={entradas.id}>
							<Link to={`/entradas/${entradas.id}`} className='link-ent'>
								<h4 className='titulo'>{entradas.titulo}</h4>
								<p className='usuario'>{entradas.usuario}</p>
								<p className='cuerpo'>{entradas.cuerpo}</p>
								{entradas.palabrasClave && <p className='pClave'>#{entradas.palabrasClave}</p>}
							</Link>
						</div>
					))
				}
			</div>
			<div className='indice'>
				<div className='indice1'
					onClick={() => clic1()}
					>{pag === 1 && <div className='indice1-act'/>}</div>
				<div className='indice2'
					onClick={() => clic2()}
					>{pag === 2 && <div className='indice2-act'/>}</div>
			</div>
		</div>
	)
}

export default ListaInicio