import React, {useState} from 'react';

export default function App(){
	const [nome, setNome] = useState('');
	/*const [ pessoa, setPessoa] = useState({nome: 'thyago', idade: 20})*/


	return (
		<>
			Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)} />
			<br />
			Olá {nome}
		</>
	);
}
