const modal_img = document.getElementById('gallery-modal-img');
const gallery_modal = 
	new bootstrap.Modal(
		document.getElementById('gallery-modal')
	);
function onClickGalleryItem(event) {
	event.preventDefault();
	console.log(`Event intercepted for ${event.target.src}`);
	modal_img.src = event.target.src;
	gallery_modal.show();
}

const gallery_items = document.querySelectorAll('.js_gallery-image, #article img, #article_image');
for(item of gallery_items) item.addEventListener('click', onClickGalleryItem);
