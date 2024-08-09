document.addEventListener('DOMContentLoaded', () => {

	// Test
	console.log('Скрипт Работает');

	// Header
	let headerLinks = document.querySelectorAll('.menu-item-has-children > a');
	headerLinks.forEach(function(link) {
		let span = document.createElement('span');
		span.className = 'menu-item-plus';
		span.textContent = '+';
		link.appendChild(span);
	})
	
})