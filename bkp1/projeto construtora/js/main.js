$(function(){
           //equivalente ao load da nossa pagina 
    $(".ttp").tooltip();
    
    $(".ppv").popover({
        
        title:"Titulo Popover",
        trigger : 'hover focus'
    });
    
    $(".btnjs").button();
    
    $("#troca-estado").click(function(){
        var btn = $(this);
        btn.button("loading");
        
        setTimeout(function(){
            btn.button("reset")
        },3000);
        
                             });
    
        });

$(function(){
    $('#menu-navegacao a').find('a').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname
           == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $ ('[name=' + this.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                },1000);
                return false;
            }
        }
    });
    
    
});