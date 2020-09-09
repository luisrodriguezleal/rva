import React from 'react';
import CardColumns from './components/CardDeckOne';
import JumbotronOne from './components/JumbotronOne';
import RvaFooter from './components/RvaFooter'

function Rva() {
	return (
		<main>
			<JumbotronOne />
			<CardColumns />
			<RvaFooter />
		</main>
	)
}

export default Rva;