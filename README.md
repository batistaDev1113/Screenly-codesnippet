# Screenly-codesnippet
short javascript snippet

In this little snippet of code I created a function that will display random quotes every 3 seconds.  The setInterval method will take the anonymous function and call it every 3 seconds.  This function have an array with some quotes wich will be displayed randomly.  I created a variable called quotesRand in which will be stored the random quote picked byt he Math object and the floor method.  Then afterwards, we call and manipulate the Dom by targeting the HTML element in which the quotes will be written by invoking document.querySelector('q').  This function call be repated every 3 seconds after the DOM is loaded.
