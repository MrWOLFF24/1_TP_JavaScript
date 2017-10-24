(function () {
    window.onload = function init() {
        var pageModules;
        // function getModules
        function getPageModules() {
            var header = document.getElementById("header");
            var aside = document.getElementById("aside_options");
            var content = document.getElementById("content");
            var footer = document.getElementById("footer");
            return pageModules = [header, aside, content, footer];
        }
        getPageModules();

        // function styliserModule
        function styliserModule(num, color, bg) {
           pageModules[num].style.color = color;
           pageModules[num].style.backgroundColor = bg;
        }
        styliserModule(0, '#ecf0f1', '#1abc9c');
        styliserModule(1, '#e74c3c', '#95a5a6');
        styliserModule(2, '#34495e', '#bdc3c7');
        styliserModule(3, '#9b59b6', '#ecf0f1');

        // function getModuleInfos
        function getModuleInfos(num) {
            return {
                id: pageModules[num].id,
                tagName: pageModules[num].tagName,
                className: pageModules[num].className,
                infoDOM: pageModules[num].getBoundingClientRect()
            }
        }
        console.log(getModuleInfos(3));
    }
}());