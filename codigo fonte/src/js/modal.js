var modalWrap = null;

const showModal = (title, description) => {
    if (modalWrap !== null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog mobile">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h3 class="modal-title">Informações</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Andre Luiz A. Do Nascimento, D4548B9</p>
            <p>Alex Oliveira Ferreira, N2094E2</p>
            <p>Filipi Vinicius Ventura Silva, D483DE0</p>
            <p>Kaique Henrique S. De Souza, N2135D9</p>
            <p>Lucas Vinicius Santos de Souza, N2135F5</p>
            <br>
            <p>Sistemas de Informações - 8 Semestre</p>
          </div>
        </div>
      </div>
    </div>
  `;


    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

const showSolar = (title, description) => {
    if (modalWrap !== null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog mobile">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h3 class="modal-title">Informações sobre Energia Solar</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p> Energia eletromagnética cuja fonte é o Sol, gerando energia elétrica e o aquecimento solar da água, caracterizando-se por transformar-se em energia térmica ou elétrica. 
                Há dois processos de produção de energia elétrica: heliotérmico e fotovoltaico. O primeiro processo consiste em converter a radiação solar em energia térmica, e posteriormente em elétrica, já o segundo processo consiste na conversão direta da radiação para a energia elétrica. No processo da energia heliotérmica há coletores, onde os mesmos captam radiação solar e a convertem em calor, transferindo-o para um fluído, neles há uma superfície refletora, na qual direciona a radiação para o foco, onde está localizado o receptor. 
                No processo fotovoltaico, as células fotovoltaicas são feitas normalmente de silício, material semicondutor, quando a mesma é exposta a luz, ocorre a absorção dos fótons, nisso os elétrons livres são levados pelo material semicondutor até serem puxados por um campo elétrico, posteriormente, os elétrons são levados para fora da célula, ficando disponíveis para serem usados como energia. 
                Dentre as vantagens da energia solar há a não emissão de dióxido de enxofre, óxidos de nitrogênio e dióxido de carbono, presentes no uso de combustíveis fósseis. 
            </p>
            
            <br>
            <p>Sistemas de Informações - 8 Semestre</p>
          </div>
        </div>
      </div>
    </div>
  `;


    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

const showEolica = (title, description) => {
    if (modalWrap !== null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog mobile">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h3 class="modal-title">Informações sobre Energia Eólica</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
            Sua produção é feita através da cinética do vento e do aquecimento eletromagnético do sol, a energia proveniente do vento é transformada em muitos casos em energia mecânica por moinhos e cataventos, ou em elétrica por turbinas eólicas. 
\tA energia é produzida quando ocorre o aquecimento das camadas de ar, criando assim uma variação de gradientes de pressão nas massas de ar, a turbina eólica sendo responsável pela transformação da energia cinética em mecânica, realiza essa transformação por meio da rotação de pás, com isso e a ajuda de um gerador, ocorre a geração da energia elétrica.
\tAlguns componentes principais da turbina eólica são: 
•\tAnemômetro: medidor de intensidade e velocidade do vento;
•\tBiruta: capta a direção do vento;
•\tPás: captam o vento;
•\tGerador: responsável pela conversão da energia mecânica em elétrica;
Dentre as vantagens, uma que caracteriza a energia eólica é que a mesma não emite gases do efeito estufa e não produz resíduos ao gerar eletricidade, além de ser considerada uma energia inesgotável, não havendo custos na obtenção da matéria prima.

            </p>
            
            <br>
            <p>Sistemas de Informações - 8 Semestre</p>
          </div>
        </div>
      </div>
    </div>
  `;


    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}