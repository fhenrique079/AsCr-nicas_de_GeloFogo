import livro1 from './assets/guerraDosTronos.jpg'
import livro2 from './assets/furiaDosReis.jpg'
import livro3 from './assets/tormentaDeEspada.jpg'
import livro4 from './assets/festimDosCorvos.jpg'
import livro5 from './assets/dancaDosDragoes.jpg'
import livro6 from './assets/fogo_Sangue.jpg'

import './App.css'
import Album from './components/Card'

function App() {

  return (
    <> 
      <div>
        <Album livros = {
          {
            titulo: "A Guerra dos Tronos ",
            descricao: "O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado.",
            livro: livro1,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
        <Album livros = {
          {
            titulo: "A fúria dos reis",
            descricao: "Um cometa da cor de fogo e sangue corta os céus. E, da antiga cidadela de Pedra do Dragão às costas áridas de Winterfell, reina o caos. Em A fúria dos reis , seis facções disputam o controle de uma terra dividida e o direito de ocupar o Trono de Ferro de Westeros - e estão dispostos a encarar tempestades, levantes e guerras para isso.",
            livro: livro2,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
        <Album livros = {
          {
            titulo: "A tormenta de espadas",
            descricao: "O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas. Joffrey, da Casa Lannister, ocupa o Trono de Ferro, como o instável governante dos Sete Reinos, ao passo que seu rival mais amargo, lorde Stannis, jaz derrotado e enfeitiçado pelas promessas da Mulher Vermelha.",
            livro: livro3,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
        <Album livros = {
          {
            titulo: "O Festim dos Corvos",
            descricao: "Há séculos os sete grandes reinos de Westeros se enfrentam em amargas disputas, batalhas e traições. Agora, com Joffrey Baratheon e Robb Stark fora da jogada e lordes insignificantes competindo pelas Ilhas de Ferro, a guerra que devorou o continente parece ter finalmente chegado ao fim. No entanto, como após todo grande conflito, não demora para que os sobreviventes, os bandidos, os renegados e os carniceiros avancem para disputar o espólio dos mortos. Por toda Westeros os lordes se agitam, formando alianças e fazendo planos, enquanto nomes conhecidos e desconhecidos se apresentam para tomar parte das danças políticas.",
            livro: livro4,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
        <Album livros = {
          {
            titulo: "A dança dos dragões",
            descricao: "É outono em Westeros, e a Guerra dos Cinco Reis parece finalmente entrar na reta final. Stannis Baratheon se instala no Norte e jura conquistar o apoio dos senhores da região para continuar sua luta pelo trono, embora seja atrapalhado pela invasão de homens de ferro em grande parte da costa. Na Muralha, Jon Snow é eleito o 998º Senhor Comandante da Patrulha da Noite, mas inimigos o cercam de todos os lados, tanto na Patrulha quanto para além da Muralha. Enquanto isso, Tyrion Lannister atravessa o Mar Estreito rumo a Pentos, sem objetivos definidos, sem aliados e cada vez mais sem opções.",
            livro: livro5,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
        <Album livros = {
          {
            titulo: "Fogo & Sangue",
            descricao: "Séculos antes dos eventos de A guerra dos tronos, a Casa Targaryen - única família de senhores dos dragões a sobreviver à Destruição de Valíria - tomou residência em Pedra do Dragão. A história de Fogo e sangue começa com o lendário Aegon, o Conquistador, criador do Trono de Ferro, e segue narrando as gerações de Targaryen que lutaram para manter o assento, até a guerra civil que quase destruiu sua dinastia.",
            livro: livro6,
            texto: "Comprar aqui",
            autor: "George R. R. Martin",
          }
        }/>
      </div>
    </>
  )
}

export default App
