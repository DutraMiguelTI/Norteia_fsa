// ==============================
// FORMULÁRIO DE CADASTRO
// ==============================

const cadastroForm = document.getElementById('cadastro-form');

const mensagem = document.getElementById('mensagem');


// Quando o usuário clicar em "Criar conta"
cadastroForm.addEventListener('submit', async function (event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    // ==============================
    // PEGAR OS DADOS DO FORMULÁRIO
    // ==============================

    const nome = document.getElementById('nome').value.trim();

    const email = document.getElementById('email').value.trim();

    const senha = document.getElementById('senha').value;

    const confirmarSenha =
        document.getElementById('confirmar-senha').value;


    // ==============================
    // VERIFICAR AS SENHAS
    // ==============================

    if (senha !== confirmarSenha) {

        mensagem.textContent = 'As senhas não são iguais.';
        mensagem.style.color = '#d32f2f';

        return;
    }


    // ==============================
    // ENVIAR PARA O SUPABASE
    // ==============================

    mensagem.textContent = 'Criando sua conta...';
    mensagem.style.color = '#6b7280';


    const { data, error } = await supabaseClient.auth.signUp({

        email: email,

        password: senha,

        options: {

            data: {
                nome: nome
            }

        }

    });


    // ==============================
    // VERIFICAR SE DEU ERRO
    // ==============================

    if (error) {

        console.error(error);

        mensagem.textContent =
            'Erro ao criar a conta: ' + error.message;

        mensagem.style.color = '#d32f2f';

        return;
    }


    // ==============================
    // CADASTRO REALIZADO
    // ==============================

    console.log('Usuário criado:', data);

    mensagem.textContent =
        'Conta criada! Verifique seu e-mail para confirmar o cadastro.';

    mensagem.style.color = '#1e9c6e';


    // Limpar formulário
    cadastroForm.reset();

});