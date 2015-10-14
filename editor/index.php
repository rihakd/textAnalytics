<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Text Analytics</title>
	
	<link rel="stylesheet" type="text/css" href="style.css" />	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script> 

	<!--[if lt IE 7]>
		<style type="text/css">
			#wrapper { height:100%; }
		</style>
	<![endif]-->
	
	
</head>

<body>
	<div id="wrapper">
		
		<div id="header">
			<h2>Text Analytics</h2>
		</div><!-- #header -->
		<div id="content">
			<div id="panel">
				<script>
					var wordArray = ['There', 'paragraph', 'stored',
					'going', 'This', 'is', 'now', 'may', 'first', 
					'need'];
					for (i = 0; i < wordArray.length; i++) {
						addWordEntry(wordArray[i]);
					}
				</script>
		  	</div>
		  	<div id="text" contenteditable="true">
			  	<?php

					$myfile = fopen("./../uploads/test.txt", "r") or die("Unable to open file!");
					// Output one character until end-of-file
					echo "<p><span class='word'>";
					while(!feof($myfile)) {
						$char = fgetc($myfile);
						if ($char == "\n") {
							echo "</p><p><span class='word'>";
						} else if ($char == " ") {
							echo "</span> <span class='word'>";
						} else {
							echo $char;
						}
					}
					echo "</span></p>";
					fclose($myfile);
				?>
			</div>
			<div id="navigation">
		  		<button class="prev btn btn-default btn-lg">
		  			<span class="glyphicon glyphicon-menu-left"></span>
		  		</button>
		  		<button class="next btn btn-default btn-lg">
		  			<span class="glyphicon glyphicon-menu-right"></span>
		  		</button>
		  	</div>
		  	
		</div><!-- #content -->
		
		<div id="footer">
			rihak.d@gmail.com
		</div><!-- #footer -->
		
	</div><!-- #wrapper -->
	
</body>

</html>