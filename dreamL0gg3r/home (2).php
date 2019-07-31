<!DOCTYPE html>
<html>
<head>
	<title>Dream L0GG3R</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="DreamScrawlerStylesheet.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="dreamScrawlerMainJS.js"></script>
	
    
</head>
<body>
<div id="container">
<nav>
	
</nav>

<h1 id="title">Dream L0GG3R</h1>
<h2></h2>
<p></p>
<div id="formArea">
<form action="insert.php" method="post" name="form_name" id="form_id" class="form_class">
    <h3>Type of Dream:</h3>
    <input type="checkbox" name="Recurring" id="recurringBox" class="checkBoxes">
    <label for="Recurring" class="boxLabels">Recurring Dream</label>
    <br>
    <input type="checkbox" name="Nightmare" id="nightmareBox" class="checkBoxes">
    <label for="Nightmare" class="boxLabels">Nightmare</label>
    <br>
    <input type="checkbox" name="Symbolic" id="symbolicBox" class="checkBoxes">
    <label for="Symbolic"  class="boxLabels">Symbolic</label>
    <br>
    <input type="checkbox" name="Vivid" id="vividBox" class="checkBoxes">
    <label for="Vivid" class="boxLabels">Vivid/Hyper-real</label>
    <br>
    <input type="checkbox" name="Bizzare" id="bizzareBox" class="checkBoxes">
    <label for="Bizzare" class="boxLabels">Bizzare/Strange</label>
    <br>
    <input type="checkbox" name="Paralysis" id="paralysisBox" class="checkBoxes">
    <label for="Paralysis" class="boxLabels">Sleep Paralysis Dream</label>
    <br>
    <input type="checkbox" name="Lucid" id="lucidBox" class="checkBoxes">
    <label for="Lucid" class="boxLabels">Lucid Dream</label>
    <br>
    <input type="checkbox" name="Prophetic" id="propheticBox" class="checkBoxes">
    <label for="Prophetic" class="boxLabels">Prophetic/Syncronistic</label>
    <br>
    <input type="checkbox" name="Spiritual" id="spiritualBox" class="checkBoxes">
    <label for="Spiritual" class="boxLabels">Spiritual/Religious</label>
    <br>
    <br>
    <h4 id="disclaimer">Please refrain from using apostrophes or quotation characters.</h4>
    <br>
    <br>
    <label for="name" class="fieldLabels">Username (20 characters max):</label>
    <br>
    <input type="text" name="name" id="name" class="textFields" maxlength="20">
    <br>
    <br>
    <label for="shortDescription" class="fieldLabels">Short Description (150 characters max):</label>
    <br>
    <input type="text" name="shortDescription" id="shortDesc" class="textFields" maxlength="150">
    <br>
    <br>
    <label for="fulldescription" class="fieldLabels">The Full Story:</label>
    <br>
     <textarea type="text" name="fulldescription" id="fullDesc" class="textFields" maxlength="800" cols="26" rows="20"></textarea>
    <br>
    <br>
    <label for="significants" class="fieldLabels">Significant/prominent person, place or thing:</label>
    <br>
    <input type="text" name="significants" id="significantField" class="textFields" maxlength="33">
    <br>
    
    <br>
    <label for="dateInputField" class="fieldLabels">When was your dream?</label>
    <br>
    <input type="datetime-local" name="dateInputField" class="textFields" id="datetimeField">


    <br>
    <br>
    <button type="submit" id="submitBtn">Submit</button>

</form>
</div>
<br>
<h2>Dreams are l0gg3d below...</h2>

<div id="tableZone">
    <table id="mainTable" width="60%">
    	<tbody>
    	   <thead class="thead">
    <tr>
      <th class="tableData">No.   </th>
      <th class="tableData">Name   </th>
      <th class="tableData">Short Desc.   </th>
      <th class="tableData">Full Description   </th>
      <th class="tableData">DreamDate   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td placeholder="???????" class="tableData">agent63</td>
      <td placeholder="???????" class="tableData">weird dream about flying</td>
      <td placeholder="???????" class="tableData">I am being led onto a plane in a  warehouse with many others. When I board the plane, the takeoff has a lot of turbulence. Somehow the plane flies to another planet</td>
      <td placeholder="???????" class="tableData">01-09-2018 3:00AM</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td placeholder="???????" class="tableData">theGornn</td>
      <td placeholder="???????" class="tableData">dream about apartments</td>
      <td placeholder="???????" class="tableData">I have a dream where I live in a composite apartment of places I lived then starts falling apart usually first in the bathroom.</td>
      <td placeholder="???????" class="tableData">01-08-2018 5:00AM</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td placeholder="???????" class="tableData">alf2047</td>
      <td placeholder="???????" class="tableData">falling dream</td>
      <td placeholder="???????" class="tableData">I have a recurring dream where I am falling endlessly until I wake up.</td>
      <td placeholder="???????" class="tableData">12-11-2017 1:30AM</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td placeholder="???????" class="tableData">anneP</td>
      <td placeholder="???????" class="tableData">Saw best friend when I was a teenager</td>
      <td placeholder="???????" class="tableData">Went to movie with my best friend when I was 16 years old.She refused to talk to me through the whole dream.</td>
      <td placeholder="???????" class="tableData">12-7-2017 2:30AM</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td placeholder="???????" class="tableData">samsonite</td>
      <td placeholder="???????" class="tableData">work dream</td>
      <td placeholder="???????" class="tableData">I have a dream about work at least twice a week, Its really vivid and boring.</td>
      <td placeholder="???????" class="tableData">12-02-2017 3:00AM</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td placeholder="???????" class="tableData">Travis C</td>
      <td placeholder="???????" class="tableData">old band reunion</td>
      <td placeholder="???????" class="tableData">Theres a dream where my old band reunites and none of the gear works and its super embarrassing, haha.</td>
      <td placeholder="???????" class="tableData">1-05-2018 2:00AM</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td placeholder="???????" class="tableData">captain tangerine</td>
      <td placeholder="???????" class="tableData">silly dream</td>
      <td placeholder="???????" class="tableData">I had this dream the other night where I went from room to room in an endless building trying to find the bathroom. Never found it.</td>
      <td placeholder="???????" class="tableData">1-09-2018 4:40AM</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td placeholder="???????" class="tableData">Richard W</td>
      <td placeholder="???????" class="tableData">Plane crash</td>
      <td placeholder="???????" class="tableData">When I was very young and lived in Seattle I had a reoccurring dream that was also a nightmare. I had dreamt that I had been awakened buy a very low sounding jet engine that I realized was way too low in our neighborhood. So I ran to my window and looked out and saw a 727 airliner sideways on fire.</td>
      <td placeholder="???????" class="tableData">10-14-1963 9:47AM</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td placeholder="???????" class="tableData">pSafeT</td>
      <td placeholder="???????" class="tableData">Had a dream my friend killed someone</td>
      <td placeholder="???????" class="tableData"> at some point he takes me to a room where he killed someone for fun. It was really disturbing.</td>
      <td placeholder="???????" class="tableData">10-15-2017 1:30AM</td>
    </tr>
     <tr>
      <th scope="row">9</th>
      <td placeholder="???????" class="tableData">TheA</td>
      <td placeholder="???????" class="tableData">Falling to death but reborn into a lucid and free being</td>
      <td placeholder="???????" class="tableData">My mate and I are play fighting down the sidewalk in downtown. I see that on my side is a drop, as if the city has dug a pit to start a foundation for a new development. I get annoyed in the way I do when he crowds me towards my side of the bed or takes too much of the blanket frivolously. </td>
      <td placeholder="???????" class="tableData">0-0-0000 0:00AM</td>
    </tr>
    	</tbody>
    </table>
	
</div>

<div id="footer">
<p>designed by Mike Warden</p>
</div>
</div>
</body>
</html>