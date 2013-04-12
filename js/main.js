/*global FPSMeter */
jQuery(function ($) {
	'use strict';

	var windowSpy = new $.Espy(window);

	// ==========================================================================
	//   Header example
	// ==========================================================================
	(function () {
		var $frame = $('#example');

		// FPSMeters
		FPSMeter.defaults.top = 0;
		FPSMeter.defaults.left = 'auto';
		FPSMeter.defaults.heat = 1;
		FPSMeter.defaults.graph = 1;
		var meters = [
			new FPSMeter($frame[0], {
				right: '50%',
				margin: '0 30px 0 0'
			}),
			new FPSMeter($frame[0], {
				right: '50%',
				margin: '0 200px 0 0',
				theme: 'light'
			}),
			new FPSMeter($frame[0], {
				left: '50%',
				margin: '0 0 0 30px',
				theme: 'colorful'
			}),
			new FPSMeter($frame[0], {
				left: '50%',
				margin: '0 0 0 200px',
				theme: 'transparent'
			})
		];

		// Simulated FPS
		var frameID;
		function tick() {
			frameID = setTimeout(tick, Math.max(Math.sin(+new Date() * 0.0015) * 50 + 50, 16));
			meters[0].tick();
			meters[1].tick();
			meters[2].tick();
			meters[3].tick();
		}
		tick();

		// Toggle buttons
		$frame.on('click', 'button[data-toggle]', function () {
			var $this = $(this);
			var prop = $this.data('toggle');
			var $icon = $this.find('i');
			var val = !meters[0].options[prop];
			$icon[0].className = val ? 'icon-check' : 'icon-check-empty';
			for (var i = 0; i < meters.length; i++) {
				meters[i].set(prop, val);
			}
		});

		// Pause meters rendering when not in view
		windowSpy.add($frame[0], function (entered) {
			for (var i = 0; i < meters.length; i++) {
				meters[i][entered ? 'resume' : 'pause']();
			}
		});
	}());
});