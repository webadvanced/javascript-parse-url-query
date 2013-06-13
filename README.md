###JavaScript utility for parsing URL query strings


Creates a hash and utility methods for accessing URL query string values

##API

Example url: `http://www.google.com?q=kittens`

**urlq.get( paramName )** returns the value for the given param name (string).

    var searchVal = urlq.get( 'q' ); //Returns 'kittens'
    var searchFilter = urlq.get( 'z' ); //Returns undefined

**urlq.exists( paramName )** returns bool for provided param name.

    var hasSearch = urlq.exists( 'q' ); //Returns true
    var hasFilter = urlq.exists( 'z' ); //Returns false

**urlq.count** returns count of paramaters.

    urlq.count //returns 1