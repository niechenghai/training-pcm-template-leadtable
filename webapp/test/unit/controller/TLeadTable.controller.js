/*global QUnit*/

sap.ui.define([
	"leadtable/controller/TLeadTable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TLeadTable Controller");

	QUnit.test("I should test the TLeadTable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
