(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
                                        address: "required",
                                        phonenumber: "required",
                                        gender: "required",
					bankname: "required",
                                        accountnumber: "required",
                                        state: "required",
					nationality: "required",
                                        routingnumber: "required",
					email: {
						required: true,
						email: true
						}
					},
				
				messages: {
					name: "Please enter your name",
                                        address: "Please enter your Home Address",
                                        phonenumber: "Please enter your Phone Number",
                                        gender: "Please provide your Gender",
					bankname: "Please enter a valid Bank",
					accountnumber: "Please enter a valid Account Number",
					state: "Enter the state where you reside in",
					nationality: "Please enter a valid Country",
					routingnumber: "Please enter your Routing Number",
                                        email: "Please enter a valid email address"
					
				
				},
				

			});
		}
	};
	contactForm();

})(jQuery);
