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

zobrazKviz(indexOtazky);

function zobrazKviz(indexOtazky) {

    if(indexOtazky >= 3){
        zobrazVyhodnoceni();
        return false;
    }
    
    document.querySelector('#poradi').textContent = otazkyKviz[indexOtazky].poradi;

    document.querySelector('#obrazek').src = otazkyKviz[indexOtazky].obrazek;

    document.querySelector('#otazka').textContent = otazkyKviz[indexOtazky].otazka;
    
    let odpovedi = document.querySelector('#odpovedi');
    
    
    for (let i = 0; i < 3; i++){
        odpovedi.children[i].innerHTML = otazkyKviz[indexOtazky].odpovedi[i]
    }  
}

function klikNaOdpoved(indexOdpovedi) {
    indexOtazky++;
    zobrazKviz(indexOtazky);

    zaznamyOdpovedi.push(indexOdpovedi);
    console.log(indexOdpovedi)
    
}

function zobrazVyhodnoceni (){
    document.querySelector('.kviz').style.display = 'none';
    document.querySelector('.vyhodnoceni').style.display = 'block';
}