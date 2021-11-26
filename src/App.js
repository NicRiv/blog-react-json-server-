import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import Escribir from './componentes/Escribir'
import Entrada from './componentes/Entrada'
import Editar from './componentes/Editar'
import Busqueda from './componentes/Busqueda'


const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='App-cont'>
					<Switch>
						<Route exact path='/'>
							<Inicio />
						</Route>
						<Route exact path='/escribir'>
							<Escribir />
						</Route>
						<Route exact path='/entradas/:id'>
							<Entrada />
						</Route>
						<Route exact path='/editar/:id'>
							<Editar />
						</Route>
						<Route exact path='/busqueda'>
							<Busqueda />
						</Route>

						<Route path='*'>
							<div className='pag404'>
								<h1>Error 404</h1>
								<div className='pag404-icon'>&#10006; &#128195;</div>
							</div>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App