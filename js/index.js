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
            if ($(this).attr('for') !== current) {
                $(this).hide();
            } else {
                $(this).slideDown(100);
            }
        });
    });

    $(".user-book-nav li").click(function(event) {
        var clicked = $(this);
        var current = clicked.attr('id');
        $(".user-book-nav li").each(function() {
            $(this).removeClass("activated");
        });

        clicked.addClass("activated");

        $(".list-books").each(function() {
            console.log($(this).attr('for'));
            if ($(this).attr('for') !== current) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

});


$(function() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $("#main-search").autocomplete({
        source: availableTags
    });
});


function auto_grow(element) {
    element.style.height = "5px";
    content = element.value;
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');
    element.style.height = hiddenDiv.height() + 'px';
}
