const ss = require('simple-statistics')

function media(data) {
    let Temperature = [];
    let Moustre = []
    for (let i = 0; i < data.length; i++) {
        Temperature.push(Number(data[i].temperature))
        Moustre.push(Number(data[i].moustre));
    };
    console.log(Temperature);
    let temp = analitcTemperature(Temperature);
    let umid = analitcUmidade(Moustre);
    const obj = []
    obj.push({temperatura: temp}, {umidade: umid})
    return obj
};

function analitcTemperature(data) {
    let media = calcMedia(data);
    let desvioPadraoAmostra = calcDesvioPadrao(data).toFixed(2);
    return { media, desvioPadraoAmostra };
};



function analitcUmidade(data) {
    let media = calcMedia(data);
    let desvioPadraoAmostra = calcDesvioPadrao(data).toFixed(2);
    return { media, desvioPadraoAmostra };
};

function calcMedia(data) {
    let media = ss.mean(data);
    console.log('media', media);
    return media;
}

function calcDesvioPadrao(data) {
    let desvioPadrao = ss.sampleStandardDeviation(data);
    console.log('Desvio Padrão', desvioPadrao);
    return desvioPadrao;
}

module.exports = { media }