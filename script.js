let poke = 1;

 const url = `https://pokemon-hub.p.rapidapi.com/${poke}`;

const options = {

    method: 'GET',

    headers: {

        'x-rapidapi-key': '961bad8419msh0500e37e751bc94p169a5cjsnd301b51554b7',

        'x-rapidapi-host': 'pokemon-hub.p.rapidapi.com'

    }

};




async function CallingJson()

{

    try {

        const response = await fetch(url, options);

        const result = await response.json();

       

 

        console.log(result.data[0].name);

        const showMarvel = document.getElementById('content')

 

            const info = `

           

            <div>${result.data[0].name}</div>

   

            `;

            showMarvel.innerHTML += info;




    } catch (error) {

        console.error(error);
    }
}

CallingJson();