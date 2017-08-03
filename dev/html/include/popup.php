<div class="popupWrapper tncPop mfp-with-anim mfp-hide">
	<div class="popTncWrapper">
		<h1>TNC</h1>
		<div class="tncContentWrapper">
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
	<a href="javascript:void(0);" class="popClose"></a>
</div>

<div class="popupWrapper alertPop mfp-with-anim mfp-hide">
	<div class="popAlertWrapper">
		<p></p>
	</div>
	<a href="javascript:void(0);" class="popClose"></a>
</div>


<!-- pop gallery -->
<div class="popupSection__gallery mfp-with-anim mfp-hide">
	<div class="popupSection__content">

		<div class="slick__display__wrapper">
			<?php foreach ($galleries as $gallery){ ?>
			<div class="slick__display__item">
				<img class="img100" src="<?=$gallery['image']?>" alt=""/>
			</div>
			<?php } ?>
		</div>

		<div class="slick__thumb__wrapper">
			<?php foreach ($galleries as $gallery){ ?>
			<div class="slick__thumb__item">
				<div class="slick__thumb__item__inner">
					<div class="abs__wrapper">
						<img class="img100" src="<?=$gallery['thumb']?>" alt=""/>
					</div>
				</div>
			</div>
			<?php } ?>

		</div>

	</div>
	<a href="javascript:void(0);" class="btn__popClose"></a>
</div>
