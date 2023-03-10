AFRAME.registerComponent("comic",{
    init:function(){
      this.placesContainer = this.el;
      this.createCards()
    },
    createCards: function () {
        const thumbNailsRef = [
          {
            id: "superman-poster",
            url: "./assets/superman.jpg",
          },
          {
            id: "spiderman-poster",
            url: "./assets/spiderman.jpg",
          },
    
          {
            id: "aero-poster",
            url: "./assets/captainaero.jpg",
          },
          {
            id: "outer-space-poster",
            url: "./assets/outerspace.jpg",
          },
        ]
        let previousXPosition = -60;
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25;
            const posY = 0;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            previousXPosition = posX;

    // Border Element
      const borderEl=this.createBorder(position,item)
      
      // Thumbnail Element
      const thumbnail=this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      
      this.placesContainer.appendChild(borderEl);
    }
    

},
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        height:30,
        width:22,
    });
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"white",
      opacity:1,
    });
    return entityEl
  },
  createThumbnail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      height:28,
      width:20
    });
    entityEl.setAttribute("material",{
      src:item.url
    });
    entityEl.setAttribute("position",{
      x:0, y:0, z:0.1
    });
    return entityEl
  },  
})