let lista = []
let contador = 0

let diaHoje = 20
let mesHoje = 4
let anoHoje = 2022

class Pessoa {
    constructor(nome, sobrenome, dataDeNascimento, email, contato, telefone, cargo){
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataDeNascimento = dataDeNascimento
        this.email = email
        this.contato = contato
        this.telefone = telefone
        this.cargo = cargo
    }
    
    static exibirPessoas(cargo = "Todos") {
        let listaDeAlunos = document.getElementById('lista-de-alunos')
        listaDeAlunos.innerHTML = ""
        if (cargo === "Todos") {
            for(let i = 0; i < lista.length; i++) {
                    let li = document.createElement('li')
                    li.innerText =`${lista[i].nome} ${lista[i].sobrenome}   ${lista[i].email}   ${lista[i].cargo}`
                    listaDeAlunos.appendChild(li)
            }
        } else if (cargo === "Aluno") {
            for(let i = 0; i < lista.length; i++) {
                if (lista[i].cargo === "Aluno"){
                    let li = document.createElement('li')
                    li.innerText =`${lista[i].nome} ${lista[i].sobrenome}   ${lista[i].email}   ${lista[i].cargo}`
                    listaDeAlunos.appendChild(li)
                }
            }
        } else if (cargo === "Facilitador") {
            for(let i = 0; i < lista.length; i++) {
                if (lista[i].cargo === "Facilitador"){
                    let li = document.createElement('li')
                    li.innerText =`${lista[i].nome} ${lista[i].sobrenome}   ${lista[i].email}   ${lista[i].cargo}`
                    listaDeAlunos.appendChild(li)
                }
            }
        } else if (cargo === "Instrutor") {
            for(let i = 0; i < lista.length; i++) {
                if (lista[i].cargo === "Instrutor"){
                    let li = document.createElement('li')
                    li.innerText =`${lista[i].nome} ${lista[i].sobrenome}   ${lista[i].email}   ${lista[i].cargo}`
                    listaDeAlunos.appendChild(li)
                }
            }
        }
    }

    static validaEmail() {
        let cadastro = document.querySelectorAll('.field')
        if(cadastro[3].value === ''){
            return true
        } 
        for (let i = 0; i < lista.length; i++){
            if(cadastro[3].value == lista[i].email){           
                return true
            }
        }
        return false
    }

    verificaIdade(){


    let diaCadastro = parseInt(this.dataDeNascimento.split("-")[2])
    let mesCadastro = parseInt(this.dataDeNascimento.split("-")[1])
    console.log(diaCadastro)
    console.log(diaHoje)
    let anoCadastro = parseInt(this.dataDeNascimento.split("-")[0])

    if (anoHoje - anoCadastro < 18) {
        return true
    }

    if (anoHoje - anoCadastro >= 18 && mesHoje < mesCadastro){
        return true
    }

    if (anoHoje - anoCadastro >= 18 && mesHoje >= mesCadastro && diaHoje < diaCadastro ){
        return true
    }

    }

}

const button = document.getElementById('register-button')
button.addEventListener("click", (asd) => {
    asd.preventDefault()
    //let cadastro = document.querySelectorAll('.field')
    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const dataNascimento = document.getElementById("dataNascimento").value
    const email = document.getElementById("email").value
    const contato = document.getElementById("contato").value
    const telefone= document.getElementById("telefone").value
    const cargo = document.getElementById("cargo").value
    let validarEmail = Pessoa.validaEmail()
    if (validarEmail === true){
        return alert("Erro no e-mail, tente novamente.") 
    }
    let usuario = new Pessoa(nome, sobrenome, dataNascimento, email, contato, telefone, cargo)
    if(usuario.verificaIdade() === true) {
        return alert("Você deve ter pelo menos 18 anos para efetuar o cadastro")
    }
    lista.push(usuario)
    const total = document.getElementById("total-alunos")
    contador++
    total.innerText = contador
    Pessoa.exibirPessoas()
})


const pesquisa = document.getElementById('btn')
const selecionaCargo = document.getElementById('cargoOption') 
pesquisa.addEventListener("click",(asd)=>{
    Pessoa.exibirPessoas(selecionaCargo.value)
})

