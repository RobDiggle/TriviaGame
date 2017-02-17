
  	setTimeout(fiveSeconds, 5000);
    setTimeout(tenSeconds, 10000);
    setTimeout(fifteenSeconds, 15000);
    setTimeout(twentySeconds, 20000);
    setTimeout(twentyFiveSeconds, 25000);
    setTimeout(thirtySeconds, 30000);
    setTimeout(thirtyFiveSeconds, 35000);
    setTimeout(fortySeconds, 40000);
    setTimeout(fortyFiveSeconds, 45000);
    setTimeout(fiftySeconds, 50000);
    setTimeout(fiftyFiveSeconds, 55000);
    setTimeout(sixtySeconds, 60000);
    setTimeout(sixtyFiveSeconds, 65000);
    setTimeout(seventySeconds, 70000);
    setTimeout(seventyFiveSeconds, 75000);
    setTimeout(eightySeconds, 80000);
    setTimeout(eightyFiveSeconds, 85000);
    setTimeout(ninetySeconds, 90000);
    setTimeout(ninetyFiveSeconds, 95000);
    setTimeout(oneHundredSeconds, 100000);
    setTimeout(oneHundredFiveSeconds, 105000);
    setTimeout(oneHundredTenSeconds, 110000);
    setTimeout(oneHundredFifteenSeconds, 115000);
    setTimeout(oneHundredTwentySeconds, 120000);


    function fiveSeconds() {$("#imgCent").html('<img src="assets/images/box2.jpg" height="350" width="400"/>');}

    function tenSeconds() {$("#imgCent").html('<img src="assets/images/box3.jpg" height="350" width="400"/>');}

    function fifteenSeconds() {$("#imgCent").html('<img src="assets/images/box4.jpg" height="350" width="400"/>');}

    function twentySeconds() {$("#imgCent").html('<img src="assets/images/box5.jpg" height="350" width="400"/>');}

    function twentyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box6.jpg" height="350" width="400"/>');}

    function thirtySeconds() {$("#imgCent").html('<img src="assets/images/box7.jpg" height="350" width="400"/>');}

    function thirtyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box8.jpg" height="350" width="400"/>');}

    function fortySeconds() {$("#imgCent").html('<img src="assets/images/box9.jpg" height="350" width="400"/>');}

    function fortyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box10.jpg" height="350" width="400"/>');}

    function fiftySeconds() {$("#imgCent").html('<img src="assets/images/box11.jpg" height="350" width="400"/>');}

    function fiftyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box12.jpg" height="350" width="400"/>');}

    function sixtySeconds() {$("#imgCent").html('<img src="assets/images/box13.jpg" height="350" width="400"/>');}

    function sixtyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box2.jpg" height="350" width="400"/>');}

    function seventySeconds() {$("#imgCent").html('<img src="assets/images/box3.jpg" height="350" width="400"/>');}

    function seventyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box4.jpg" height="350" width="400"/>');}

    function eightySeconds() {$("#imgCent").html('<img src="assets/images/box5.jpg" height="350" width="400"/>');}

    function eightyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box6.jpg" height="350" width="400"/>');}

    function ninetySeconds() {$("#imgCent").html('<img src="assets/images/box7.jpg" height="350" width="400"/>');}

    function ninetyFiveSeconds() {$("#imgCent").html('<img src="assets/images/box8.jpg" height="350" width="400"/>');}

    function oneHundredSeconds() {$("#imgCent").html('<img src="assets/images/box9.jpg" height="350" width="400"/>');}

    function oneHundredFiveSeconds() {$("#imgCent").html('<img src="assets/images/box10.jpg" height="350" width="400"/>');}

    function oneHundredTenSeconds() {$("#imgCent").html('<img src="assets/images/box11.jpg" height="350" width="400"/>');}

    function oneHundredFifteenSeconds() {$("#imgCent").html('<img src="assets/images/box12.jpg" height="350" width="400"/>');}

    function oneHundredTwentySeconds() {$("#imgCent").html('<img src="assets/images/box13.jpg" height="350" width="400"/>');}

    var trueCount = 0;
    var falseCount = 0;

    function timeUp()
    {
      var shift = document.getElementById('questions');
      questions.innerHTML = "You got this many questions right: " + trueCount + "    You got this many questions wrong:" + falseCount;
    }

    setTimeout(timeUp, 120000);