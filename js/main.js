document.addEventListener('DOMContentLoaded',function(){

    //skrypt naprawiajacy nawigacje (zamyka sie po kliknieciu w cokowiek na mobile)
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });





});