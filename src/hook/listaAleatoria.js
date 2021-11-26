const listaAleatoria = (entrada, cantidad) =>{
	//Devuelve numero aleatorio en un rango
	const aleatorio = (min, max) =>{
		return Math.floor((Math.random() * (max - min + 1)) + min)
	}

	const total = entrada
	const secciones = cantidad
	const aumento = Math.floor(total / secciones) 
	const elemento = []
	const ent = []

	// // 1
	// elemento[0] = 1
	// elemento[1] = aumento
	// // 2
	// elemento[2] = aumento + 1
	// elemento[3] = aumento * 2
	// // 3
	// elemento[4] = (aumento * 2) + 1
	// elemento[5] = aumento * 3
	// // 4
	// elemento[6] = (aumento * 3) + 1
	// elemento[7] = total

	for(let i = 0; i < secciones; i++){
		if(i !== secciones-1){
			elemento[i*2] = (aumento * i) + 1 	//Pares para el minimo
			elemento[(i*2) + 1] = aumento * (i + 1)		//Impares para el maximo
		} else {
			elemento[i*2] = (aumento * i) + 1
			elemento[(i*2) + 1] = total
		}
	}

	// ent[0] = aleatorio(elemento[0], elemento[1])
	// ent[1] = aleatorio(elemento[2], elemento[3])
	// ent[2] = aleatorio(elemento[4], elemento[5])
	// ent[3] = aleatorio(elemento[6], elemento[7])

	for(let i = 0; i < secciones; i++){
		ent[i] = aleatorio(elemento[i*2], elemento[(i*2) + 1])
	}

	return ent
}

export default listaAleatoria