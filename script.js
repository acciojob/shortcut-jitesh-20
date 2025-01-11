function shortcut(s1, s2) {
	let str='';
  if(s1.length>0 && s2.length>0){
	  for(let i=0;i<1;i++){
		  str+=s1[i];
	  }
	  for(let i=0;i<1;i++){
		  str+=s2[i];
	  }
	  return str;
  }else{
	  return '';
  }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
