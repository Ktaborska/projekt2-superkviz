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

// Dále budeš potřebovat další proměnné - jaké?
let indexOtazky = 0;

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
zobrazOtazku(indexOtazky)
function zobrazOtazku(indexOtazky) {
    document.querySelector('#poradi').textContent = otazkyKviz[indexOtazky].poradi;

    document.querySelector('#obrazek').src = otazkyKviz[indexOtazky].obrazek;

    document.querySelector('#otazka').textContent = otazkyKviz[indexOtazky].otazka;
    
    let odpovedi = document.querySelector('#odpovedi');
    
    
    for (let i = 0; i < 3; i++){
        odpovedi.children[i].innerHTML = otazkyKviz[indexOtazky].odpovedi[i]
    }  
}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {
    indexOtazky++;
    zobrazOtazku(indexOtazky);
}



// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}