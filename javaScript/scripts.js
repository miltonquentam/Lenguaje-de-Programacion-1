*{
	margin: 0;
	padding: 0;
	font-family: arial;
	color: white;
}

div{
	
}

body{
	background-color: rgba(0,0,0,0.8);
}

.contenedor-flexbox{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
}

.caja{
	flex: 20%;
	margin: 5px;
	border-radius: 10px;
	border: 1px solid green;
	box-shadow: 3px 3px 3px black;
}

.caja img{
	width: 120px;
}

.menu{
	display: flex;
	justify-content: space-between;
	align-items: center;

}

.menu .logo{
	margin-top: 10px;
	margin-left: 10px;
}

.menu .items{
	margin-right: 10px;
}

.menu .items a{
	text-decoration: none;
	border: solid 1px green;
	padding: 20px;

}

.menu .items a:hover{
	background-color: green;
	color: white;
}

