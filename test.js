let utils = require('./utils.js')
let log = console.log

function hash_sum(){
	log('test: hash_sum(\'ABC\') should equals 198')
	let res = utils.hash_sum('ABC')
	log('test:', res == 198 ? 'passed' : 'not passed')
}
hash_sum()

function require_test(){
	log('test: require(\'project-name\', \'password\', \'node-\', \'-package\') should equals node-1078143-package')
	let res = utils.require('project-name','password', 'node-', '-package')
	log(res)
}
//require_test()

function name_gen(){
	log('test: name_gen(\'project-name\', \'password\') should equals 1078143')
	let res = utils.name_gen('project-name','password')
	log(res)
}
name_gen()