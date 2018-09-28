/**
 * Definição da URL base da API
 */
const url = {
	'categories': 'http://localhost:3000/categories',
	'links'     : 'http://localhost:3000/links'
}

/**
 * Salvar dados para a api
 */

const save = (e) => {
	e.preventDefault()
	const $title       = document.querySelector('#title').value
	const $link        = document.querySelector('#link').value
	const $categorie   = document.querySelector('#categorie' ).value
	const $description = document.querySelector('#description').value

	const $error = document.querySelector('.error')

	if($title && $link && $categorie && $categorie !== "-1" && $description){

		$error.classList.remove('active')

		const newLink = {
			'title': $title,
			'link': $link,
			'categorie': $categorie,
			'description': $description
		}
		console.log(newLink)
	}
	else{
		$error.innerHTML = "Preencha corretamente os campos antes de enviar!"
		$error.classList.add('active')
	}
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
 * Função para plotar as categorias quando forem carregadas no select
 * @param {JSON} data
 */
const fillCategories = (data) => {
	const $fillCategories = document.querySelector("#categorie")
	const str = '<option value="-1">Selecione a categoria</option>'
	data.sort()
	const categoriesList = data.length ? (
		data.map((item) => {
			return `<option value="${item}">${item}</option>`
		}).join('')
	) : (
			``
		)
	$fillCategories.innerHTML = str + categoriesList
}

/**
 * Atribuir ações aos botões
 */

document.querySelector('.btn-save').addEventListener('click', (e) => { save(e) })
document.querySelector('.btn-cancel').addEventListener('click', (e) => {
	e.preventDefault();
	window.location = 'index.html'
})

/**
 * Chamada para atribuir as categorias
 */
getCategoriesFromApi()