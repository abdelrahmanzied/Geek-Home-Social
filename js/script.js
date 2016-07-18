/*global $, alert, console*/

$('.handle').on('click', function(){
    $('.user-nav').toggleClass('showing');
});

$('.handle').on('click', function(){
    $('.handle').toggleClass('active-handle');
});

//Site Nav
$('.r-wp ul li').click(function(){
    $(this).addClass('active-link').siblings().removeClass('active-link');
});

//post Rate
$('.post-rate .love').click(function(){
    $(this).toggleClass('active-love');
});

$('.post-rate .comments').click(function(){
    $(this).toggleClass('active-comments');
});

$('.post-rate .share').click(function(){
    $(this).toggleClass('active-share');
});

$('.post-rate .bookmark').click(function(){
    $(this).toggleClass('active-bookmark');
});

//post comments 

$('.comments').on('click', function(){
    $('.post-comments').toggleClass('showing');
});

//The Comment Rate

$('.thecomment-rate .love').click(function(){
    $(this).toggleClass('active-love');
});

$('.thecomment-rate .reply').click(function(){
    $(this).toggleClass('active-reply');
});

//Comment Replys

$('.thecomment-rate .reply').on('click', function(){
    $('.comment-replys').toggleClass('showing');
});