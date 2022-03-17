AFRAME.registerComponent("markerhandler", {
    init: function() {
        this.el.addEventListener('markerFound',()=>{
          this.handelmarkerfound()
        })
        this.el.addEventListener('markerLost',()=>{
          this.handelmarkerlost()
    });
  },
  handelmarkerfound: function(){
    console.log("found")
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display="flex"

    var ratingbutton = document.getElementById("rating-button");
    var orderbutton = document.getElementById("order-button");
   
    //click

    ratingbutton.addEventListener("click",()=>{
    swal({
    icon:"info",
    title:"RATE US",
    text:"under maintainence"  
    })
    })

    orderbutton.addEventListener("click",()=>{
      swal({
      icon:"https://i.imgur.com/4NZ6uLY_d.webp?maxwidth=760&fidelity=grand",
      title:"now",
      text:"under maintainence",  
      })
      })
  },

  handelmarkerlost: function(){
    console.log("lost")
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display="none"
  }
  });