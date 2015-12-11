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

    $("#mobile-menu img").click(function() {
        $(".mobile-sub-menu").toggleClass('show-mobile-menu');
        return false;
    });

});


$(function() {
    var projects = [{
        value: "toi thay hoa vang tren co xanh",
        name: "Tôi thấy hoa vàng trên cỏ xanh",
        icon: "new-book-icon.png",
        href: "http://maskcodex.com/"
    }, {
        value: "dao cua vat ly",
        name: "Đạo của vật lý",
        icon: "share-book-icon.png",
        href: "http://maskcodex.com/"
    }, {
        value: "bi quyet tan gai dinh",
        name: "Bí quyết tán gái đỉnh",
        icon: "twitter-icon.png",
        href: "http://maskcodex.com/"
    }, {
        value: "vu dep trai",
        name: "MASK Codex Đẹp trai khỏi phải bàn cãi gì hết",
        icon: "youtube-icon.png",
        href: "http://maskcodex.com/"
    }];

    $("#main-search").autocomplete({
            /* {
      source: function( request, response ) {
        $.ajax({
          url: "http://gd.geobytes.com/AutoCompleteCity",
          dataType: "jsonp",
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },*/
            source: projects,
            minLength: 0,

            focus: function(event, ui) {
                $("#main-search").val(ui.item.name);
                return false;
            },
            select: function(event, ui) {
                $("#main-search").val(ui.item.name);
                return false;
            }
        })
        .autocomplete("instance")._renderItem = function(ul, item) {
            return $("<li>")
                .append("<img src='images/" + item.icon + "'>")  // đổi link
                .append("<a href='" + item.href + "'>" + item.name + "</a>")
                .appendTo(ul);
        };
});


function auto_grow(element) {
    element.style.height = "5px";
    content = element.value;
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');
    element.style.height = hiddenDiv.height() + 'px';
}
