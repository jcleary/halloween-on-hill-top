(function () {
	var interval = 5000;
	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function init(root) {
		var slides = root.querySelectorAll('.carousel-slide');
		var dotsEl = root.querySelector('.carousel-dots');
		var current = 0;
		var timer = null;
		var dots = [];

		function show(n) {
			current = (n + slides.length) % slides.length;
			for (var i = 0; i < slides.length; i++) {
				var active = i === current;
				slides[i].classList.toggle('is-active', active);
				slides[i].setAttribute('aria-hidden', active ? 'false' : 'true');
				dots[i].classList.toggle('is-active', active);
				dots[i].setAttribute('aria-current', active ? 'true' : 'false');
			}
		}

		function stop() {
			if (timer) { clearInterval(timer); timer = null; }
		}

		function start() {
			if (reduceMotion || timer) { return; }
			timer = setInterval(function () { show(current + 1); }, interval);
		}

		for (var i = 0; i < slides.length; i++) {
			(function (n) {
				var dot = document.createElement('button');
				dot.type = 'button';
				dot.className = 'carousel-dot';
				dot.setAttribute('aria-label', 'Go to photo ' + (n + 1));
				dot.addEventListener('click', function () { show(n); });
				dotsEl.appendChild(dot);
				dots.push(dot);
			})(i);
		}

		root.querySelector('.carousel-prev').addEventListener('click', function () { show(current - 1); });
		root.querySelector('.carousel-next').addEventListener('click', function () { show(current + 1); });
		root.addEventListener('mouseenter', stop);
		root.addEventListener('mouseleave', start);
		root.addEventListener('focusin', stop);
		root.addEventListener('focusout', start);

		show(0);
		start();
	}

	var carousels = document.querySelectorAll('.carousel');
	for (var i = 0; i < carousels.length; i++) { init(carousels[i]); }
})();
