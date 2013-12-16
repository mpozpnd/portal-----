javascript:var user="";
var pass="";
var matrix="";
function a (b,c){var d=new Array("A","B","C","D","E","F","G","H","I","J");for(i=0;i<10;i++){if(d[i]==b)return matrix.charAt(10*(c-1)+i);}return null;}url_=document.URL;if(url_.search(/Template=userpass_key/)>0){document.login.usr_name.value=user;document.login.usr_password.value=pass;document.login.submit();}else if(url_.search(/Template=idg_key/)>0){var text=document.body.innerText;var cel=text.match(/\[(\D),(\d)\]/g);document.login.message3.value=a(cel[0][1],Number(cel[0][3]));document.login.message4.value=a(cel[1][1],Number(cel[1][3]));document.login.message5.value=a(cel[2][1],Number(cel[2][3]));document.login.submit();}else if(url_.search(/portal.titech.ac.jp/)>0){document.login2.submit();}else{location.href="http://portal.titech.ac.jp/";}

