AFRAME.registerComponent("play-on-click", {
    schema:{isplaying:{
        type:'boolean', 
        default:false   
    }},
    init: function(){
        this.videoElement=this.el.getAttribute('material').src
        this.onClick = this.onClick.bind(this)
    },
    play: function(){
        window.addEventListener('click',this.onClick())
    },
    onClick: function(evt){
        if(! this.videoElement){
            return
        }
        var isplaying=this.el.getAttribute('play-on-click').isplaying
        this.el.object3D.visible=true
        if(!isplaying){
            this.el.setAttribute('play-on-click',{
                isplaying:true
            })
            this.videoElement.play()
            
        }
        else{
            this.el.setAttribute('play-on-click',{
            isplaying:false
            })
            this.videoElement.pause()
        }
    }
});
