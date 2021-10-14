const spBtn = document.querySelectorAll('.spBtn');  
for(let element of spBtn) {
    element.onclick = function() {
        if(element.id === "babyBioBtn") {
            let text = document.getElementById('infoText');
            if(text.innerHTML == ''){
                text.innerHTML = '<h6>BabyBio</h6><br/><p>Tag din baby med i Biografen! Med BabyBio tilbyder vi den perfekte biografoplevelse til dig, der enten er på barsel eller har lyst til at se film som nybagt forældre. Til BabyBio vises aktuelle film med dæmpet belysning og lavere lydniveau end normalt, så du kan have din baby med ind i salen. Udenfor salen vil der være mulighed for opstilling af din barnevogn. Du skal kun købe billet til dig selv, din baby har selvfølgelig gratis adgang.</p>'; 
            }else{
                text.innerHTML = ''
            }
        }
        if(element.id === "schoolBioBtn") {
            let text = document.getElementById('infoText');
            if(text.innerHTML == ''){
                text.innerHTML = '<h6>SkoleBio</h6><br/><p>En biograffilm er oplagt at inddrage i undervisning i skoler og gymnasier – eller som fritidsaktiviteter i klub og SFO. Rigtig mange film er velegnede til undervisningsbrug, og filmisk fremstilling er en stærk måde at gøre fortællinger, temaer og sprog levende for skolens elever. Udover at film naturligvis kan benyttes som materiale til skolernes medieundervisning, så er der i fag som Dansk, Samfundsfag, Historie og sprogfag rig mulighed for at få belyst problematikker, historier og temaer via film.</p>'; 
            }else{
                text.innerHTML = ''
            }
        }
        if(element.id === "knitBioBtn") {
            let text = document.getElementById('infoText');
            if(text.innerHTML == ''){
                text.innerHTML = '<h6>StrikkeBio</h6><br/><p>Elsker du at strikke til en god film? – Så er du landet det helt rigtige sted! StrikkeBio er for dig, der godt kan lide at have gang i pindene, mens en god film kører på det store lærred. Til StrikkeBio vises filmen med en smule lys i salen, så du ikke taber maskerne. StrikkeBio præsenteres i samarbejde med bloggen Rock&Roll Hausfrau. Vi glæder os til at se dig og strikkepindene i Biografen!</p>'; 
            }else{
                text.innerHTML = ''
            }
        }
        if(element.id === "birthdayBioBtn") {
            let text = document.getElementById('infoText');
            if(text.innerHTML == ''){
                text.innerHTML = '<h6>FødselsdagsBio</h6><br/><p>Hold børnefødselsdag i Biografen Hold børnefødselsdag med en god børnefilm! Tilbuddet gælder aktuelle film, og skal bestilles senest 10 dage før fødselsdagen skal afholdes. Når du vælger at holde din børnefødselsdag i Nordisk Film Biografer, vi pynter op i loungeområdet i bedste fødselsdagsstil og vores søde vært vil tage imod jer. Inden filmen serverer vi saft og kagemand, samt giver en rundvisning i biografen. Selskabet skal være min. 10 personer. Tilbuddet gælder børn i alderen fra 4 – 11 år.</p>'; 
            }else{
                text.innerHTML = ''
            }
        }
    }
}