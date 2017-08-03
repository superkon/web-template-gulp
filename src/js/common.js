var gEase = "Power3.easeInOut";
var gTimeUnit = 0.25;
var mResponsive = null;

/********** hideLoading **********/
$(window).on('load',function(){

});

function common_fn()
{
	$("body").removeClass("preload");

	/********** setting **********/
	//detectBroswer();
	preventCss3Transition();

	/********** responsive **********/
	mResponsive = new responsive({
		layoutSize : [0, 760, 1200],
		layoutType: ["mobile", "tablet", "desktop"]
	});

	$(document).on('responsive',function(){
		preventCss3Transition();
	});

	/********** popup **********/
	closePop();

	$('.tnc').on('click',function(){
		popup($('.popupWrapper.tncPop'),{
			mainClass: 'mfp-slide-bottom'
		});
	});
}

function hideLoadingCallback()
{
	//popupAlert({msg: "error message"});
}
