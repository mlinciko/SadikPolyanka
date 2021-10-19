$(document).ready(function(){
    $("#box").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
    //замена тега <p> на <span>
    const screenWidth = window.screen.width;
    if(screenWidth < 760)
    {
        var str = '<span></br> в Симферополе</span>'; //it can be anything
        var Obj = document.getElementById('title__city'); //any element to be fully replaced
        if (Obj.outerHTML) { //if outerHTML is supported
            Obj.outerHTML = str; ///it simple replacement of whole element with contents of str var
        }
        else { //if outerHTML is not supported, there is a weird but crossbrowsered trick
            var tmpObj = document.createElement("span");
            tmpObj.innerHTML = ' в Симферополе';
            ObjParent = Obj.parentNode; //Okey, element should be parented
            ObjParent.replaceChild(tmpObj, Obj); //here we placing our temporary data instead of our target, so we can find it then and replace it into whatever we want to replace to
            ObjParent.innerHTML = ObjParent.innerHTML.replace('<span></br> в Симферополе</span>', str);
        }
    }
 });