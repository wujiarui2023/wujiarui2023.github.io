<?php
$name=$_GET["name"];
switch($name)
{
	case "a":
	echo '<img src="jinju/a.jpeg" width="600" height="500" />'; 
	break;
		case "b":
	echo '<img src="jinju/b.jpeg" width="600" height="500" />'; 
	break;
		case "c":
	echo '<img src="jinju/c.jpeg" width="600" height="500" />'; 
	break;
		case "d":
	echo '<img src="jinju/d.jpeg" width="600" height="500" />'; 
	break;
		case "e":
	echo '<img src="jinju/e.jpeg" width="600" height="500" />'; 
	break;
	default:
	echo '<img src="jinju/no.jpeg" width="520" height="100" />'; 
}
?>