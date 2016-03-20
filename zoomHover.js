/*
Name:zoomHover
Version:0.0.1
Owner:Bruno Colombini
*/

function zoomHover(options,element)
{
	var hover = true
	this.element = element?element:'.hoverzoom' //can use id, class, and elementName, choose what do want, bur remember need the child tag,class or id for realy effect
	this.options = {
		'transition':{
			'duration':0.8,
			'property':'all',//width , heigth
			'delay':0,
			'function':'linear',//linear, ease, ease-in, ease-out e ease-in-out
			//'function':'cubic-bezier(.6,.08,.27,.97),'//cubic-bezier(Low_Progress,Low_Time,Height_Progress,Height_Time)
		},
		'style':{
			'enable':true, //If you wanna use this mode sheet, or make in your stylesheet 
			'father':{
				'tag':'div',//can use class,id or tag
				'position': 'relative',
				'width': '100px',
				'overflow': 'hidden',
			},
			'child':{
				'tag':'img',//can use class,id or tag
				'width':'100%',
				'border-radius':'2px',
			}
		},
		'effect':{
			'zoom':{
				'enable':true,
				'scale':'1.6'
			},
			'rotate':{
				'enable':true,
				'degrees':30
			}
		},
		
	}

	this.options = extend(this.options,options)

	console.log(this.options);

	rotate = this.options.effect.rotate.enable == true?"rotate("+this.options.effect.rotate.degrees+"deg)":"";
	
	zoom = this.options.effect.zoom.enable == true?"scale("+this.options.effect.zoom.scale+")":"";



	var sheet = document.createElement('style')
	sheet.className = "bc_"+btoa(Math.random(0,10000*100)).substring(1,10)
	sheet.innerHTML = this.element+" "+this.options.style.child.tag+" {"
	sheet.innerHTML +=	"width: 100%;"
	sheet.innerHTML +=	"border-radius: 2px;"
	sheet.innerHTML +=	"-webkit-transition: all "+this.options.transition.duration+"s "+this.options.transition.function+";"
	sheet.innerHTML +=	"-moz-transition: all "+this.options.transition.duration+"s "+this.options.transition.function+";"
	sheet.innerHTML +=	"-ms-transition: all "+this.options.transition.duration+"s "+this.options.transition.function+";"
	sheet.innerHTML +=	"-o-transition: all "+this.options.transition.duration+"s "+this.options.transition.function+";"
	sheet.innerHTML +=	"transition: all "+this.options.transition.duration+"s "+this.options.transition.function
	sheet.innerHTML += "}\n";
	
	sheet.innerHTML += this.element+":hover "+this.options.style.child.tag+" {";
	sheet.innerHTML += "-webkit-transform:"+rotate+" "+zoom+";"
	sheet.innerHTML += "-moz-transform:"+rotate+" "+zoom+";"
	sheet.innerHTML += "-ms-transform:"+rotate+" "+zoom+";"
	sheet.innerHTML += "-o-transform:"+rotate+" "+zoom+";"
	sheet.innerHTML += "transform:"+rotate+" "+zoom+";"
	sheet.innerHTML += "}";
	document.getElementsByTagName('head')[0].appendChild(sheet);





//this.options.effect.zoom.enable == true?"scale("+this.options.effect.zoom.scale+")":""+ "



	function extend(original_obj,ext_obj)
	{
		for(key1 in ext_obj)
		{
			if(typeof ext_obj[key1] === "object")
			{
				for(key2 in ext_obj[key1])
				{
					if(typeof ext_obj[key1][key2] === "object")
					{
						for(key3 in ext_obj[key1][key2])
						{
							original_obj[key1][key2][key3] = ext_obj[key1][key2][key3]
						}
					}
					else
					{

						original_obj[key1][key2] = ext_obj[key1][key2]
					}
				}
			}
			else
			{
				original_obj[key1] = ext_obj[key1]
			}
		}
		return original_obj
	}

}
