{
    let backtotop = document.getElementById("backtop");
    window.onscroll = function() {scrollfunction()};
    function scrollfunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backtotop.style.display = "block";
        }
        else{
            backtotop.style.display = "none"
        }
    };
    
    function topfunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

{
    let scrollmap = document.getElementById("ruka");
    function mapfunction() {
        window.scrollTo(0, 720)
    }

}

{
    let scrollmap = document.getElementById("kontaqti");
    function contactfunction() {
        window.scrollTo(0, 1484)
    }

}

{
    let scrollmap = document.getElementById("shesaxeb");
    function aboutfunction() {
        window.scrollTo(0, 2220)
    }
}