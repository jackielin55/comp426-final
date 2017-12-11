var encyclopedia = function (ui_div){
    var folderlist = $("<div class='fldlst'> </div>");
    var notelist = $("<div class='ntelst'> </div>");
    var create_button_1 = $("<button id='one_button' type ='button' class='button'> Create </button>");
    var create_button_2 = $("<button id='two_button' type='button' class='button'> Create </button>");
    var delete_button_1 = $("<button id='d_butt_1' type='button' class='button'> Delete </button>");
    var delete_button_2 = $("<button id='d_butt_2' type='button' class='button'> Delete </button>");
    var ui_input_form = $("<form class='text_player_input_form'><input type='text' class='text_player_input'></form>");
    var fld_name = null;
    var fld = null;
    var note_cards= null;
    var tobedeleted = null;
    $(ui_div).append(folderlist).append(notelist);
    $(folderlist).append(create_button_1).append(delete_button_1);
   // $(notelist).append(create_button_2).append(delete_button_2);


$('#one_button').click(function(){
    // $(folderlist).append(ui_input_form);
    // ui_input_form.on('submit', function (e){
    // e.preventDefault();
    // var fld_name = $(this).find('.text_player_input');
    // });
    
    var folder = $("<button id='folders' type='button'> Subject </button>");
    $(folderlist).append(folder).append(create_button_1).append(delete_button_1);
    
    
});

$(folderlist).on('click', '#folders', function(e){
    //alert("clicked");
    fld = $(this);
    $(notelist).append(create_button_2).append(delete_button_2);
   
});

$(notelist).on('click', '#two_button', function(e){
    var note_div = $("<div class='notes'> </div>");
    var left_notes =$("<input type='text' id='crd_ntes'value=''>");
    var right_notes = $("<input type='text' id='crd_ntes'value=''>");
    $(notelist).append(note_div);
    note_div.append(left_notes).append(right_notes);    
});

$(notelist).on('click', '.notes', function(e){
    tobedeleted = $(this);
});

$(notelist).on('click', '#d_butt_2', function(e){
    tobedeleted.remove();
});

$('#d_butt_1').click(function(){
    fld.remove();
});




}

$(document).ready(function(){
    var run = new encyclopedia($(".background"));
});

