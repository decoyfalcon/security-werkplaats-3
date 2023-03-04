async function get_classes(){
    try {
        const response = await fetch('../api/klas');
        const klas = await response.json();
        
        console.log(`${JSON.stringify(klas)}`);

        fill_table(klas);

    } catch(error) {
        console.log(error);
    }
}

function fill_table(obj){
    const table = document.getElementById('table');
    const klassen = obj.klassen;
    const th = document.createElement('theader');
    const tb = document.createElement('tbody');
    const thr = document.createElement('tr');
    const thh = document.createElement('th');

    thh.textContent = "klas";

    th.appendChild(thr);
    thr.appendChild(thh);

    
    table.appendChild(th);
    table.appendChild(tb);
    
    for(const klas of klassen){
        
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + klas + '</td>';
        tb.appendChild(tr);
    }
}

get_classes();