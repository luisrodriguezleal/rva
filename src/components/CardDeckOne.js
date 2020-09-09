import React from 'react';
import ReactLogo from '../assets/react.png';
import VueLogo from '../assets/vue.png';
import AngularLogo from '../assets/angular.png';

class CardDeckOne extends React.Component {
	render () {
		return (
			<div> 
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<img className="card-img-top" src={ReactLogo} alt="reactlogo"/>
							<div className="text-center border-bottom my-4">
								<h4 className="card-title">ReactJS</h4>
							</div>
							<p className="card-text text-center">Librería para construir interfaces usando JavaScript puro, diseñada por Facebook</p>
							<div className="card">
								<div className="card-body">
									<h2 className="h2 card-title">Instalación</h2>
									<span className="card-text">
										Instala React mediante npm
									</span>
									<p className="card-text">
										> <code>npm install -g</code> create-react-app
									</p>
									<span className="card-text">
										Crea un nuevo proyecto
									</span>
									<p className="card-text">
										> <code>create-react-app </code>mi-proyecto
									</p>
								</div>
							</div>
							<div className="card-text my-4">
								<table className="table">
									<tr>
										<th scope="row">Fundador: </th>
										<td>Facebook</td>
									</tr>
									<tr>
										<th scope="row">Lanzamiento: </th>
										<td>Marzo, 2013</td>
									</tr>
									<tr>
										<th scope="row">Para Desarrollar: </th>
										<td>Desarollar SPA y aplicaciones móviles</td>
									</tr>
									<tr>
										<th scope="row">Perfecto para: </th>
										<td>Aplicaciones Webs modernas y apps nativas renderizadas para iOS y Android </td>
									</tr>
									<tr>
										<th scope="row">Escrito en: </th>
										<td>JavaScript</td>
									</tr>
									<tr>
										<th scope="row">Modelo: </th>
										<td>Basado en el DOM (Document Object Model)</td>
									</tr>
									<tr>
										<th scope="row">Lenguaje de uso: </th>
										<td>JSX - JavaScript XML</td>
									</tr>
									<tr>
										<th scope="row">Aprendizaje: </th>
										<td>Gracias a su sencilla sintaxis es fácil aprender a manejar esta librería</td>
									</tr>
									<tr>
										<th scope="row">Popularidad: </th>
										<td>Alrededor de 97000+ stars y contando</td>
									</tr>
									<tr>
										<th scope="row">Casos de uso: </th>
										<td>Usado por Facebook, Uber, Reddit, PayPal, Twitter...</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<img className="card-img-top" src={VueLogo} alt="vuelogo"/>
							<div className="text-center border-bottom my-4">
								<h4 className="card-title">VueJS</h4>
							</div>
							<p className="card-text text-center">Framework ideal para el desarrollo web con una fácil estructura en HTML y JavaScript</p>
							<div className="card">
								<div className="card-body">
									<h2 className="h2 card-title">Instalación</h2>
									<span className="card-text">
										Instala Vue mediante npm
									</span>
									<p className="card-text">
										> <code>npm install -g</code> @vue/cli
									</p>
									<span className="card-text">
										Crea un nuevo proyecto
									</span>
									<p className="card-text">
										> <code>vue create </code>mi-proyecto
									</p>
								</div>
							</div>
							<div className="card-text my-4">
								<table className="table">
									<tr>
										<th scope="row">Fundador: </th>
										<td>Evan You</td>
									</tr>
									<tr>
										<th scope="row">Lanzamiento: </th>
										<td>Febrero, 2014</td>
									</tr>
									<tr>
										<th scope="row">Para Desarrollar: </th>
										<td>Páginas web avanzadas</td>
									</tr>
									<tr>
										<th scope="row">Perfecto para: </th>
										<td>Para el total desarrollo de Páginas Web Simples (SPA)</td>
									</tr>
									<tr>
										<th scope="row">Escrito en: </th>
										<td>JavaScript</td>
									</tr>
									<tr>
										<th scope="row">Modelo: </th>
										<td>Basado en el DOM (Document Object Model)</td>
									</tr>
									<tr>
										<th scope="row">Lenguaje de uso: </th>
										<td>JavaScript y HTML</td>
									</tr>
									<tr>
										<th scope="row">Aprendizaje: </th>
										<td>Fácil y rápido, ya que sus métodos se llevan a cabo con puto HTML y JavaScript</td>
									</tr>
									<tr>
										<th scope="row">Popularidad: </th>
										<td>Va a la par con React y Angular, hecho que complica los programadores a elegir una herramienta</td>
									</tr>
									<tr>
										<th scope="row">Casos de uso: </th>
										<td>Usado por Alibaba, GitLab...</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<img className="card-img-top" src={AngularLogo} alt="angularlogo"/>
							<div className="text-center border-bottom my-4">
								<h4 className="card-title">AngularJS</h4>
							</div>
							<p className="card-text text-center">Otra Framework por si las anteriores no te convencen y te gusta TypeScript</p>
							<div className="card">
								<div className="card-body">
									<h2 className="h2 card-title">Instalación</h2>
									<span className="card-text">
										Instala Angular mediante npm
									</span>
									<p className="card-text">
										> <code>npm install -g</code> @angular/cli
									</p>
									<span className="card-text">
										Crea un nuevo proyecto
									</span>
									<p className="card-text">
										> <code>ng new </code>mi-proyecto
									</p>
								</div>
							</div>
							<div className="card-text my-4">
								<table className="table">
									<tr>
										<th scope="row">Fundador: </th>
										<td>Google</td>
									</tr>
									<tr>
										<th scope="row">Lanzamiento: </th>
										<td>Septiembre, 2016</td>
									</tr>
									<tr>
										<th scope="row">Para Desarrollar: </th>
										<td>Aplicaciones nativas, híbridas y webapps</td>
									</tr>
									<tr>
										<th scope="row">Perfecto para: </th>
										<td>La escalabilidad de proyectos y de mucho contenido</td>
									</tr>
									<tr>
										<th scope="row">Escrito en: </th>
										<td>TypeScript</td>
									</tr>
									<tr>
										<th scope="row">Modelo: </th>
										<td>Se basa en MVC (Model View Controller)</td>
									</tr>
									<tr>
										<th scope="row">Lenguaje de uso: </th>
										<td>TypeScript</td>
									</tr>
									<tr>
										<th scope="row">Aprendizaje: </th>
										<td>El más complicado entre los tres</td>
									</tr>
									<tr>
										<th scope="row">Popularidad: </th>
										<td>Menos que React pero más que Vue</td>
									</tr>
									<tr>
										<th scope="row">Casos de uso: </th>
										<td>Usado por Google, Forbes, Wix ...</td>
									</tr>
								</table>
							</div>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardDeckOne;