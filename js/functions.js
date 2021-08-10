$(function(){
    $('.vertical-nav-btn').click(function(){
        $(this).toggleClass('active');

        $('.vertical-nav').toggleClass('active');

        $('.vertical-nav-overlay').toggleClass('active');

        return false;
    })
    $(document).mouseup(function (e){
        var container = $(".vertical-nav-btn");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.removeClass('active');
            $('.vertical-nav-overlay').removeClass('active');
            $('.vertical-nav').removeClass('active');
        }
    });
});
function CopyLink()
{
    try {
        var copyText = "https://kusb.github.io/anigrum/";
        navigator.clipboard.writeText(copyText);
        console.log('Link was copy)))');
        alert("Ссылка скопирована в буфер обмена)\nI love you :3 ");
    }
    catch (err) {
    console.log('Sorry, boss, i cant copy error:\n', err);
    alert("Что-то пошло не так, ссылку не удалось скопировать(((\nПрости меня, юзверь");
    }
}