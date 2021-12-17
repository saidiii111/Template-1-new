/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navv");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

<script>
function loadlang()
  {
  var lng = document.getElementById("langselector").value;
  var cnt = document.getElementById("contents");
  switch (lng)
    {
    case "en":
      cnt.src = "https://jsfiddle.net/q2nw8o35/";
    break;
    case "fr":
      cnt.src = "https://jsfiddle.net/jmn8c9tj/";
    break;
    }
  }
</script>