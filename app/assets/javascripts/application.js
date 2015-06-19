// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .
// function makeSortable(){
//   $('#sortable').sortable({
//     placeholder: "ui-state-highlight"
//   });
//   $('#sortable').disableSelection();
// }

function changePosition(){
  $('#sortable').sortable().bind('sortupdate', function(e, ui) {
    updated_postions = []
    // set the updated positions
    setPosition();

    $('.ui-sortable-handle, .ui-state-default').each(function(i){
        updated_postions.push({ id: $(this).data("id"), position: i + 1 });
    });

    // console.log(updated_postions);

    $.ajax({
        type: "PUT",
        url: '/tasks/sort',
        data: { order: updated_postions }
    });


  });
}

function setPosition(){
  $('.ui-sortable-handle, .ui-state-default').each(function(i){
    $(this).attr('page_position', i + 1);
  });
}


// $(document).ready(makeSortable);
// $(document).ready(changePosition);
// $(document).ready(setPosition);


// $(makeSortable);
$(changePosition);
$(setPosition);
