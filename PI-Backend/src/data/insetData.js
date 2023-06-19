const axios = require('axios');

async function getDataFromThingSpeak(url) {
    try {
        const response = await axios.get(url);
        const data = response.data.feeds;
        
        const obj = data.map((item) => ({
            temperature: parseFloat(item.field1),
            moustre: parseFloat(item.field2),
            dateInsert: item.created_at
        }))
        // console.log('Dados obtidos', obj);
        return obj
    } catch (error) {
        console.error('Erro ao obter dados: ', error.message);
    }
};

function fetchEvery15minutes() {
    const url = `https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=1`;
    getDataFromThingSpeak(url)
        .then((item) => {
            // console.log(item);
            insertDataApi(item)
            console.log('Dados buscados com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
        });
}

function insertDataApi(data) {
    console.log('chegou',data);
    data.forEach((item) => {
        axios.post('http://localhost:8005/data-iot', item);
    })
   
}

fetchEvery15minutes();
setInterval(fetchEvery15minutes, 15 * 60 * 1000); 
