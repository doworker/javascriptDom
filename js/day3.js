window.onload = function (){
	// cc();
	// tt();
	// pp();
	getNewContent();
}

// function cc(){
// 	var txtP = document.createElement('p');
// 	var txt = document.createTextNode('hello world!');
// 	var cc = document.getElementById('cc');
// 	txtP.appendChild(txt);
// 	cc.appendChild(txtP);
// }
// function tt(){
// 	var para = document.createElement('p');
// 	var txt1 = document.createTextNode('');
// 	para.appendChild(txt1);
// 	var emphasis = document.createElement('em');
// 	var txt2 = document.createTextNode('');
// 	emphasis.appendChild(txt2);
// 	para.appendChild(emphasis);
// 	var txt3 = document.createTextNode('');
// 	para.appendChild(txt3);
// 	document.getElementById('dd').appendChild(para);

// }
// function pp(){
// 	var img = document.createElement('img');
// 	img.setAttribute('id','placeholder');
// 	img.setAttribute('src','images/400x400.jpg');
// 	img.setAttribute('alt','this is first img.');
// 	var para = document.createElement('p');
// 	para.setAttribute('id','des');
// 	var txt = document.createTextNode('this is first img.');
// 	para.appendChild(txt);
// 	document.getElementsByTagName('body')[0].appendChild(img);
// 	document.getElementsByTagName('body')[0].appendChild(para);

// }
// function insertAfter(newElement,targetElement){
// 	var parent = targetElement.parentNode;
// 	if(parent.lastChild == targetElement){
// 		parent.appendChild(newElement);
// 	}else{
// 		parent.insertBefore(newElement,targetElement.nextSibing);
// 	}
// }

// var request = new ActiveXObject('Msxml2.XMLHTTP.3.0');
// var request = new XMLHttpRequest();

function getHTTPObject(){
	if(typeof XMLHttpRequest == 'underfined'){
		XMLHttpRequest = function(){
			try{
				return new ActiveXObject('Msxml2.XMLHTTP.6.0');
			}catch(e){}
			try{
				return new ActiveXObject('Msxml2.XMLHTTP.3.0');
			}catch(e){}
			try{
				return new ActiveXObject('Msxml2.XMLHTTP');
			}catch(e){}
			return false;
		}
	}
	return new XMLHttpRequest();
}

function getNewContent(){
	var request = getHTTPObject();
	if(request){
		request.open('GET','exp.txt',true);
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null)
	}else{
		console.log('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
}
