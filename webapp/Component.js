jQuery.sap.declare("ovly.extended.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "ovly.extensible",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on cloud
	// Remove the url parameter once your application is deployed to productive account
	url: jQuery.sap.getModulePath("ovly.extended") + "/parent"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.ovly.extensible.Component.extend("ovly.extended.Component", {
	metadata: {
		manifest: "json"
	}
});