var hiddenDiv = $(document.createElement('div')),
      content = null;
      hiddenDiv.addClass('textarea-hiddendiv');

$(document).ready(function() {
  $('body').append(hiddenDiv);
});

function auto_grow(element) {
    element.style.height = "5px";
    content = element.value;
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');
    element.style.height = hiddenDiv.height() +'px';
  
}

