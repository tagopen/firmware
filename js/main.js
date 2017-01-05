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