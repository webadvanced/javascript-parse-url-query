;( function( w, q, undefined ) {
	
	"use strict";
	
	var	qObject = {},
		qCollection,
		i = 0,
		urlq = {
			count: 0,
			get: function() {},
			exists: function() {}
		};

	//give it to the people
	w.urlq = urlq;
	
	//If there is no query, exit
	if( !q ) {
		return;
	}

	q = decodeURIComponent( q );

	//build query object
	qCollection = q.slice( 1 ).split( '&' );
	for( ; i < qCollection.length; i ++ ) {
		var entry = qCollection[ i ].split( '=' );
		qObject[ entry[ 0 ] ] = entry[ 1 ];
	}
	
	//count of query params
	urlq.count = qCollection.length;

	//get value from key
	urlq.get = function( key ) {
		return qObject[ key ];
	};

	//exists by key
	urlq.exists = function( key ) {
		return qObject[ key ] !== undefined;
	};

}( window, window.location.search ) );