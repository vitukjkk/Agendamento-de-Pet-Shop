// DEFININDO VARIÁVEIS
const divAgendamentos = document.querySelector('.divAgendamentos')

// CRIANDO ELEMENTOS
const divNewAgendamento = document.createElement('div')
const h1AgendeAtendimento = document.createElement('h1')
const pInfoAtendimento = document.createElement('p')
const labelNomeTutor = document.createElement('label')
const inputNomeTutor = document.createElement('input')
const labelNomePet = document.createElement('label')
const inputNomePet = document.createElement('input')
const labelNumeroPhone = document.createElement('label')
const inputNumeroPhone = document.createElement('input')
const labelDescricao = document.createElement('label')
const inputDescricao = document.createElement('input')
const labelData = document.createElement('label')
const inputData = document.createElement('input')
const labelHora = document.createElement('label')
const inputHora = document.createElement('input')
const buttonAgendar = document.createElement('button')
const labelErro = document.createElement('label')

// DEFININDO CONTENT
h1AgendeAtendimento.textContent = 'Agende um atendimento'
pInfoAtendimento.textContent = 'Preencha os dados do cliente para realizar o agendamento'
labelNomeTutor.textContent = 'Nome do tutor'
labelNomePet.textContent = 'Nome do pet'
labelNumeroPhone.textContent = 'Telefone'
labelDescricao.textContent = 'Descrição do serviço'
labelData.textContent = 'Data'
labelHora.textContent = 'Hora'
buttonAgendar.textContent = 'AGENDAR'

// DEFININDO ESTILOS
// DIV
divNewAgendamento.style.zIndex = 10
divNewAgendamento.style.position = 'absolute'
divNewAgendamento.style.top = 0
divNewAgendamento.style.margin = '5rem'
divNewAgendamento.style.padding = '1rem'
divNewAgendamento.style.left = 0
divNewAgendamento.style.backgroundColor = '#282828'
divNewAgendamento.style.textAlign = 'left'
divNewAgendamento.style.borderRadius = '.4rem'

// INPUT
let inputs = [
    inputNomeTutor, 
    inputNomePet,
    inputNumeroPhone,
    inputDescricao,
    inputData,
    inputHora
]

for(let i = 0; i < inputs.length; i++) {
    inputs[i].style.color = 'var(--content-primary)'
    inputs[i].style.backgroundColor = '#282828'
    inputs[i].style.border = '1px solid var(--content-secondary)'
    inputs[i].style.borderRadius = '.2rem'
    inputs[i].style.width = '100%'
    inputs[i].style.height = '2rem'
    inputs[i].style.padding = '.5rem'
    inputs[i].style.margin = '.8rem 0'
}

inputData.type = 'date'
inputHora.type = 'time'

// LABEL

labelErro.style.color = 'red'
labelErro.style.display = 'inline-block'

// BUTTON
buttonAgendar.id = 'buttonAgendarId'
buttonAgendar.style.justifyContent = 'right'

function buttonCreateAgendamento() {
    // DEFININDO VARIÁVEIS       
    
    let elements = [
        h1AgendeAtendimento,
        pInfoAtendimento,
        labelNomeTutor,
        inputNomeTutor,
        labelNomePet,
        inputNomePet,
        labelNumeroPhone,
        inputNumeroPhone,
        labelDescricao,
        inputDescricao,
        labelData,
        inputData,
        labelHora,
        inputHora,
        buttonAgendar
    ]

    for(let i = 0; i < elements.length; i++) {
        divNewAgendamento.appendChild(elements[i])
    }

    divAgendamentos.style.filter = 'blur(5px)'

    document.body.appendChild(divNewAgendamento)
}

buttonAgendar.onclick = () => {
    if(
        inputNomeTutor.value === "" ||
        inputNomePet.value === "" ||
        inputNumeroPhone.value === "" ||
        inputDescricao.value === "" ||
        inputData.value === "" ||
        inputHora.value === ""
    ) {
        labelErro.textContent = 'Você precisa preencher todos os campos!'
        pInfoAtendimento.appendChild(labelErro)       
        return
    }

    let horario = inputHora.value.split(':')

    const divManha = document.querySelector('.divManha')
    const divTarde = document.querySelector('.divTarde')
    const divNoite = document.querySelector('.divNoite')

    if(horario[0] >= 9 && horario[0] <= 12) {
        criarNovoAgendamento(divManha)
    } else if(horario[0] >= 13 && horario[0] <= 18) {
        criarNovoAgendamento(divTarde)
    } else if(horario[0] >= 19 && horario[0] <= 21) {
        criarNovoAgendamento(divNoite)
    } else {
        labelErro.textContent = 'Horário não disponível!'
        pInfoAtendimento.appendChild(labelErro)   
        return
    }

    divNewAgendamento.style.display = 'none'
    divAgendamentos.style.filter = 'blur(0px)'
}

function criarNovoAgendamento(divTurno) {
    // CRIANDO ELEMENTOS
    const divOneAgendamentoDados = document.createElement('div')
    const divOne = document.createElement('div')
    const spanHour = document.createElement('span')
    const spanPet = document.createElement('span');
    const spanOneAgendamentoGray = document.createElement('span')
    const divTwo = document.createElement('div')
    const spanService = document.createElement('span')
    const divThree = document.createElement('div')
    const buttonRemoveAgendamento = document.createElement('button')

    // SETANDO VALORES
    spanHour.textContent = inputHora.value + " "
    spanPet.textContent = inputNomePet.value
    spanOneAgendamentoGray.textContent = ` / ${inputNomeTutor.value}`
    spanService.textContent = inputDescricao.value
    buttonRemoveAgendamento.textContent = 'Remover agendamento'

    // SETANDO ATRIBUTOS
    divOneAgendamentoDados.className = 'divOneAgendamentoDados'
    spanOneAgendamentoGray.className = 'spanOneAgendamentoGray'
    spanService.className = 'spanOneAgendamentoGray'
    buttonRemoveAgendamento.className = 'buttonRemoveAgendamento'

    divOne.appendChild(spanHour)
    divOne.appendChild(spanPet)
    divOne.appendChild(spanOneAgendamentoGray)

    divTwo.appendChild(spanService)

    divThree.appendChild(buttonRemoveAgendamento)

    divOneAgendamentoDados.appendChild(divOne)
    divOneAgendamentoDados.appendChild(divTwo)
    divOneAgendamentoDados.appendChild(divThree)

    divTurno.appendChild(divOneAgendamentoDados)
}