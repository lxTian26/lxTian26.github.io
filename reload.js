(function()
 {
 if( window.localStorage )
 {
 if( !localStorage.getItem( 'firstLoad' ) )
 {
 localStorage[ 'firstLoad' ] = true;
location.reload(true);
 } 

 else
 localStorage.removeItem( 'firstLoad' );
 }
 })();