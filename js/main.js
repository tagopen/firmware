var file = $( ".upload" ),
    inp = file.find( ".upload__input" ),
    btn = file.find( ".upload__btn" ),
    lbl = file.find( ".upload__text" );

var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

inp.change(function(){
  var file_name;
  if( file_api && inp[ 0 ].files[ 0 ] )
    file_name = inp[ 0 ].files[ 0 ].name;
  else {
    file_name = inp.val().replace( "C:\\fakepath\\", '' );
  }

  if( ! file_name.length ) {
    return;
  }

  if( lbl.is( ":visible" ) ){
    lbl.text( file_name );
    btn.text( "Выбрать" );
  } else {
    btn.text( file_name );
  }
}).change();

$( window ).resize(function(){
  $( ".upload__input" ).triggerHandler( "change" );
});
// Bootstra-selector init
$('.selectpicker').selectpicker({
  size: 4
});

$(document).ready(function() {
  $('.tabs__controls-link').click(function(e) {
    e.preventDefault();
    var $item = $(this).closest('.tabs__controls-item'),
        $contentItem = $('.tabs__item'),
        $itemPosition = $(this).attr('href');

    $contentItem.filter($itemPosition)
    .add($item)
    .addClass('active')
    .siblings()
    .removeClass('active');
  });
});

// Without JQuery
var slider1 = new Slider('#ex1', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider2 = new Slider('#ex2', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider3 = new Slider('#ex3', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider4 = new Slider('#ex4', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider5 = new Slider('#ex5', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});
var slider6 = new Slider('#ex6', {
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});