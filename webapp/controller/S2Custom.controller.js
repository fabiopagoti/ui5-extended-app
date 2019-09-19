sap.ui.controller("ovly.extended.controller.S2Custom", {

	hookChangeBindingParameters: function (mParameters) {

		return {
			select: "Id,Name,Price,MainCategoryName,RatingCount"
		};

	}

});