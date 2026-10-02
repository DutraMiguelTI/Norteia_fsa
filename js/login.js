// ==============================
// FORMULÁRIO DE LOGIN
// ==============================

const loginForm = document.getElementById('login-form');


// ==============================
// ELEMENTOS
// ==============================

const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

const esqueciSenha = document.getElementById('esqueci-senha');


// ==============================
// QUANDO O USUÁRIO CLICAR EM "ENTRAR"
// ==============================

loginForm.addEventListener('submit', async function (event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    // ==============================
    // PEGAR OS DADOS
    // ==============================

    const email = emailInput.value.trim();

    const senha = senhaInput.value;


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


// ==============================
// ESQUECI MINHA SENHA
// ==============================

esqueciSenha.addEventListener('click', async function (event) {

    // Impede o link de voltar para o topo da página
    event.preventDefault();


    // ==============================
    // LIMPAR MENSAGENS
    // ==============================

    erroEmail.textContent = '';
    erroSenha.textContent = '';

    emailInput.classList.remove('erro');
    senhaInput.classList.remove('erro');


    // ==============================
    // PEGAR E-MAIL
    // ==============================

    const email = emailInput.value.trim();


    // ==============================
    // VERIFICAR E-MAIL VAZIO
    // ==============================

    if (email === '') {

        erroEmail.textContent =
            'Digite seu e-mail para recuperar a senha.';

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
    // ENVIAR E-MAIL DE RECUPERAÇÃO
    // ==============================

    const { error } =
        await supabaseClient.auth.resetPasswordForEmail(email, {

            redirectTo: window.location.origin + '/login.html'

        });


    // ==============================
    // VERIFICAR ERRO
    // ==============================

    if (error) {

        console.error(
            'Erro ao enviar recuperação de senha:',
            error
        );

        erroEmail.textContent =
            'Não foi possível enviar o e-mail de recuperação.';

        emailInput.classList.add('erro');

        return;
    }


    // ==============================
    // E-MAIL ENVIADO
    // ==============================

    erroEmail.textContent =
        'E-mail de recuperação enviado! Verifique sua caixa de entrada.';

});