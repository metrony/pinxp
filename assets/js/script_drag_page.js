function revertDraggable(theListofMyDOMelements) {
        theListofMyDOMelements.each(function() {
            var $this = $(this),
            position = $this.data("originalPosition");
            //console.log ($this);
            if (position) {
                $this.animate({
                             left: position.left,
                             top: position.top
                             }, 500, 
                             function() {
                                    $this.data("originalPosition", null);
                });
             }
        });
}


var makeImagesDraggable = function() {
    $(".draggable").draggable({
        revert: "invalid", 
        snap: ".ui-widget-header",
        snapMode: "both",
        grid: [ 30, 30 ]      
    });
    
    $("#drop").droppable({
        drop: function(event, ui) {
                if (!ui.draggable.data("originalPosition")) {
                    ui.draggable.data("originalPosition",
                    ui.draggable.data("draggable").originalPosition);
                }
        }
    });

    $("#undo").click(function() {
        // the values of $.drag retrieves a list of the DOM elements with class drag below
        revertDraggable($(".draggable"));
    });
};

var addImage = function(id, src){
    var div = $('<div id="' + id + '" class="draggable ui-widget-content">'); //Equivalent: $(document.createElement('img'))
    var img = $('<img/>');
    img.attr('src', src);
    img.appendTo(div);
    div.appendTo('#imageListDiv');
};

var initialize = function() {
 $('#show_position').click(function(){
    $.each($("#imageListDiv div.draggable"), function(ele) {
        console.log(ele);
    });
 });
};

//end function initialize
//load the images 
//using location.search is weak it will pass the entire querystring over
$.getJSON('api/get_files' + location.search , function(data) {
    $.each(data.images, function(x,item) {
        console.log('Adding image ' + item.name + ":" + item.filepath );
        addImage(item.name, item.filepath);
    });
    makeImagesDraggable();
    initialize();
});