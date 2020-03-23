function _createModal(options) {
	const DEFAULT_WIDTH = '600px';
	const modal = document.createElement('div');
	modal.classList.add('vmodal');
	modal.insertAdjacentHTML('afterbegin',`
	<div class="vmodal">
      <div class="vmodal__overlay" data-close="true">
         <div class="vmodal__window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="vmodal__header">
               <span class="vmodal__title">${options.title || 'Title'}</span>
               ${options.closable ? `<span class="vmodal__close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="vmodal__body">
               ${options.content || ''}
            </div>
            <div class="vmodal__footer">
               <button>Ok</button>
               <button>Cancel</button>
            </div>
         </div>
      </div>
    </div>`);
	document.body.appendChild(modal);
	return modal
}
$.modal = function (options) {
	const animSpeed = 200;
	const $modal = _createModal(options);
	let closing = false;
	let destroyed = false;
	const modal = {
		open() {
			if(destroyed) {
				return console.log('Modal is destroyed')
			}
			!closing && $modal.classList.add('open')
		},
		close(){
			closing = true;
			$modal.classList.remove('open');
			$modal.classList.add('hide');
			setTimeout(()=> {
				$modal.classList.remove('hide');
				closing = false
			},animSpeed)
		}
	};
	const listener = event => {
		if (event.target.dataset.close) {
			modal.close()
		}
	};

	$modal.addEventListener('click', listener);

	return Object.assign(modal, {
		destroy() {
			$modal.parentNode.removeChild($modal);
			$modal.removeEventListener('click', listener);
			destroyed = true
		}
	})
};