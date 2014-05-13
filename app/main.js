(function enableContextmenu(script) {
	'use strict';

	var run = setTimeout.bind(this, script);

	if (document.readyState !== 'complete') {
		window.addEventListener('load', run, true);
	} else {
		run();
	}
})(function () {
	'use strict';

	if (!$) {
		return false;
	}

	var $all = $(window).add(document).add('*');

	var forEach = Array.prototype.forEach;

	if (!$._data) {
		forEach.call($all, function(target) {
			var $target = $(target);
			var events = $target.data('events');

			if (!events) {
				return false;
			} else if (!!events.contextmenu) {
				alert('画像右クリックおｋ！');
				return $target.unbind('contextmenu');
			}
		});
	} else {
		forEach.call($all, function(target) {
			var events = $._data(target, 'events');

			if (!events) {
				return false;
			} else if (!!events.contextmenu) {
				alert('画像右クリックおｋ！');
				return $(target).unbind('contextmenu');
			}
		});
	}

});
