let fruits = [
	{id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
	{id: 2, title: 'Апельсины', price: 30, img: 'http://www.vokrugsveta.ru/img/bx/medialibrary/0fe/0fee0d2aaaab55d2e77f7897acc0e112.jpg'},
	{id: 3, title: 'Манго', price: 40, img: 'https://sad-ogorod.net.ua/wp-content/uploads/2018/01/mango-brazil.jpg'},
	{id: 4, title: 'Виноград', price: 35, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/1200px-Table_grapes_on_white.jpg'}
];


const myModal = $.modal({
	title: 'Цена на товар',
	closable: true,
	width: '400px',
	footerButtons: [
		{text: 'Закрыть', type: 'primary', handler()
			{myModal.close()}
		}
	]
});


const toHTML = fruit => `
			<div class="col">
				<div class="card">
					<img style="height: 300px" src=${fruit.img} class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">${fruit.title}</h5>
						<a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
						<a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
					</div>
				</div>
	        </div>`;


function createCardsWithFruits() {
	const html = fruits.map(toHTML).join('')
	document.getElementById('row').innerHTML= html;
}
createCardsWithFruits()

document.addEventListener('click', event => {
	event.preventDefault()
	const btnType = event.target.dataset.btn;
	const id = +event.target.dataset.id;
	const fruit = fruits.find(f => f.id === id)
	if (btnType === 'price') {
		myModal.setContent(`Цена за ${fruit.title}: ${fruit.price}`)
		myModal.open()
	} else if (btnType === 'remove') {
		$.confirm({
			title: 'Вы уверены?',
			content: `Удалить товар: ${fruit.title}?`
		}).then(()=> {
			fruits = fruits.filter(f => f.id != id);
			createCardsWithFruits()
		}).catch(()=> {
			console.log('cancel')
		})
	}
})