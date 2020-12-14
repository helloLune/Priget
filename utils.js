let x = module.exports = {}

x.hash_sum = function(s){
	// 'ABC' -> 198 
	if(!s) return 0
	return Array.from(s).map(
		n=>n.charCodeAt(0) // nums
	).reduce(
		(a,b)=>a+b // sum
	)
}
x.name_gen = function(name, password){
	/* 
		# Example of use:
			name = 'project-name'
			password = 'password'
			out: '1078143'
	*/
	let hashed_n = x.hash_sum(name)
	let hashed_p = x.hash_sum(password)
	return (hashed_p*hashed_n).toString()
} 
x.require = function (name, password, prefix='', postfix=''){
	return require(prefix+x.name_gen(name, password)+postfix)
}