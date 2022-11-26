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
					accountnumber: "Please enter a Account Number",
					state: "Please enter a Account Number",
					nationality: "Please enter a valid Country",
					routingnumber: "Please enter a Routing Number",
                                        email: "Please enter a valid email address"
					
				
				},
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);
