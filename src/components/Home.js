import gamers from "../imagens/site_gamers_img.png";
import photox from "../imagens/anderson.png";
import restaurant from "../imagens/site_Konoha_kitchen.png"
import party from "../imagens/site_party.png"


function Home() {
  return (
  <body>
    <div class="wrapper">
      <main>    
        <section class="module content">
          <div class="container1">
            <h2 class="text-1">Alguns de meus projetos.</h2>
            <div class="img-sites">
              <a href="https://andersondevfernandes.github.io/afspell2023restaurant/index.html"><img src={restaurant} alt="site" class="site"/></a>
              <a href="https://andersondevfernandes.github.io/afspell2023party/"><img src={party} alt="site" class="site"/></a>
              <a href="https://andersondevfernandes.github.io/landing_page_discord/"><img src={gamers} alt="site" class="site"/></a>        
            </div>
          </div>
        </section>
        <section class="module parallax parallax-2">
          <img src={photox} alt="Foto de Perfil" class="photo"/>
        </section>
        <section class="module content">
        <div class="mid-box">
          <div class="formulario" id="formulario">
            <div class="form-main">
              <p class="form-text-frase">Preencha nosso formulário e entraremos em contato.</p>
              <label for="fname" class="form-text">Nome Completo</label>
              <input type="text" class="fname form1" id="fname" required></input>
              <label for="email" class="form-text">Email:</label>
              <input type="email" class="email-user form1" id="email-user" name="email" required/>
              <label for="phone" class="form-text">Telefone Para Contato:</label>
              <input type="number" name="telefone" data-mask="(00) 0000-0000" data-mask-selectonfocus="true" class="form1"/>
              <textarea name="message" class="form1 box-text" placeholder="Diga-me Sr/Sra, como posso ajudar a dar uma nova imagem de mercado para você ou sua empresa. Grato pela confiança."></textarea>
              <button class="btn-form">Enviar</button>
            </div>
          </div>
         <div class="container2">
          <h2 class="text-2">Resumo Profissional.</h2>
          <p class="text-2">Tendo passado por diversos setores adiquiri ao longo do tempo a experiência necessária para entender qual o meu lugar no ambito profissional.</p>
          <p class="text-2">Ao longo do tempo atuando no mercado de turismo, industria, internet e tecnologia consegui tirar o melhor de cada segmento.</p>          
          <p class="text-2">Turismo: Exelência em qualidade no atendimento e preserveção do cliente o deixando mais confortavél possível.</p>
          <p class="text-2">Industral: Aplicar Lean Manufacturing que é sistema de gestão que busca aumentar a eficiência e a produtividade reduzindo erros e redundâncias na produção industrial. Melhoria continua, entender que todo processo pode e deve ser melhorado buscando reduzir custos e aumentar o lucro da empresa.</p>
          <p class="text-2">Internet e Tecnologia: Entender que o processo de aprendizagem é vasto. Tal escolha deve levar em consideração que será uma área na qual deverá buscar conhecimento incessantemente.</p>
          <p class="text-2"><strong>Minha opção por internet e tecnologia tem haver únicamente com dois fatores, Primeiro que ela sempre esteve inserida na minha vida de alguma forma e segundo que não existe realização profissional em mim trabalhando em qualquer outro setor que não seja este.</strong></p>
         </div>
        </div>
      </section>
        <section class="module parallax parallax-3">
          <div class="lista1">
            <ul class="lista-inicio">
              <p class="lista-titulo">SOFT SKILLS</p>
              <li class="skills">Pensamento Análitico e Inovação;</li>
              <li class="skills">Resolução de Problemas;</li>
              <li class="skills">Inteligência Emocional;</li>
              <li class="skills">Boa comunicação;</li>
              <li class="skills">Atitude Positiva;</li>
              <li class="skills">Resiliência;</li>
              <li class="skills">Criatividade;</li>
              <li class="skills">Foco no Cliente;</li>
            </ul>
          </div>
          <div class="lista2">
            <ul class="lista-inicio">
              <p class="lista-titulo">HARD SKILLS</p>
              <li class="skills">Html;</li>
              <li class="skills">Css;</li>
              <li class="skills">Javascript;</li>
              <li class="skills">Pacote Office;</li>
              <li class="skills">Excel intermediário;</li>
              <li class="skills">Inglês intermediário;</li>
              <li class="skills">Adobe Photoshop;</li>
              <li class="skills">Adobe Premiere;</li>
            </ul>
          </div>
         </section>
        <script src="index.js"></script>
      </main>
    </div>
  </body>
  );
}

export default Home;
