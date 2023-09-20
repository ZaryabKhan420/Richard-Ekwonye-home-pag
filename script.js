
var tl = gsap.timeline();

tl.from("#lowest",{
    onStart:function(){
        $('#lowest').textillate({ 
            in: { effect: 'fadeInUp' , 
                callback:function(){
                    $('#lowest').textillate("out");
                }
                } ,
            out: {effect : 'fadeOutUp' }
        });
    }
})

tl.from("#secondLowest",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#secondLowest').textillate({ 
            in: { effect: 'fadeInUp' , 
                callback:function(){
                    $('#secondLowest').textillate("out");
                }
                } ,
            out: {effect : 'fadeOutUp' }
        });
    }
})

tl.from("#secondTop",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#secondTop').textillate({ 
            in: { effect: 'fadeInUp' , 
                callback:function(){
                    $('#secondTop').textillate("out");
                }
                } ,
            out: {effect : 'fadeOutUp' }
        });
    }
})

tl.from("#top",{
    opacity:0,
    delay:1,
    onStart:function(){
        $('#top').textillate({ 
            in: { effect: 'fadeInUp' , 
                callback:function(){
                    $('#top').textillate("out");
                }
                } ,
        });
    }
})

tl.to(".top-screen",{
    top:"-100%",
    delay:1,
    duration:1,
    ease:"Power4.easeOut"
})

tl.from(".heading > h1",{
    opacity:0,
    onStart:function(){
        $('.heading > h1').textillate({ 
            in: { effect: 'fadeInUp' , } ,
        });
    }
})

tl.from(".header",{
    y:-100,
    duration:0.6,
    opacity:0,
    delay:0.5
})

tl.from(".hero-image > img",{
    height:"0%",
    duration:0.6,
    opacity:0,
    delay:-0.5
})

tl.from(".tag-line > p",{
    opacity:0,
    duration:0.6,
    y:50,
    delay:-0.5
})

tl.from(".tag-line > ion-icon",{
    opacity:0,
    duration:0.6,
    y:-30,
    delay:-0.5
})