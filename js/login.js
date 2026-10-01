// ==============================
// FORMULÁRIO DE LOGIN
// ==============================

const loginForm = document.getElementById('login-form');


// Quando o usuário clicar em "Entrar"
loginForm.addEventListener('submit', async function (event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    // ==============================
    // PEGAR OS CAMPOS
    // ==============================

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');


    // ==============================
    // PEGAR OS DADOS
    // ==============================

    const email = emailInput.value.trim();

    const senha = senhaInput.value;


    // ==============================
    // PEGAR MENSAGENS DE ERRO
    // ==============================

    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');


    // ==============================
    // LIMPAR ERROS ANTERIORES
    // ==============================

    erroEmail.textContent = '';
    erroSenha.textContent = '';

    emailInput.classList.remove('erro');
    senhaInput.classList.remove('erro');


    // ==============================
    // VERIFICAR E-MAIL VAZIO
    // ==============================

    if (email === '') {

        erroEmail.textContent =
            'Digite seu e-mail.';

        emailInput.classList.add('erro');

        emailInput.focus();

        return;
    }


    // ==============================
    // VERIFICAR FORMATO DO E-MAIL
    // ==============================

    if (!emailInput.validity.valid) {

        erroEmail.textContent =
            'O e-mail está inválido.';

        emailInput.classList.add('erro');

        emailInput.focus();

        return;
    }


    // ==============================
    // VERIFICAR SENHA VAZIA
    // ==============================

    if (senha === '') {

        erroSenha.textContent =
            'Digite sua senha.';

        senhaInput.classList.add('erro');

        senhaInput.focus();

        return;
    }


    // ==============================
    // TENTAR FAZER LOGIN
    // ==============================

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({

            email: email,

            password: senha

        });


    // ==============================
    // VERIFICAR ERRO
    // ==============================

    if (error) {

        console.error('Erro no login:', error);

        erroSenha.textContent =
            'E-mail ou senha incorretos.';

        senhaInput.classList.add('erro');

        senhaInput.focus();

        return;
    }


    // ==============================
    // LOGIN REALIZADO
    // ==============================

    console.log('Login realizado:', data);


    // Ir para a página principal
    window.location.href = 'index.html';

});