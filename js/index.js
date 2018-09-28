/**
 * Definição da URL base da API
 */
const url = {
	'categories': 'http://localhost:3000/categories',
	'links'     : 'http://localhost:3000/links'
}

let categories = []
let links      = []

/**
 * Função que recupera os dados da API por fetch das categorias
 */
const getCategoriesFromApi = () => {
	fetch(url.categories, { method: 'get' })
		.then((response) => {
			response.text()
				.then((result) => {
					categories = JSON.parse(result)
					fillCategories()
				})
		})
}

/**
 * Função que recupera os dados da API por fetch dos links
 */
const getLinksFromApi = () => {
	fetch(url.links, { method: 'get' })
		.then((response) => {
			response.text()
				.then((result) => {
					links = JSON.parse(result)
					fillLinks()
				})
		})
}

/**
 * Função para plotar as categorias quando forem carregadas
 */
const fillCategories = () => {
	const $fillCategories = document.querySelector(".fill-categories")
	categories.sort()
	const categoriesList = categories.length ? (
		categories.map((item) => {
			return `<li>${item}</li>`
		}).join('')
	) : (
			`<li class='collection-item'>Não existem categorias.</li>`
		)
	$fillCategories.innerHTML = categoriesList
}

/**
 * Função para preencher os links dinamicamente
 */

const fillLinks = () => {
	console.log(links)
	const $fillLinks = document.querySelector('.fill-links')
	const linksList = links.length ? (
		links.map((item) => {
			return `<div class="boxitem">
						<h2>${item.title}</h2>
						<h3>${item.categorie}</h3>
						<a href="${item.link}">${item.link}</a>
						<p>${item.description}</p>
						<div class="boxcontrols">
							<button class="btn-edit">Editar</button>
							<button class="btn-delete">Excluir</button>
						</div>
					</div>`;
		})
	) : (
		`<h1>Não existem links!</h1>`
	)
	$fillLinks.innerHTML = linksList
}

getCategoriesFromApi()
getLinksFromApi()