<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style language="javascript">
function get_s() {
	var url;
url = window.location.host;
return "https://"+ ulr;
    }
</style>
</head>
<body>
<?php
$name = @$_POST['name'];
echo "<center><h1>", $name,"感谢您填写此问卷<br>我们会尽量采取您的意见<br></h1><a href='javascript:get_s();'>返回首页</a></center>";
?>
</body>
</html>