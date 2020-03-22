function _createModal(options) {
	const modal = document.createElement('div');
	modal.classList.add('vmodal');
	modal.insertAdjacentHTML('afterbegin',`<div class="vmodal">
      <div class="vmodal__overlay">
         <div class="vmodal__window">
            <div class="vmodal__header">
               <span class="vmodal__title">Modal title</span>
               <span class="vmodal__close">&times;</span>
            </div>
            <div class="vmodal__body">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda aut debitis distinctio dolore eveniet iusto magnam magni maiores omnis porro provident, quod quos rem repellat repudiandae tempore! Doloribus, quaerat?</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda aut debitis distinctio dolore eveniet iusto magnam magni maiores omnis porro provident, quod quos rem repellat repudiandae tempore! Doloribus, quaerat?</p>
            </div>
            <div class="vmodal__footer">
               <button>Ok</button>
               <button>Cancel</button>
            </div>
         </div>
      </div>
   </div>`}
$.modal = function (options) {
	return {
		open() {},
		close(){},
		destroy(){}
	}
}