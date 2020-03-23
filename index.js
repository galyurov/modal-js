const myModal = $.modal({
	title: 'My Modal',
	closable: true,
	content: `
		<h4>Modal is working</h4>
		<p>Lorem ipsum dolor sit amet.</p>
	`,
	width: '400px',
	footerButtons: [
		{text: 'Ok', type: 'primary', handler()
			{myModal.close()}
		},
		{text: 'Cancel', type: 'danger', handler()
			{myModal.close()}
		}
	]
});