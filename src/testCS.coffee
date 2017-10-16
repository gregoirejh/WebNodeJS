myFunc = (hello, callback) ->
	# commentary
	callback "nope"
	
myFunc "hello",(cb_param) ->
	console.log cb_param
	
myVar = 2

myObject = 
	prop1: "hello"
	prop2: 2
	
throw err if err

