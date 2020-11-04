

// * Start * Java Script for Volunteer Registration Form

$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });

// * End * JavaScript for Volunteer Registration Form



function myCreateFunction() {
	var table = document.getElementById("myTable");
	var row = table.insertRow(1);
	var dtype = row.insertCell(0);
	var Quantity = row.insertCell(1);
	var Amount = row.insertCell(2);
	var totalamount = row.insertCell(3);
	var Action = row.insertCell(4);
	
	
	var donationtype = document.getElementById("dtype").value;
	var q = document.getElementById("qty").value;
	var a = document.getElementById("amount").value;
	var z = q * a;
	
	
	
	dtype.innerHTML = donationtype;
	Quantity.innerHTML = q;
	Amount.innerHTML = a;
	totalamount.innerHTML = z;
	Action.innerHTML = "<button onclick=myDeleteFunction(this) class='pull-right btn btn-success'>Cancel</button>";
	document.getElementById("subtotal").innerHTML = sub;
	sub = sub + z;
}
  
  function myDeleteFunction(r) {
	  var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("myTable").deleteRow(i);
	}

  function calculatetotal(){
	var f = document.getElementById("qty").value;
	var g = document.getElementById("amount").value;
	var fg = f * g;
	var divide = (fg / 100) * 6.5;
	var total = fg + divide;

	document.getElementById("totalamount").value = total;
}
	

var g = document.getElementById('fname');
let b = document.getElementById('btn3');


b.addEventListener('click', function(){
	
	var a = document.getElementById("fname").value;
	var b = document.getElementById("lname").value;
	var c = document.getElementById("email").value;
	var d = document.getElementById("postcode").value;
	var e = document.getElementById("dtype").value;
	var f = document.getElementById("qty").value;
	var g = document.getElementById("amount").value;
	var i = document.getElementById("totalamount").value;
	
	var radios = document.getElementsByName('method');
	
	var fg = f * g;
	var divide = (fg / 100) * 6.5;
	var total = fg + divide;
	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
		// do whatever you want with the checked radio
		var w = radios[i].value
		if (w == 1) {w = "Credit Card"} else {w = "Pay with Paypal"};
		// only one radio can be logically checked, don't check the rest
		break;
	  }
	}
	

	
	

	document.getElementById("lfname").innerHTML = a;
	document.getElementById("llname").innerHTML = b;
	document.getElementById("lemail").innerHTML = c;
	document.getElementById("lpostcode").innerHTML = d;
	document.getElementById("ldonationtype").innerHTML = e;
	document.getElementById("lQty").innerHTML = f;
	document.getElementById("lamount").innerHTML = g;
	document.getElementById("lpaymentmethod").innerHTML = w;
	document.getElementById("ltotalamount").innerHTML = total;
})





"use strict";
function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
    
    /*
        Form
    */
    $('.form-wizard fieldset:first').fadeIn('slow');
    
    $('.form-wizard .required').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.form-wizard .btn-next').on('click', function() {
        // let fn = document.getElementById('fname'); 
        
        
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
    	var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
        
        
    	
    	// fields validation
    	parent_fieldset.find('.required').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.form-wizard'), 20 );
	    	});
    	}
    	
    });
    
	// previous step
    $('.form-wizard .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
    	var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.form-wizard'), 20 );
    	});
	});
	

	
	
    // submit
    $('.form-wizard').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('.required').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    });
    
    
});





// image uploader scripts 

var $dropzone = $('.image_picker'),
    $droptarget = $('.drop_target'),
    $dropinput = $('#inputFile'),
    $dropimg = $('.image_preview'),
    $remover = $('[data-action="remove_current_image"]');

$dropzone.on('dragover', function() {
  $droptarget.addClass('dropping');
  return false;
});

$dropzone.on('dragend dragleave', function() {
  $droptarget.removeClass('dropping');
  return false;
});

$dropzone.on('drop', function(e) {
  $droptarget.removeClass('dropping');
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  e.preventDefault();
  
  var file = e.originalEvent.dataTransfer.files[0],
      reader = new FileReader();

  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  };
  
  console.log(file);
  reader.readAsDataURL(file);

  return false;
});

$dropinput.change(function(e) {
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  $('.image_title input').val('');
  
  var file = $dropinput.get(0).files[0],
      reader = new FileReader();
  
  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  }
  
  reader.readAsDataURL(file);
});

$remover.on('click', function() {
  $dropimg.css('background-image', '');
  $droptarget.removeClass('dropped');
  $remover.addClass('disabled');
  $('.image_title input').val('');
});

$('.image_title input').blur(function() {
  if ($(this).val() != '') {
    $droptarget.removeClass('dropped');
  }
});

// image uploader scripts