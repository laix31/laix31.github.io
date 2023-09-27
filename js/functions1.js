//agentes
//Ponerle nombre a las opciones(crearlas)
function processvaloagents()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var m=JSON.parse(this.responseText);

    	for(i =0; i<m.data.length; i++)
		{
			if(m.data[i].role != null)
			{
			opAg = document.createElement('option');
			opAg.value = m.data[i].uuid;
			opAg.innerHTML = m.data[i].displayName;
			agList.appendChild(opAg);
			}
		}
   }
}

//Carregar la api perque surti en el select
function apivalorantagents ()
{
    var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange=showAgents; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/agents/"+ agList.value);
    xmlhttp.send();
}


// mostra el agents que demans
function showAgents()
{
	if ((this.readyState==4) && (this.status==200))
	{

		var m=JSON.parse(this.responseText);
		Name.innerHTML = m.data.displayName;
		img.innerHTML= "<img src =' " + m.data.bustPortrait + "'id = 'imagenag'>";
		info.innerHTML = " ";
		info.innerHTML = "<h3>" + "DESCRIPTION:"+ "</h3> " + "<br>" + m.data.description + "<br>" + "<h3>" + "  ROLE: " + "</h3> " + "<br>" + m.data.role.displayName + "<br>";
		nab.innerHTML = " ";

		for (var i in m.data.abilities)
		{	

			nab.innerHTML += "<div class = 'info'> <h3>"+ m.data.abilities[i].displayName + "</h3>" + "<img src =' " + m.data.abilities[i].displayIcon + "'id = 'imgab'>" + "<br>" + "DESCRIPTION: " + "<br>" +  m.data.abilities[i].description + "</div>" ; 	
		}

	}	
}

//Carregar la api
function listagents()
{
	agList = document.getElementById("selcagent");
	Name = document.getElementById("NameAgent")
	img = document.getElementById('imagenag');
	info = document.getElementById('textAgent');
	nab = document.getElementById('abilidades');

	agList.addEventListener('change', apivalorantagents );
	var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange = processvaloagents; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/agents");
    xmlhttp.send();
}






//mapas
//Carregar la api
function listmaps()
{
	lm = document.getElementById ('lmapas');
	listarmapas();
	error = document.getElementById ('nomap');
	but = document.getElementById('butsearch');
	inpmap = document.getElementById('searchmaps');
	imgmap = document.getElementById('imagenmap');
	infomap = document.getElementById('textmap');
	map = document.getElementById('Namemap')
	but.addEventListener('click', buscamap);
	uuid = 0;
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = saveMaps; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/maps");
    xmlhttp.send();
}

//llamar a la api per que em carregui les llistas de la api
function listarmapas()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = listadoma; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/maps");
    xmlhttp.send();
}

//llista dels mapas
function listadoma()
{
	if ((this.readyState==4) && (this.status==200))
	{
		l=JSON.parse(this.responseText);
		for(var i in l.data)
		{
			lm.innerHTML += "<div class = 'lima'> <h3>"+ l.data[i].displayName + "</h3>" + "<img src =' " + l.data[i].listViewIcon + "'id = 'imglm'>" +"</div>" ; 
		}
	}

}

function saveMaps()
{
	if ((this.readyState==4) && (this.status==200))
	{
		mapas=JSON.parse(this.responseText);

	}
}


function apivalorantmaps ()
{
    var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange = showmaps; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/maps/"+ uuid);
    xmlhttp.send();
}

//posar el id del mapa
function buscamap ()
{ 
	resetlist();

    	for(i =0; i<mapas.data.length; i++)
		{
			if((inpmap.value == "bind") || (inpmap.value == "Bind") || (inpmap.value == "BIND"))
			{
				uuid = "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba";
			}
			else if((inpmap.value == "ascent") || (inpmap.value == "Ascent") || (inpmap.value == "ASCENT"))
			{
				uuid = "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319";
			}
			else if((inpmap.value == "split") || (inpmap.value == "Split") || (inpmap.value == "SPLIT"))
			{
				uuid = "d960549e-485c-e861-8d71-aa9d1aed12a2";
			}
			else if((inpmap.value == "fracture") || (inpmap.value == "Fracture") || (inpmap.value == "FRACTURE"))
			{
				uuid = "b529448b-4d60-346e-e89e-00a4c527a405";
			}
			else if((inpmap.value == "breeze") || (inpmap.value == "Breeze") || (inpmap.value == "BREEZE"))
			{
				uuid = "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53";
			}
			else if((inpmap.value == "lotus") || (inpmap.value == "Lotus") || (inpmap.value == "LOTUS"))
			{
				uuid = "2fe4ed3a-450a-948b-6d6b-e89a78e680a9";
			}
			else if((inpmap.value == "pearl") || (inpmap.value == "Pearl") || (inpmap.value == "PEARL"))
			{
				uuid = "fd267378-4d1d-484f-ff52-77821ed10dc2";
			}
			else if((inpmap.value == "icebox") || (inpmap.value == "Icebox") || (inpmap.value == "ICEBOX"))
			{
				uuid = "e2ad5c54-4114-a870-9641-8ea21279579a";
			}
			else if((inpmap.value == "The Range") || (inpmap.value == "the range") || (inpmap.value == "The range") || (inpmap.value == "THE RANGE"))
			{
				uuid = "ee613ee9-28b7-4beb-9666-08db13bb2244";
			}
			else if((inpmap.value == "haven") || (inpmap.value == "Haven") || (inpmap.value == "HAVEN"))
			{
				uuid = "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047";
			}

		}
	
	apivalorantmaps();
}

//reniciar la llista
function resetlist()
{
	lm.innerHTML = " ";
}




//mostrar el que estas demanant
function showmaps()
{
	if ((this.readyState==4) && (this.status==200))
	{

		var n=JSON.parse(this.responseText);
		error.innerHTML = " ";
		map.innerHTML = n.data.displayName;
		imgmap.innerHTML= "<img src =' " + n.data.splash + "'id = 'imagenmap'>";
		infomap.innerHTML = " ";
		infomap.innerHTML = "<h3>" + "Cordenadas:"+ "</h3> " + "<br>" + n.data.coordinates + "<br>";
	}	
	else
	{
		error.innerHTML = " ";
		error.innerHTML = "<h3>"+"Mapa no encontrado" + "</h3>";
	}
}










//Armas
//Carregar la api
function listaweapons()
{
	weList = document.getElementById("selcweapon");
	namewe = document.getElementById("Nameweapon")
	imgwe = document.getElementById('imagenwe');
	infowe = document.getElementById('textweapon');

	weList.addEventListener('change', apivalorantweapons);
	var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange = processvaloweapons; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/weapons");
    xmlhttp.send();
}

// mostra el agents que demanas
function showweapons()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var w=JSON.parse(this.responseText);
		namewe.innerHTML = w.data.displayName;
		imgwe.innerHTML= "<img src =' " + w.data.displayIcon + "'id = 'imagenwe'>";
		infowe.innerHTML = " ";
		infowe.innerHTML = "<h3>" + "COSTE:"+ "</h3> "  + w.data.shopData.cost + "<br>" + "<h3>" + "  CATEGORY: " + "</h3> "  + w.data.shopData.category + "<br>";

	}	
}

//Carregar la api perque surti en el select
function apivalorantweapons ()
{
    var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange = showweapons; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/weapons/"+ weList.value);
    xmlhttp.send();
}

//Ponerle nombre a las opciones(crearlas)
function processvaloweapons()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var w=JSON.parse(this.responseText);

    	for(i =0; i<w.data.length; i++)
		{
			opwe = document.createElement('option');
			opwe.value = w.data[i].uuid;
			opwe.innerHTML = w.data[i].displayName;
			weList.appendChild(opwe);
		}
   }
}





//roles

function listrole ()
{
	Name1 = document.getElementById("NameAgent1")
	img1 = document.getElementById('imagenag1');
	info1 = document.getElementById('textAgent1');
	nab1 = document.getElementById('abilidades1');

	rol = document.getElementById ('selcrole');
	rol.addEventListener('change', processvaloagents1);
    var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = processvalorole;
	xmlhttp.open("GET",' https://valorant-api.com/v1/agents');
	xmlhttp.send();
}
function processvaloagents1()
{
	ag1 = document.getElementById ('selcagent1');
	ag1.addEventListener('change', callapiag);
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = apivalorantagents1;
	xmlhttp.open("GET",' https://valorant-api.com/v1/agents');
	xmlhttp.send();
}



function processvalorole()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var r=JSON.parse(this.responseText);
		for(var i in r.data)
		{
			if(r.data[i].role != null )
			{
				opro = document.createElement('option');
				opro.value = r.data[i].role.uuid;
				opro.innerHTML = r.data[i].role.displayName;
				rol.appendChild(opro);
			}
		}   	
   	}
}


//perque em surti el agents especifics de cada rol
function apivalorantagents1()
{
	if ((this.readyState==4) && (this.status==200))
	{
		for ( i= ag1.options.length; i >= 0; i--)
		{
		   ag1.remove(i);
		}
		oag = document.createElement('option');
      	oag.value = '-1';
      	oag.innerHTML = "Agents";
     	oag.disabled = true;
     	oag.selected = true;
      	ag1.appendChild(oag);

		var r=JSON.parse(this.responseText);

		if(rol.value == "1b47567f-8f7b-444b-aae3-b0c634622d10")
		{
			for(var i in r.data)
			{
				if(r.data[i].role != null )
				{
					if( r.data[i].role.displayName == "Initiator" )
					{
                        opag1 = document.createElement('option');
                        opag1.value = r.data[i].uuid;
                        opag1.innerHTML = r.data[i].displayName;
                        ag1.appendChild(opag1);
					}
				}
			}
		}
			
	
		else if(rol.value == "dbe8757e-9e92-4ed4-b39f-9dfc589691d4")
		{
            for(var i in r.data)
            {
                console.log(i);
                if(r.data[i].role != null )
                {
                    if( r.data[i].role.displayName == "Duelist" )
                    {
                        opag1 = document.createElement('option');
                        opag1.value = r.data[i].uuid;
                        opag1.innerHTML = r.data[i].displayName;
                        ag1.appendChild(opag1);
                    }
                }
            }		
		}

		else if(rol.value == "5fc02f99-4091-4486-a531-98459a3e95e9")
		{
			
			for(var i in r.data)
			{
				if(r.data[i].role != null )
				{
					if( r.data[i].role.displayName == "Sentinel" )
					{
							opag1 = document.createElement('option');
							opag1.value = r.data[i].uuid;
							opag1.innerHTML = r.data[i].displayName;
							ag1.appendChild(opag1);
					}
				}
			}
		}
		
		else if(rol.value == "4ee40330-ecdd-4f2f-98a8-eb1243428373")
		{
			
			for(var i in r.data)
			{
				if(r.data[i].role != null )
				{
					if( r.data[i].role.displayName == "Controller" )
					{
							opag1 = document.createElement('option');
							opag1.value = r.data[i].uuid;
							opag1.innerHTML = r.data[i].displayName;
							ag1.appendChild(opag1);
					}
				}
			}
		}
   	}
}

function callapiag()
{
    var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange=showAgents1; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/agents/"+ ag1.value);
    xmlhttp.send();	
}

function showAgents1()
{
	if ((this.readyState==4) && (this.status==200)) 	
	{

		var r=JSON.parse(this.responseText);
		Name1.innerHTML = r.data.displayName;
		img1.innerHTML= "<img src =' " + r.data.bustPortrait + "'id = 'imagenag1'>";
		info1.innerHTML = " ";
		info1.innerHTML = "<h3>" + "DESCRIPTION:"+ "</h3> " + "<br>" + r.data.description + "<br>" + "<h3>" + "  ROLE: " + "</h3> " +  r.data.role.displayName  + "<br>" + r.data.role.description;
		nab1.innerHTML = " ";

		for (var i in r.data.abilities)
		{	

			nab1.innerHTML += "<div class = 'info1'> <h3>"+ r.data.abilities[i].displayName + "</h3>" + "<img src =' " + r.data.abilities[i].displayIcon + "'id = 'imgab'>" + "<br>" + "DESCRIPTION: " + "<br>" +  r.data.abilities[i].description + "</div>" ; 	
		}
	}	
}  



//listas 
//gamemodes y comepe y monedas
function listlist()
{
	butg = document.getElementById('butgame');
	butg.addEventListener('click', loadapigame);
	
	butc = document.getElementById('butcompe');
	butc.addEventListener('click', loadapicompe )

	butm = document.getElementById('butmon');
	butm.addEventListener('click', loadapimonedas )

}

function reset ()
{
	lis.innerHTML = " ";
}

//gamemodes
function loadapigame()
{
	lis = document.getElementById('listas')
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = listgamemode; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/gamemodes");
    xmlhttp.send();
}

function listgamemode ()
{
	reset ();
	if ((this.readyState==4) && (this.status==200))
	{
		g=JSON.parse(this.responseText);
		for(var i in g.data)
		{
			if(g.data[i].duration != null)
			{
			lis.innerHTML += "<div class = 'liga'> <h3>"+ g.data[i].displayName + "<br>" + "</h3>" + "<img src =' " + g.data[i].displayIcon + "'id = 'imgga'>" + "<br>" + "DURACION" + g.data[i].duration + "</div>" ; 
			}
		}
	}
}





//compe
function loadapicompe()
{
	lis = document.getElementById('listas')
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = listcompetitivo; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/competitivetiers");
    xmlhttp.send();
}

function listcompetitivo ()
{
	reset ();
	if ((this.readyState==4) && (this.status==200))
	{
		c=JSON.parse(this.responseText);
		for(var i in c.data[4].tiers)
		{
			if(c.data[4].tiers[i].smallIcon != null)
			{
			lis.innerHTML += "<div class = 'lico'> <h3>"+ c.data[4].tiers[i].tierName + "</h3>" + "<img src =' " + c.data[4].tiers[i].smallIcon + "'id = 'imgco'>" + "</div>" ; 
			}
		}
	}
}




//monedas
function loadapimonedas()
{
	lis = document.getElementById('listas')
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = listmonedas; 
    xmlhttp.open("GET", "https://valorant-api.com/v1/currencies");
    xmlhttp.send();
}

function listmonedas ()
{
	reset ();
	if ((this.readyState==4) && (this.status==200))
	{
		m=JSON.parse(this.responseText);
		for(var i in m.data)
		{
			lis.innerHTML += "<div class = 'limo'> <h3>"+ m.data[i].displayName + "</h3>" + "<img src =' " + m.data[i].displayIcon + "'id = 'imgmo'>" + "</div>" ; 
		}
	}
}


