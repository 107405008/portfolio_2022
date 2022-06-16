window.addEventListener('load', function(event) {
    document.getElementById("loader").className = 'loader';
    setTimeout(function(){
        document.getElementById("loader").className = 'loader fadeout';
    },1000)}, true);

