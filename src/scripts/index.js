function abrirRotas() {
    // Base da URL
    const urlBase = "https://envios.adminml.com/logistics/monitoring-distribution/detail/";

    // Captura o valor da caixa de entrada
    const rotasInput = document.getElementById("rotas").value;

    // Divide os números de rota por linha
    const rotas = rotasInput.split("\n");

    // Abrir cada rota imediatamente sem delay
    rotas.forEach(function(rota) {
        const urlCompleta = urlBase + rota.trim(); 
        if (rota.trim()) {
            // Abre cada URL em uma nova aba
            window.open(urlCompleta, '_blank');
        }
    });
    document.getElementById("rotas").value = '';
}

function abrirPacotes() {
    // Base da URL
    const urlBase = "https://envios.adminml.com/logistics/package-management/package/";

    // Captura o valor da caixa de entrada
    const pacotesInput = document.getElementById("pacotes").value;

    // Divide os números de pacotes por linha
    const pacotes = pacotesInput.split("\n");

    // Abrir cada pacote imediatamente sem delay
    pacotes.forEach(function(pacote) {
        const urlCompleta = urlBase + pacote.trim();
        if (pacote.trim()) {
            // Abre cada URL em uma nova aba
            window.open(urlCompleta, '_blank');
        }

       
    });
    document.getElementById("pacotes").value = '';
}

function abrirMotoristas() {
    // Base da URL
    const urlBase = "https://envios.adminml.com/logistics/provider-management/drivers/edit/";

    // Captura o valor da caixa de entrada
    const motoristasInput = document.getElementById("motoristas").value;

    // Divide os números de motoristas por linha
    const motoristas = motoristasInput.split("\n");

    // Abrir cada motorista imediatamente sem delay
    motoristas.forEach(function(motorista) {
        const urlCompleta = urlBase + motorista.trim();
        if (motorista.trim()) {
            // Abre cada URL em uma nova aba
            window.open(urlCompleta, '_blank');
        }

       
    });
    document.getElementById("motoristas").value = '';
}

function abrirPlacas() {
    // Base da URL
    const urlBase = "https://www.tabelafipebrasil.com/placa?placa=";

    // Captura o valor da caixa de entrada
    const placasInput = document.getElementById("placas").value;

    // Divide os números de placas por linha
    const placas = placasInput.split("\n");

    // Abrir cada placa imediatamente sem delay
    placas.forEach(function(placa) {
        const urlCompleta = urlBase + placa.trim();
        if (placa.trim()) {
            // Abre cada URL em uma nova aba
            window.open(urlCompleta, '_blank');
        }

       
    });
    document.getElementById("placas").value = '';
}
