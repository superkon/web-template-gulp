<!DOCTYPE html>
<html ng-app xmlns="http://www.w3.org/1999/xhtml" lang="zh-hk">
	<head>
		<?php include "include/meta.php";?>
		<link rel="stylesheet" href="../dev/css/vendor.min.css">
		<link rel="stylesheet" href="../dev/css/app.min.css">
	</head>

	<body class="preload" ontouchstart="" data-lang="sGuide">
		<div class="wrapper skon__styleguide">
      <?php include"include/loading.php" ?>

			<div class="mainContentWrapper">

				<div class="commonBox" data-type="typography">

					<div class="commonBox__header" data-type="bottomline">
						<span class="commonBox__num">01</span>
						<h1>Typography</h1>
					</div>

					<div class="commonBox__content">

						<div class="commonBox__subHeader">
							<span class="commonBox__num">01-1</span>
							<p class="subTitle">Font Families</p>
						</div>

						<div class="commonBox__innerContent tabletGrid__wrapper">

							<div class="tGrid__3-12_d tGrid__3-12_t tGrid__3-12_m">
								1
							</div>
							<div class="tGrid__3-12_d tGrid__3-12_t tGrid__3-12_m">
								2
							</div>
							<div class="tGrid__3-12_d tGrid__3-12_t tGrid__3-12_m">
								3
							</div>

						</div>

						<div class="commonBox__innerContent">

							<div class="typography__item middle">
								<div class="cGrid__3-12">
									a
								</div><div class="cGrid__6-12 colOffset__3-12">
									a
								</div><div class="cGrid__6-12 colOffset__1-12">
									a
								</div><div class="cGrid__6-12 colOffset__1-12">
									a
								</div>
							</div>

							<!--
								<div class="coGrid-1-4">
									<h3>Font Family:</h3>
									<p class="playfair">Play Fair</p>
								</div><div class="coGrid-1-4">
									<h3>Font Style:</h3>
									<p class="playfair" style="font-weight:400">Normal 400</p>
									<p class="playfair" style="font-weight:400; font-style: italic">Normal 400, italic</p>
									<p class="playfair" style="font-weight:700">Bold 700</p>
									<p class="playfair" style="font-weight:900">Ultra-Bold 900</p>
								</div><div class="coGrid-2-4">
									<div class="displayType">
										<span class="ghost">
										</span><span class="vaMiddle">
											<span class="superLarge playfair">Aa</span>
										</span>
									</div>
								</div>
							</div>-->

						</div>

					</div>

					<!-- http://scg.ar-ch.org/ -->
					<!-- color Generator -->
					<!-- https://codepen.io/baudoin/pen/HdliD -->

					<!-- <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p> -->
					<!-- <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p> -->

					<!-- <p class="lighter">Lighter</p>
					<p class="light">Light</p>
					<p>Normal</p>
					<p class="dark">Dark</p>
					<p class="darker">Darker</p> -->

				</div>

			</div>

		</div>

		<?php include"include/popup.php" ?>

		<script src="../dev/js/vendor.min.js"></script>
		<script src="../dev/js/app.min.js"></script>



		</script>

		<script type="text/javascript">
			$(document).ready(init_fn);

			function init_fn(pEvent)
			{
				common_fn();
				//colorGenerator();
			}

			// function colorGenerator()
			// {
			// 	$('p').each(function(){
			// 	  var rgb = $(this).css('color');
			// 	  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			// 	    function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
			// 	  rgb = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
			//
			// 	  $(this).append(": "+rgb);
			// 	});
			// }

			// function ColorLuminance(hex, lum) {
			//
			// 	// validate hex string
			// 	hex = String(hex).replace(/[^0-9a-f]/gi, '');
			// 	if (hex.length < 6) {
			// 		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
			// 	}
			// 	lum = lum || 0;
			//
			// 	// convert to decimal and change luminosity
			// 	var rgb = "#", c, i;
			// 	for (i = 0; i < 3; i++) {
			// 		c = parseInt(hex.substr(i*2,2), 16);
			// 		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			// 		rgb += ("00"+c).substr(c.length);
			// 	}
			//
			// 	return rgb;
			// }

			// function LightenDarkenColor(col, amt) {
			//
			//     var usePound = false;
			//
			//     if (col[0] == "#") {
			//         col = col.slice(1);
			//         usePound = true;
			//     }
			//
			//     var num = parseInt(col,16);
			//
			//     var r = (num >> 16) + amt;
			//
			//     if (r > 255) r = 255;
			//     else if  (r < 0) r = 0;
			//
			//     var b = ((num >> 8) & 0x00FF) + amt;
			//
			//     if (b > 255) b = 255;
			//     else if  (b < 0) b = 0;
			//
			//     var g = (num & 0x0000FF) + amt;
			//
			//     if (g > 255) g = 255;
			//     else if (g < 0) g = 0;
			//
			//     return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
			//
			// }

			</script>

	</body>
</html>
