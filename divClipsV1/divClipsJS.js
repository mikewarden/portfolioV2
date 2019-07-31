


window.onload = function()
{
    
    var padOne = document.getElementById("pad1Samp");
    var rowOneVol = document.getElementById("row1Vol");
    var setVolume = function() { padOne.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);

    var padTwo = document.getElementById("pad2Samp");
    var setVolume = function() { padTwo.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);

    var padThree = document.getElementById("pad3Samp");
    var setVolume = function() { padThree.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);

    var droneOne = document.getElementById("drone1Samp");
    var setVolume = function() { droneOne.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);

    var droneTwo = document.getElementById("drone2Samp");
    var setVolume = function() { droneTwo.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);

    var droneThree = document.getElementById("drone3Samp");
    var setVolume = function() { droneThree.volume = this.value / 100;}
    rowOneVol.addEventListener('change', setVolume);
    rowOneVol.addEventListener('input', setVolume);





    var bassOne = document.getElementById("bass1Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassOne.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);

    var bassTwo = document.getElementById("bass2Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassTwo.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);

    var bassThree = document.getElementById("bass3Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassThree.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);

    var bassFour = document.getElementById("bass4Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassFour.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);

    var bassFive = document.getElementById("bass5Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassFive.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);

    var bassSix = document.getElementById("bass6Samp");
    var rowTwoVol = document.getElementById("row2Vol");
    var setVolumeTwo = function() { bassSix.volume = this.value / 100;}
    rowTwoVol.addEventListener('change', setVolumeTwo);
    rowTwoVol.addEventListener('input', setVolumeTwo);





    var arpOne = document.getElementById("arp1Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpOne.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);

    var arpTwo = document.getElementById("arp2Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpTwo.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);

    var arpThree = document.getElementById("arp3Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpThree.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);

    var arpFour = document.getElementById("arp4Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpFour.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);

    var arpFive = document.getElementById("arp5Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpFive.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);

    var arpSix = document.getElementById("arp6Samp");
    var rowThreeVol = document.getElementById("row3Vol");
    var setVolumeThree = function() { arpSix.volume = this.value / 100;}
    rowThreeVol.addEventListener('change', setVolumeThree);
    rowThreeVol.addEventListener('input', setVolumeThree);




    var drumOne = document.getElementById("drum1Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumOne.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);

    var drumTwo = document.getElementById("drum2Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumTwo.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);

    var drumThree = document.getElementById("drum3Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumThree.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);

    var drumFour = document.getElementById("drum4Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumFour.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);

    var drumFive = document.getElementById("drum5Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumFive.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);

    var drumSix = document.getElementById("drum6Samp");
    var rowFourVol = document.getElementById("row4Vol");
    var setVolumeFour = function() { drumOne.volume = this.value / 100;}
    rowFourVol.addEventListener('change', setVolumeFour);
    rowFourVol.addEventListener('input', setVolumeFour);



    var drumSeven = document.getElementById("drum7Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumSeven.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);

    var drumEight = document.getElementById("drum8Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumEight.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);

    var drumNine = document.getElementById("drum9Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumNine.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);

    var drumTen = document.getElementById("drum10Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumTen.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);

    var drumEleven = document.getElementById("drum11Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumEleven.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);

    var drumTwelve = document.getElementById("drum12Samp");
    var rowFiveVol = document.getElementById("row5Vol");
    var setVolumeFive = function() { drumTwelve.volume = this.value / 100;}
    rowFiveVol.addEventListener('change', setVolumeFive);
    rowFiveVol.addEventListener('input', setVolumeFive);



   


	document.getElementById("pad1Div").addEventListener('click', playpad1Div);
	document.getElementById("pad2Div").addEventListener('click', playpad2Div);
	document.getElementById("pad3Div").addEventListener('click', playpad3Div);
	document.getElementById("drone1Div").addEventListener('click', playdrone1Div);
    document.getElementById("drone2Div").addEventListener('click', playdrone2Div);
    document.getElementById("drone3Div").addEventListener('click', playdrone3Div);

    document.getElementById("bass1Div").addEventListener('click', playbass1Div);
    document.getElementById("bass2Div").addEventListener('click', playbass2Div);
    document.getElementById("bass3Div").addEventListener('click', playbass3Div);
    document.getElementById("bass4Div").addEventListener('click', playbass4Div);
    document.getElementById("bass5Div").addEventListener('click', playbass5Div);
    document.getElementById("bass6Div").addEventListener('click', playbass6Div);
    
    document.getElementById("arp1Div").addEventListener('click', playarp1Div);
    document.getElementById("arp2Div").addEventListener('click', playarp2Div);
    document.getElementById("arp3Div").addEventListener('click', playarp3Div);
    document.getElementById("arp4Div").addEventListener('click', playarp4Div);
    document.getElementById("arp5Div").addEventListener('click', playarp5Div);
    document.getElementById("arp6Div").addEventListener('click', playarp6Div);

    document.getElementById("drum1Div").addEventListener('click', playdrum1Div);
    document.getElementById("drum2Div").addEventListener('click', playdrum2Div);
    document.getElementById("drum3Div").addEventListener('click', playdrum3Div);
    document.getElementById("drum4Div").addEventListener('click', playdrum4Div);
    document.getElementById("drum5Div").addEventListener('click', playdrum5Div);
    document.getElementById("drum6Div").addEventListener('click', playdrum6Div);

    document.getElementById("drum7Div").addEventListener('click', playdrum7Div);
    document.getElementById("drum8Div").addEventListener('click', playdrum8Div);
    document.getElementById("drum9Div").addEventListener('click', playdrum9Div);
    document.getElementById("drum10Div").addEventListener('click', playdrum10Div);
    document.getElementById("drum11Div").addEventListener('click', playdrum11Div);
    document.getElementById("drum12Div").addEventListener('click', playdrum12Div);



    document.getElementById("stopColumn1Div").addEventListener('click', stopColumnOne);
    document.getElementById("stopColumn2Div").addEventListener('click', stopColumnTwo);
    document.getElementById("stopColumn3Div").addEventListener('click', stopColumnThree);
    document.getElementById("stopColumn4Div").addEventListener('click', stopColumnFour);
    document.getElementById("stopColumn5Div").addEventListener('click', stopColumnFive);
    document.getElementById("stopColumn6Div").addEventListener('click', stopColumnSix);
}









function playpad1Div()
{
	document.getElementById("pad1Samp").play()
    document.getElementById("pad1Samp").loop = true;
}

function playpad2Div()
{
	document.getElementById("pad2Samp").play()
    document.getElementById("pad2Samp").loop = true;
}

function playpad3Div()
{
	document.getElementById("pad3Samp").play()
    document.getElementById("pad3Samp").loop = true;
}

function playdrone1Div()
{
	document.getElementById("drone1Samp").play()
    document.getElementById("drone1Samp").loop = true;
}

function playdrone2Div()
{
	document.getElementById("drone2Samp").play()
    document.getElementById("drone2Samp").loop = true;
}

function playdrone3Div()
{
	document.getElementById("drone3Samp").play()
    document.getElementById("drone3Samp").loop = true;
}


function playbass1Div()
{
	document.getElementById("bass1Samp").play()
    document.getElementById("bass1Samp").loop = true;
}

function playbass2Div()
{
	document.getElementById("bass2Samp").play()
    document.getElementById("bass2Samp").loop = true;
}

function playbass3Div()
{
	document.getElementById("bass3Samp").play()
    document.getElementById("bass3Samp").loop = true;
}

function playbass4Div()
{
	document.getElementById("bass4Samp").play()
    document.getElementById("bass4Samp").loop = true;
}

function playbass5Div()
{
	document.getElementById("bass5Samp").play()
    document.getElementById("bass5Samp").loop = true;
}

function playbass6Div()
{
	document.getElementById("bass6Samp").play()
    document.getElementById("bass6Samp").loop = true;
}



function playarp1Div()
{
	document.getElementById("arp1Samp").play()
    document.getElementById("arp1Samp").loop = true;
}

function playarp2Div()
{
	document.getElementById("arp2Samp").play()
    document.getElementById("arp2Samp").loop = true;
}

function playarp3Div()
{
	document.getElementById("arp3Samp").play()
    document.getElementById("arp3Samp").loop = true;
}

function playarp4Div()
{
	document.getElementById("arp4Samp").play()
    document.getElementById("arp4Samp").loop = true;
}

function playarp5Div()
{
	document.getElementById("arp5Samp").play()
    document.getElementById("arp5Samp").loop = true;
}

function playarp6Div()
{
	document.getElementById("arp6Samp").play()
    document.getElementById("arp6Samp").loop = true;
}



function playdrum1Div()
{
	document.getElementById("drum1Samp").play()
    document.getElementById("drum1Samp").loop = true;
}

function playdrum2Div()
{
	document.getElementById("drum2Samp").play()
    document.getElementById("drum2Samp").loop = true;
}

function playdrum3Div()
{
	document.getElementById("drum3Samp").play()
    document.getElementById("drum3Samp").loop = true;
}

function playdrum4Div()
{
	document.getElementById("drum4Samp").play()
    document.getElementById("drum4Samp").loop = true;
}

function playdrum5Div()
{
	document.getElementById("drum5Samp").play()
    document.getElementById("drum5Samp").loop = true;
}

function playdrum6Div()
{
	document.getElementById("drum6Samp").play()
    document.getElementById("drum6Samp").loop = true;
}


function playdrum7Div()
{
	document.getElementById("drum7Samp").play()
    document.getElementById("drum7Samp").loop = true;
}

function playdrum8Div()
{
	document.getElementById("drum8Samp").play()
    document.getElementById("drum8Samp").loop = true;
}

function playdrum9Div()
{
	document.getElementById("drum9Samp").play()
    document.getElementById("drum9Samp").loop = true;
}

function playdrum10Div()
{
	document.getElementById("drum10Samp").play()
    document.getElementById("drum10Samp").loop = true;
}

function playdrum11Div()
{
	document.getElementById("drum11Samp").play()
    document.getElementById("drum11Samp").loop = true;
}

function playdrum12Div()
{
	document.getElementById("drum12Samp").play()
    document.getElementById("drum12Samp").loop = true;
}











function stopColumnOne()
{
	document.getElementById("pad1Samp").loop = false;
	document.getElementById("bass1Samp").loop = false;
	document.getElementById("arp1Samp").loop = false;
	document.getElementById("drum1Samp").loop = false;
	document.getElementById("drum7Samp").loop = false;
}

function stopColumnTwo()
{
	document.getElementById("pad2Samp").loop = false;
	document.getElementById("bass2Samp").loop = false;
	document.getElementById("arp2Samp").loop = false;
	document.getElementById("drum2Samp").loop = false;
	document.getElementById("drum8Samp").loop = false;
}

function stopColumnThree()
{
	document.getElementById("pad3Samp").loop = false;
	document.getElementById("bass3Samp").loop = false;
	document.getElementById("arp3Samp").loop = false;
	document.getElementById("drum3Samp").loop = false;
	document.getElementById("drum9Samp").loop = false;
}

function stopColumnFour()
{
	document.getElementById("drone1Samp").loop = false;
	document.getElementById("bass4Samp").loop = false;
	document.getElementById("arp4Samp").loop = false;
	document.getElementById("drum4Samp").loop = false;
	document.getElementById("drum10Samp").loop = false;
}

function stopColumnFour()
{
	document.getElementById("drone1Samp").loop = false;
	document.getElementById("bass4Samp").loop = false;
	document.getElementById("arp4Samp").loop = false;
	document.getElementById("drum4Samp").loop = false;
	document.getElementById("drum10Samp").loop = false;
}

function stopColumnFive()
{
	document.getElementById("drone2Samp").loop = false;
	document.getElementById("bass5Samp").loop = false;
	document.getElementById("arp5Samp").loop = false;
	document.getElementById("drum5Samp").loop = false;
	document.getElementById("drum11Samp").loop = false;
}

function stopColumnSix()
{
	document.getElementById("drone3Samp").loop = false;
	document.getElementById("bass6Samp").loop = false;
	document.getElementById("arp6Samp").loop = false;
	document.getElementById("drum6Samp").loop = false;
	document.getElementById("drum12Samp").loop = false;
}

