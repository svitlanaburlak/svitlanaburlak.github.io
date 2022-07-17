const theme = {
    
    init: function(){

        const isDarkThemeOn = localStorage.getItem('theme-dark');
        console.log(isDarkThemeOn);

        //si la clé n'éxiste pas on la crée avec pour valeur par défaut false
        if(isDarkThemeOn === undefined){
            console.log("on a pas trouvé la vaelur");
            localStorage.setItem("theme-dark", "false");
        }

        if(isDarkThemeOn === "true"){
            console.log("switch");
            document.body.classList.toggle("theme-dark");
        }

        const themeBtn = document.querySelector("#theme-switch");
        themeBtn.addEventListener("click", theme.switchTheme);
    },

    switchTheme: function(){
        document.body.classList.toggle("theme-dark");
        // localStorage option theme-dark
                // Si on était en dark-theme
            if(localStorage.getItem("theme-dark") === 'true'){
                 // la fonction switchTheme nous fais basculer en light
                 // il faut mettre à jour la vaelur de theme-dark dans le localStorage
                localStorage.setItem("theme-dark", false);
            }else{
                 // Si on était en theme light
                 // On doit mettre a jour la valeur de dark-theme dans le localstorage
                 localStorage.setItem("theme-dark", true);
            }
    }

}