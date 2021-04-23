sap.ui.define([], function () {
	"use strict";
	return {
	
		toLocalDate: function(date) {
			return date && date.toLocaleDateString();
		},

		ranking: function (rating) {
			return rating/10;
		}


	};
});