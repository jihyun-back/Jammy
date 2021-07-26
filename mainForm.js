(function(global) {
    const Main = function(rootDiv){
        this.main = document.getElementById(rootDiv);
    }

    Main.prototype.header = function(){
        const div = document.createElement('div');
        div.setAttribute('id', 'logo');
        div.setAttribute('class', 'logo');
        this.main.appendChild(div);
    }
    global.Main = Main;
})(window)