import jw from "@/assets/just-waifu.png"
import todocli from "@/assets/Todo-CLI.png"
import yspects from "@/assets/Y-Specs.png"
import shueisha from "@/assets/Shueisa-CLI.png"

const projects = [
  { text: "JustWaifu", 
    src: jw, github: 'https://github.com/sileniz/just-waifu', 
    stack: "< React.JS | Javascript | CSS >",
    about: "Aplicação feita em React.JS. Desenvolvida para amantes de animes e mangás, permite navegar entre várias imagens de animes e diferentes tags ao seu gosto, além de poder favoritar as imagens."},
  { text: "Todo-CLI", 
    src: todocli, 
    github: 'https://github.com/sileniz/todo-cli', 
    stack: "< Node.JS | TypeScript >",
    about: "Aplicação To-Do feita em nodeJS e TypeScript, inteiramente linha de comando."},
  { text: "Y-specs", 
    src: yspects, 
    github: 'https://github.com/sileniz/y-specs', 
    stack: "< Electron.JS | Javascript >",
    about: "Aplicação simples utilizando Electron para visualizar informações básicas do computador."},
  { text: "Shueisha-CLI", 
    src: shueisha, 
    github: 'https://github.com/sileniz/shueisha-cli', 
    stack: "< Node.JS | TypeScript >",
    about: "A aplicação permite você ver as recentes atualizações do site da Shueisha"}
]

export default projects