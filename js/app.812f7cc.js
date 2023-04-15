function n(text, type, time, closein) {
    timen = (time) ? time : 3500;
    bdsd = (closein) ? closein : true;
    new Noty({
        text        : text,
        type        : type,
        dismissQueue: true,
        layout      : 'bottomRight',
        theme       : 'mint',
        progressBar: true,
        timeout: timen,
        killer: bdsd
    }).show();
}

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  $('body').addClass('stops');
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
  $('body').removeClass('stops');
});

$(function(){
	$('.profile-btn').click(function(event) {
		$('body').addClass('stops');
		$('.pm').addClass('open');
	});
});

$(function(){
	$('.pm_close').click(function(event) {
		$('.pm').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.BonusButton-header-btn').click(function(event) {
		$('body').addClass('stops');
		$('.bm').addClass('open');
	});
});

$(function(){
	$('.bm_close').click(function(event) {
		$('.bm').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.Wallet_withdraw').click(function(event) {
		$('body').addClass('stops');
		$('.wmod').addClass('open');
	});
});

$(function(){
	$('.wmod_close').click(function(event) {
		$('.wmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.Wallet_payment').click(function(event) {
		$('body').addClass('stops');
		$('.pmod').addClass('open');
	});
});

$(function(){
	$('.pmod_close').click(function(event) {
		$('.pmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
	$('.invest--btn-banner').click(function(event) {
		$('body').addClass('stops');
		$('.pmod').addClass('open');
	});
});

$(function(){
	$('.pmod_close').click(function(event) {
		$('.pmod').removeClass('open');
		$('body').removeClass('stops');
	});
});

$(function(){
$('.button-transferBonus').click(function(event) {
	if($('.bonusValue--input').val() < 100){
		n('Минимальная сумма обмена 100', 'error');
	}
	if($('.bonusValue--input').val() > 5000){
		n('Максимальная сумма обмена 5000', 'error');
	}
});
    var bonusValue = $('.bonusValue--input input').val();
	$('.rRubValue--input input').html(bonusValue); 
});

function choosePay(payId, e) {
    $('.modal_payment__body-method').removeClass('pay_active');
    $(e).addClass('pay_active');
}