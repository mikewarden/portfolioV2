/*
import {HasAudioContext} from 'audio-effects';
 
let audioContext = null;
 
if (HasAudioContext) {
    audioContext = new AudioContext();
}



import {Input} from 'audio-effects';
 
const stream = createAnAudioStream(); // Some audio stream 
const input = new Input(audioContext);
      input.input = stream;



import {Volume} from 'audio-effects';
 
const volume = new Volume(audioContext);
      volume.level = 0.5; // Change the volume to 50% 
      volume.mute = true; // Mute the volume 






import {Delay} from 'audio-effects';
 
const delay = new Delay(audioContext);
      delay.wet = 1; // Set the wetness to 100% 
      delay.speed = 1; // Set the speed to 1 second 
      delay.duration = 0.4; // Set the delay duration to 40% 



import {Output} from 'audio-effects';
 
const output = new Output(audioContext);

input.connect(volume).connect(delay).connect(output);

*/



window.onload = function()
{
	document.getElementById("noteC").addEventListener('click', playC);
	document.getElementById("noteC").addEventListener('', playC);
	document.getElementById("noteCsharp").addEventListener('click', playCsharp);
	document.getElementById("noteD").addEventListener('click', playD);
	document.getElementById("noteDsharp").addEventListener('click', playDsharp);
	document.getElementById("noteE").addEventListener('click', playE);
	document.getElementById("noteF").addEventListener('click', playF);
    document.getElementById("noteFsharp").addEventListener('click', playFsharp);
    document.getElementById("noteG").addEventListener('click', playG);
    document.getElementById("noteGsharp").addEventListener('click', playGsharp);
    document.getElementById("noteA").addEventListener('click', playA);
    document.getElementById("noteAsharp").addEventListener('click', playAsharp);
    document.getElementById("noteB").addEventListener('click', playB);

    document.getElementById("kickTwoDiv").addEventListener('click', playKick);
    document.getElementById("snareDiv").addEventListener('click', playSnare);
    document.getElementById("engoDivOne").addEventListener('click', playEngoOne);
    document.getElementById("engoDivTwo").addEventListener('click', playEngoTwo);
    document.getElementById("engoDivThree").addEventListener('click', playEngoThree);
    
    document.getElementById("stopKickDiv").addEventListener('click', stopKick);
    document.getElementById("stopSnareDiv").addEventListener('click', stopSnare);
    document.getElementById("stopEngoOneDiv").addEventListener('click', stopEngoOne);
    document.getElementById("stopEngoTwoDiv").addEventListener('click', stopEngoTwo);
    document.getElementById("stopEngoThreeDiv").addEventListener('click', stopEngoThree);
 	

 	console.log(e.target.id);
 

}



function playC()
{
	document.getElementById("sampC").play();

}

function playCsharp()
{
	document.getElementById("sampCsharp").play();

}

function playD()
{
	document.getElementById("sampD").play();

}

function playDsharp()
{
	document.getElementById("sampDsharp").play();

}

function playE()
{
	document.getElementById("sampE").play();

}

function playF()
{
	document.getElementById("sampF").play();

}

function playFsharp()
{
	document.getElementById("sampFsharp").play();

}

function playG()
{
	document.getElementById("sampG").play();

}

function playGsharp()
{
	document.getElementById("sampGsharp").play();

}

function playA()
{
	document.getElementById("sampA").play();

}

function playAsharp()
{
	document.getElementById("sampAsharp").play();

}

function playB()
{
	document.getElementById("sampB").play();

}

function playKick()
{
	document.getElementById("kickTwoSamp").play();

	document.getElementById("kickTwoSamp").loop = true;
}

function stopKick()
{
	document.getElementById("kickTwoSamp").loop = false;
}



function playSnare()
{
	document.getElementById("snareSamp").play();
	document.getElementById("snareSamp").loop = true;
}

function stopSnare()
{
	document.getElementById("snareSamp").loop = false;
}

function playEngoOne()
{
    document.getElementById("engoOneSamp").play();
    document.getElementById("engoOneSamp").loop = true;
}

function stopEngoOne()
{
	document.getElementById("engoOneSamp").loop = false;
}

function playEngoTwo()
{
    document.getElementById("engoTwoSamp").play();
    document.getElementById("engoTwoSamp").loop = true;
}

function stopEngoTwo()
{
	document.getElementById("engoTwoSamp").loop = false;
}

function playEngoThree()
{
    document.getElementById("engoThreeSamp").play();
    document.getElementById("engoThreeSamp").loop = true;
}

function stopEngoThree()
{
	document.getElementById("engoThreeSamp").loop = false;
}




