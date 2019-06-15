var gulp 			= require( 'gulp' ),
	sass 			= require( 'gulp-sass' ),
	postcss      	= require( 'gulp-postcss' ),
	autoprefixer 	= require( 'autoprefixer' );

var sourse = 'source/scss/',
	dist = 'assets/css/';

//
gulp.task( 'sass', function( ) {
	return gulp.src( [ sourse + '**/*.{scss,sass}'] )
				.pipe( sass( ).on( 'error', sass.logError ) )
				.pipe( postcss ( [ autoprefixer( ) ] ) )
				.pipe( gulp.dest( dist ) );
} );

//
gulp.task( 'autoprefixer', function( ) {
    return gulp.src( dist + '**/*.css' )
				.pipe( postcss ( [ autoprefixer( ) ] ) )
				.pipe( gulp.dest( dist ) );
} );

//
gulp.task( 'default', function( ) {
	gulp.start( 'sass' );
	gulp.watch( sourse + '**/*.{scss,sass}', [ 'sass' ] );
} );