var names = ['rang','cc','nimsdf']
names[1] = '111'
// console.log(names);
document.getElementById('cc');
// console.log( typeof document.getElementById('cc'));

function getElementsByClassName(node, classname){
	// if(node.getElementsByClassName){
	// 	// now
	// 	return node.getElementsByClassName(classname);
	// }else{
		var results = new Array();
		var elemes = node.getElementsByTagName('*');
		for(var i = 0; i< elemes.length; i++){
			console.log(elemes[i].className.indexOf(classname)  +  '   9999')
			console.log(elemes[i].className.indexOf(classname) != -1)
			if(elemes[i].className.indexOf(classname) != -1){
				results[results.length] = elemes[i];
			}
		}
		return results;
	// }

}