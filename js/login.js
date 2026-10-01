// ==============================
// FORMULÁRIO DE LOGIN
// ==============================

const loginForm = document.getElementById('login-form');


// Quando o usuário clicar em "Entrar"
loginForm.addEventListener('submit', async function (event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    // ==============================
    // PEGAR OS DADOS
    // ==============================

    const email = document
        .getElementById('email')
        .value
        .trim();

    const senha = document
        .getElementById('senha')
        .value;


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

        alert(
            'Não foi possível entrar.\n\n' +
            error.message
        );

        return;
    }


    // ==============================
    // LOGIN REALIZADO
    // ==============================

    console.log('Login realizado:', data);

    alert('Login realizado com sucesso!');


    // Ir para a página principal
    window.location.href = 'index.html';

});