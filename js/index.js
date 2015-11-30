var hiddenDiv = $(document.createElement('div')),
      content = null;
      hiddenDiv.addClass('textarea-hiddendiv');

$(document).ready(function() {
  $('body').append(hiddenDiv);

  $(".book-content-info-nav li").click(function(event) {
  		var clicked = $(this);
  		var current = clicked.attr('id');
  	  $(".book-content-info-nav li").each(function() {
		  $(this).removeClass("activated");
		});

  	  clicked.addClass("activated");

  	  $(".book-content-info-content").each(function() {
  	  	  console.log($(this).attr('for'));
  	  	  if( $(this).attr('for') !== current) {
  	  	  	$(this).hide();	
  	  	  }else {
  	  	  	$(this).slideDown(100);
  	  	  }
		});
	});
});

function auto_grow(element) {
    element.style.height = "5px";
    content = element.value;
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');
    element.style.height = hiddenDiv.height() +'px';
}

