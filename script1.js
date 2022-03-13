function display()
	{
	var d = new Date();
	document.getElementById("time").innerHTML=d.getHours();
	document.getElementById("time").innerHTML+=":"+d.getMinutes();
	document.getElementById("time").innerHTML+=":"+d.getSeconds();
	setInterval("display()", 1000);
	}
	display();
	function setBackgroundColor()
	{
	var red=Math.floor(Math.random()*255);
	var blue=Math.floor(Math.random()*255);
	var green=Math.floor(Math.random()*255);
	var color = "rgb("+red+","+green+","+blue+")";
	document.getElementById("emptybox").style.backgroundColor=color;
	setInterval("setBackgroundColor()", 30000);
	}
	setBackgroundColor();
	function incSize(){
		document.getElementById("para").style.fontSize = "50px";
	}
	function decSize()
	{
		document.getElementById("para").style.fontSize = "25px";
	}
	function init()
	{
		imgObj=document.getElementById("image");
		imgObj.style.position="relative";
		imgObj.style.left='0px';
	}
	function moveRight()
	{
		imgObj.style.left=parseInt(imgObj.style.left)+1+'px';
		animate = setTimeout("moveRight()",1);
	}
	function stop()
	{
		clearTimeout(animate);
		imgObj.style.left='0px';
	}
	window.onload=init();
	function fifthone()
	{
		var students=[{name:'John', r_num:'123',dob:'1995'},
		{name:'Joseph', r_num:'456', dob:'2001'},
		{name:'Dileep',r_num:'105',dob:'2010'}];
		for(var i=0;i<students.length;i++)
			{
			if(parseInt(students[i].dob<2000))
			{
			document.getElementById("empty1").innerHTML+="Below 2000<br>"
			document.getElementById("empty1").innerHTML+=students[i].name+"<br>";
			}
			else
			{
			document.getElementById("empty2").innerHTML+="After 2000<br>";
			document.getElementById("empty2").innerHTML+=students[i].name+"<br>";
			}
	}
	}
