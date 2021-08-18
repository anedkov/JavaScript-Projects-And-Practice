function getColor(phrase) {
	if(phase === 'stop'){
		console.log('red')
	}
	else if(phase === 'slow'){
		console.log('yellow')
	}
	else if(phase === 'go'){
		console.log('green')
	}
	else{
		console.log('purple')
	}
	
}