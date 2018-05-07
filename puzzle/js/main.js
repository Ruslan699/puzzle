var draggedItems = document.querySelectorAll('.draggedItems');
var droppable = document.querySelectorAll('.droppable');
var i = -1;
// for dragged elements
 


 function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var myArray = ['1','2','3','4','5','6','7','8'];
var mixedArray = shuffle(myArray);

console.log(mixedArray);




for(var dragItem of draggedItems){
    //add drag start event
    dragItem.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("dragElementID", e.target.getAttribute("id"));
        e.target.classList.add("dragging");
    })
    
    if(mixedArray.length>i){
        i++;
    }
    dragItem.id = "div" + mixedArray[i];
    dragItem.innerHTML = mixedArray[i];
    console.log(dragItem.id);




    //add drag end event
    // dragItem.addEventListener("dragend", function(){
    //     console.log('drag just ended');
    // })

    //add while dragging event
    // dragItem.addEventListener("drag", function(){
    //     console.log('drag continues');
    // })
}



// for droppable elements
for(var drop of droppable){
    //add dropOver event
    drop.addEventListener("dragover", function(e){
        e.preventDefault();
    })

    //add drop event

     var truedrag = 0;
    drop.addEventListener("drop", function(e){
        e.preventDefault();
        
        if(e.target.childNodes.length == 0)
        {
            var dragElementID = e.dataTransfer.getData("dragElementID");
            var dragElemen = document.querySelector("#"+dragElementID);
            dragElemen.classList.remove("dragging");
            
            e.target.appendChild(dragElemen); 


            if(e.srcElement.id == "#" + dragElementID){
                truedrag = truedrag + 1;
                console.log (truedrag);
            }

          
    }

      if (truedrag==8){
            console.log ("you win");
        }
        })

        
    
}











  