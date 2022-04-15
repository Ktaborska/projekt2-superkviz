// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky 

const otazkyKviz = [
    {
        obrazek:'obrazky/moncicak.jpg',
        otazka: 'CO JE IKONICKÁ HRAČKA Z 80. LET?',
        poradi:'OTÁZKA 1/3',
        odpovedi: ['Furby','Mončičák','Tamagoči']
        },
    
        {
        obrazek:'obrazky/ovoce.jpg',
        otazka: 'JAKÉ JE KATKY NEJOBLÍBENĚJŠÍ JÍDLO?',
        poradi:'OTÁZKA 2/3',
        odpovedi: ['Houbová omáčka','Palačinky','Steak']
        },
    
        {
        obrazek:'obrazky/pivo.jpg',
        otazka: 'PRO ÚSPĚŠNÉ ABSOLVOVÁNÍ KURZU JE POTŘEBA?',
        poradi:'OTÁZKA 3/3',
        odpovedi:['Stačí dávat pozor na hodině','Mít doma ajťáka','Chodit po kurzu do hospody']
        }
];

let indexOtazky = 0;
let zaznamyOdpovedi = [];
let spravneOdpovedi = [1, 1, 1];

zobrazKviz(indexOtazky);

function zobrazKviz(indexOtazky) {

    if(indexOtazky >= 3){
        zobrazVyhodnoceni();
    }
    else{
        document.querySelector('#poradi').textContent = otazkyKviz[indexOtazky].poradi;

        document.querySelector('#obrazek').src = otazkyKviz[indexOtazky].obrazek;

        document.querySelector('#otazka').textContent = otazkyKviz[indexOtazky].otazka;
        
        let odpovedi = document.querySelector('#odpovedi');
        
        
        for (let i = 0; i < 3; i++){
            odpovedi.children[i].innerHTML = otazkyKviz[indexOtazky].odpovedi[i]
        }  
    }
}

function klikNaOdpoved(indexOdpovedi) {
    indexOtazky++;
    console.log('klik na odpoved po :'+ indexOtazky )
    zaznamyOdpovedi.push(indexOdpovedi);

    zobrazKviz(indexOtazky);
}

function zobrazVyhodnoceni (){
    document.querySelector('.kviz').style.display = 'none';
    document.querySelector('.vysledek').style.display = 'block';
    zpracovaniOdpovedi();
}

function zpracovaniOdpovedi(){
    let vysledek = document.querySelector('#hodnoceni');

    for(let i = 0; i < zaznamyOdpovedi.length; i++){

        console.log('průchod zpracování' + i);
        let h3 = document.createElement('h3');
        let tvojeOdpoved = document.createElement('p');
        let spravnaOdpoved = document.createElement ('p');

       h3.textContent = otazkyKviz[i].otazka;
       tvojeOdpoved.textContent = 'Tvoje odpověď: ' + otazkyKviz[i].odpovedi[zaznamyOdpovedi[i]];

       if (zaznamyOdpovedi[i] === spravneOdpovedi[i]){
           spravnaOdpoved.textContent = 'To je: SPRÁVNĚ'
       }else{
           spravnaOdpoved.textContent = 'To je: ŠPATNĚ'
       }

       vysledek.appendChild(h3);
       vysledek.appendChild(tvojeOdpoved);
       vysledek.appendChild(spravnaOdpoved);
    }
}