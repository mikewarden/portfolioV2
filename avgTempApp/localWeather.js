var xmlhttp;
var mainTemp;
var minTemp;
var maxTemp;
var timeNow;

window.onload = function()
{
	//Current time will be displayed
	timeNow = new Date();
	document.getElementById('timeDisplay').innerHTML = timeNow.toLocaleTimeString();

	document.getElementById('dateDisplay').innerHTML = (timeNow.getMonth() + 1) + "/" + timeNow.getDate() + "/" + timeNow.getFullYear();
	
	//geolocation is initialized.
	navigator.geolocation.getCurrentPosition(success, fail);

	//function for button to convert to Fahrenheit
    document.getElementById('convertBtn').addEventListener('click', function()
    	{
    		document.getElementById('mainTempArea').innerHTML = Math.floor(mainTemp * (9/5) + 32) + "&#8457";
    		document.getElementById('tempMinArea').innerHTML = Math.floor(minTemp * (9/5) + 32) + "&#8457";
    		document.getElementById('tempMaxArea').innerHTML = "/ " + Math.floor(maxTemp * (9/5) + 32) + "&#8457";

    	});
    //function for button to convert to Celsius
    document.getElementById('convertBtn2').addEventListener('click', function()
    	{
    		document.getElementById('mainTempArea').innerHTML = Math.floor(mainTemp) + "&#8451";
    		document.getElementById('tempMinArea').innerHTML = Math.floor(minTemp) + "&#8451";
    		document.getElementById('tempMaxArea').innerHTML = "/ " + Math.floor(maxTemp) + "&#8451";

    	});

    


};


//in success, lat and long are created.
function success(position)
{
	 var lat = position.coords.latitude;
	 var long = position.coords.longitude;


	getPositionInfo(lat, long);
}

//xml request 
function getPositionInfo(lat, long)
{
	//API data is stored in url 
	var url = "https://fcc-weather-api.glitch.me//api/current?lon=" + long + "&lat=" + lat;
	xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = processWeatherData;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//readyState is checked and response is parsed to JSON.
function processWeatherData()
    {
    	var out = "";

    	if (xmlhttp.readyState == 4)
    	{

    		//xml response text is parsed into a JSON object and stored in jsonResponse for later use.
    		var jsonResponse = JSON.parse(xmlhttp.responseText);
    		
            
    		

            //JSON object info is logged to the console to extract more details
            console.log(jsonResponse);


    		

            // for loop is kept for testing.
    		for (var i = 0; i < jsonResponse.length; i++)
    		{
    			out += jsonResponse[i].main;
    		}

    		
            //object data is stored as variables...
            var location = jsonResponse.name;
    		var weatherDescription = jsonResponse.weather[0].description;
    		var weatherIcon = jsonResponse.weather[0].icon;
    		mainTemp = jsonResponse.main.temp;
    		minTemp = jsonResponse.main.temp_min;
    		maxTemp = jsonResponse.main.temp_max;
    		var humidity = jsonResponse.main.humidity;
    		var pressure = jsonResponse.main.pressure;
    		var latt = jsonResponse.coord.lat;
    		var longi = jsonResponse.coord.lon;
    		var country = jsonResponse.sys.country;
    		var windDegree = jsonResponse.wind.deg;
    		//var windGus = jsonResponse.wind.gust;
    		var windSpeeds = jsonResponse.wind.speed;

    		 
            //Temp values are temporarily converted  from C to F, before button feature is added...
    		//mainTemp = Math.floor(mainTemp * (9/5) + 32) + "&#8457";
    		//minTemp = Math.floor (minTemp * (9/5) + 32) + "&#8457";
    		//maxTemp = Math.floor(maxTemp * (9/5) + 32) + "&#8457";
    		//remember button function for these conversions in the window.onload!!!
    		/*function convertToFar()
    		{
    			mainTemp = Math.floor(mainTemp * (9/5) + 32) + "&#8457";

    		}*/

 
            
            //object variables are added to corresponding HTML divs. 
            document.getElementById('locationArea').innerHTML = location;
            document.getElementById('countryArea').innerHTML = "  " + country;
            document.getElementById('mainTempArea').innerHTML = Math.floor(mainTemp) +  "&#8451";
            document.getElementById('tempMinArea').innerHTML = minTemp + "&#8451";
            document.getElementById('tempMaxArea').innerHTML = "/ " + maxTemp + "&#8451";
    		//document.getElementById('weatherDescriptionArea').innerHTML = weatherDescription;
    		document.getElementById('humidityArea').innerHTML = "Humidity: " + humidity + "%";
    		document.getElementById('mainPressureArea').innerHTML = "Barometric Pressure: " + pressure;
    		document.getElementById('latitudeArea').innerHTML = "LAT: " + latt + " degrees";
    		document.getElementById('longitudeArea').innerHTML = "LNG: " + longi + " degrees";
    		//document.getElementById('windDegrees').innerHTML = "Wind Degrees: " + windDegree;
    		//document.getElementById('windGust').innerHTML = "Wind Gust: " + windGus;
    		document.getElementById('windSpeed').innerHTML = "Wind Speed: " + windSpeeds +  "mph";
    		document.getElementById('iconBox').style.backgroundImage = "url(" + weatherIcon + ")";
    		document.getElementById('iconBox').style.backgroundSize =  "cover";

    		if (jsonResponse.weather[0].description = "clear sky")
    		{
    			document.getElementById('flex-container').style.backgroundColor = "#36A8FF";

    		}

    		else 
    		{
    			document.getElementById('flex-container').style.backgroundColor = "gray";

    		}

    		
    		
    	}
    }
     


    //failure is acknowledged.
	function fail(e)
	{
		console.log(e.message);
	}

