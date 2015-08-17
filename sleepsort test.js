//sleepsort.js


function sleepsort(array){
	if(typeof array !== "Array")
		return;
	var sorted = [];
	array.forEach(function(el, i){
		(function(el){setTimeout(
			function(el){
				[].push.bind(sorted, el);
			}, 5*el 
		)})(el);
	});

	setTimeout(console.log.bind(console, sorted), Math.max.apply(null, array));
	//setTimeout(function(sorted){return sorted}, 1000);
}

var arg = [1, 2, 3, 4, 100, 40, 3, 1, 7, 4, 13, 29, 92];
sleepsort(arg);

function sleepsort(array){
	sorted = [];
	for(var i = 0; i<array.length; i++){
		(function(sorted, array, i){setTimeout( function(){sorted.push.bind(sorted, array[i]); console.log(array[i])}, array[i]*5)})(sorted, array, i);
	}
	setTimeout(function(){return sorted}, array[array.length-1]*5);
}

var arg = [1, 2, 3, 4, 100, 40, 3, 1, 7, 4, 13, 29, 92];
sleepsort(arg);