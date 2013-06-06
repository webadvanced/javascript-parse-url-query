JavaScript utility to parse URL query string
============================================

Creates a hash and utility methods to access url query values

##API

Example url: `http://www.google.com?q=kittens`

**urlq.get( paramName )** returns the value for the given param name.

    var searchVal = urlq.get( 'q' ); //Returns 'kittens'
    var searchFilter = urlq.get( 'z' ); //Returns undefined

**urlq.exists( paramName )** returns bool for provided param name.

    var hasSearch = urlq.get( 'q' ); //Returns true
    var hasFilter = urlq.get( 'z' ); //Returns false

**urlq.count** returns count of paramaters.

    urlq.count //returns 1