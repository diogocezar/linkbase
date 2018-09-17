/**
 * Definição da URL base da API
 */
const url = {
	'categories': 'http://localhost:3000/categories',
	'links'     : 'http://localhost:3000/links'
}

/**
 * Função que recupera os dados da API por fetch das categorias
 */
const getCategoriesFromApi = () => {
	fetch(url.categories, { method: 'get' })
		.then((response) => {
			response.text()
				.then((result) => {
					fillCategories(JSON.parse(result))
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
					fillLinks(JSON.parse(result));
				})
		})
}

/**
 * Função para plotar as categorias quando forem carregadas
 * @param {JSON} data
 */
const fillCategories = (data) => {
	const $fillCategories = document.querySelector(".fill-categories")
	data.sort()
	const categoriesList = data.length ? (
		data.map((item) => {
			return `<li>${item}</li>`
		}).join('')
	) : (
			`<li class='collection-item'>Não existem categorias.</li>`
		)
	$fillCategories.innerHTML = categoriesList
}

getCategoriesFromApi()