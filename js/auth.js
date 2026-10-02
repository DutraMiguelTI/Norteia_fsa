// ==========================================
// ESTADO DE LOGIN NO HEADER
// ==========================================
//
// Esse arquivo depende de dois outros scripts, carregados ANTES dele
// no index.html (a ordem importa aqui):
//   1. a biblioteca do Supabase (via CDN)
//   2. js/supabase.js — cria a variável "supabaseClient"
//
// O que esse script faz: pergunta pro Supabase "tem alguém logado
// agora?" e, dependendo da resposta, mostra o botão "Entrar" OU o
// menu de perfil (com o nome de quem está logado).

document.addEventListener('DOMContentLoaded', function () {

  const loginBtn = document.getElementById('loginBtn');
  const profileMenu = document.getElementById('profileMenu');
  const profileUserName = document.getElementById('profileUserName');
  const logoutBtn = document.getElementById('logoutBtn');

  // Proteção: se o script do Supabase não carregou por algum motivo
  // (ex: sem internet, CDN fora do ar), a gente não trava o resto da
  // página — só assume "visitante" e segue o jogo.
  if (typeof supabaseClient === 'undefined') {
    console.warn('supabaseClient não encontrado — mostrando como visitante.');
    if (loginBtn) loginBtn.hidden = false;
    return;
  }

  async function atualizarHeaderConformeLogin() {
    const { data } = await supabaseClient.auth.getSession();
    const sessao = data.session;

    if (sessao && sessao.user) {
      // ===== LOGADO =====
      // O nome vem do cadastro.js, que salva em options.data.nome na hora
      // do signUp. Se por algum motivo não existir (ex: conta antiga),
      // cai pro e-mail, pra nunca deixar o texto vazio.
      const nome = sessao.user.user_metadata && sessao.user.user_metadata.nome
        ? sessao.user.user_metadata.nome
        : sessao.user.email;

      if (profileUserName) {
        profileUserName.textContent = 'Olá, ' + nome + '!';
      }

      if (profileMenu) profileMenu.hidden = false;
      if (loginBtn) loginBtn.hidden = true;

    } else {
      // ===== VISITANTE (não logado) =====
      if (profileMenu) profileMenu.hidden = true;
      if (loginBtn) loginBtn.hidden = false;
    }
  }

  atualizarHeaderConformeLogin();

  // Botão "Sair" do dropdown
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async function (event) {
      event.preventDefault();   // é um href="#", não deixa a página "pular"

      await supabaseClient.auth.signOut();

      // Recarrega a página: ao rodar de novo, atualizarHeaderConformeLogin()
      // vai perguntar pro Supabase de novo, ver que não tem sessão, e mostrar
      // o botão "Entrar" no lugar do perfil.
      window.location.reload();
    });
  }

});
