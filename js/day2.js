function showPic (dir) {
	var source = dir.getAttribute('href');
	var tit = dir.getAttribute('title');
	var placeholder = document.getElementById('placeholder');
	var des = document.getElementById('des');
	// console.log(dir.getAttribute('href'));
	placeholder.setAttribute('src',source);
	des.childNodes[0].nodeValue = tit;
}

// if (!document.getElementById || !document.getElementsByTagName) { 
// 	 	console.log('getElementById');
// 		return false;
// 	};
// var image = document.getElementById('imagegallery');
// if(!image){ console.log(image);}