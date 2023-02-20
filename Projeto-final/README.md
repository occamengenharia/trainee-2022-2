# Metodologia Ágeis de trabalho
- Neste repositório vamos adentrar o mundo das metodologias ágeis de trabalho , e entender de onde veem a ideias aplicadas no modo que trabalhamos aqui na OCCAM e porque
- Métodos Ágeis são um conjunto de praticas e metodos alternativos a gestão tradicional , com o objetivo na velocidade de entrega e a adaptação constante
## Metodologia Cascata 
- Era muito popular antigamente mas os gestores Atuais acreditam que seja ultrapassada
- O foco desta maneira de trabalhar é ter um *planejamento e uma documentação extensa*
- Isso gera uma previsibilidade maior sobre o tempo e sobre o orçamento do projeto
- É uma metodologia totalmente *sequencial*, com etapas muito bem definidas onde não começa uma etapa sem terminar a anterior. 
- As etapas ocorrem conforme o fluxograma abaixo
<img width="3377" alt="Untitled (3)" src="https://user-images.githubusercontent.com/62350059/207485625-40b9f809-0fd4-41be-b98e-df1808db5586.png">

>
<img width="224" alt="Untitled (2)" src="https://user-images.githubusercontent.com/62350059/207483138-6476bd65-6973-4417-8c33-99c5eb6fe2a8.png">

>


### Levantamento de requisitos  :telescope:

- Nessa fase ocorre a listagem de todas as funcionalidades que o software precisa ter para atingir o objetivo.
- Além disso como serão implementadas essas funcionalidades, quais linguagens de programação, frameworks, serviço de hospedagem, etc..
    - > *Frameworks são estruturas compostas por um conjunto de códigos genéricos que permite o desenvolvimento de sistemas e aplicações*       
- Para Unir todas essa informações é feito um documento chamado "*análise de requisitos*"
- Nele se definem os **Requisitos Funcionais e Não Funcionais**


  >*Entende-se por requisitos funcionais: toda funcionalidade que estará presente na aplicação em questão, envolvendo todos os campos a serem exibidos e dados a serem validados, esses requisitos são definitivos, ou seja, qualquer alteração no mesmo, após a assinatura do contratante estão sujeitos a alterações no valor do projeto*.   
  
  >*Entende-se por requisitos não-funcionais: todo requisito relacionado ao uso da aplicação, seu desempenho, usabilidade, confiabilidade, segurança, disponibilidade, manutenção e tecnologias utilizadas na elaboração do projeto*

### Projeto  :thought_balloon:


- Agora com base nos requisitos do software:
    - Listam-se de tarefas para o desenvolvimento
    - Estima-se o tempo que essas tarefas custarão
    - Escolhe  membros da equipe de desnvolvimento
    - Modelagem da interface e arquitetura do sistema
    - apos a interface ter sido esboçada fica mais claro ainda oque deve ser alterado na análise de requisitos
      -**Todo o processo deve ser documentado e toda alteração na análise de requisitos **  
### Implementação 	:computer: 
- Hora de *CODAR*
- A duração dessa fase depende da complexidade  do software a ser desenvolvido , quantidade de membros na equipe , fora imprevistos 
- O planejamento intenso dessa metodologia pode ser desvantagem quando se encontram imprevistos , pois os prazos e metodos ja estao documentados e devem ser seguidos
  - por isso essa metodologia não é tão popular hoje em dia
  
### Testes :stop_sign:

- Agora é a hora de: *validar se todos os requisitos foram atendidos e se o software cumpre o objetivo.*
- Todas as falhas devem ser corrigidas antes de passar para  a próxima fase
-  Aqui podem surgir algumas funcionalidades externas que serão apresentadas com a finalização do projeto

### Implantação e Manutenção
- Com todos os testes efetuados , o sistemas é apresentado ao cliente 
- Eventualmente algumas mudanças serão feitas no software , e todas elas podem ser aplicadas no modo cascata de forma recursiva
- **Na teoria** essa metodologia garante uma entrega de maneira polida com a menor quantidade de erros possivel 
### Porque não costumam utiliza-la mais: 
  - Dificuldade de cumprir os prazos de entrega(falta de produtividade, ansiedade , burnout)
  - Ultrapassagem imprevista de orçamento, geralmente por conta de imprevistos e por consequencia reiniciar a cascata
  - A expectativa do usário final é dificilmente cumprida , pois so se apresenta o produto de forma integra(ausência de feedback continuo com o cliente)


## SCRUM :arrows_clockwise:
- O mais famosinho entre as metodologias de trabalho 
- Conquista os gestores por trazer resultados rapidos com uma equipe pequena de desenvolvedores , e por ser simples e dinâminco.
- Da mesma maneira que o metodo cascata desmembrar o software em funcionalidades o metodo SCRUM faz o mesmo
- No SCRUM essa lista de funcionalidades se chama *Product Backlog* elaborado pelo *SCRUM MASTER*
- Depois disso o projeto é executado em ciclos chamados *Sprints* , geralmente de duas semanas
- Toda sprint é Planejada com base no *Product backlog* , focando nas funcionalidades mais essenciais
- Numa sprint as funcionalidades são retiradas do *Pruduct Backlog* e vão para o *Sprint Backlog*
<img width="3377" alt="Untitled (4)" src="https://user-images.githubusercontent.com/62350059/207485853-7b2051b7-f950-4e85-b44e-146e5690302c.png">

### Como ser um SCRUM MASTER :mage_man:
- O SCRUM MASTER é o responsavel por gerir todas as sprints  desde a criação do *BackLog* até a entrega do produto.  

### Monte a equipe :bust_in_silhouette:
- Dependende da compelexidade do projeto , mas a ideia é manter o minimo o possivel de desenvolvedores , de forma que seja possivel a gestão pois deve ter uma atenção individial com cada desenvolvedor e no andamento do projeto
### Crie o Product Backlog :spiral_notepad:
- Liste todas as funcionalidades de forma bem separada e detalhada , e depos organize por prioridade
- É interessante que se atinja um *MVP* o quanto antes para , comunicar e mostrar progresso ao cliente
   >*MVP é a sigla em inglês para Minimum Viable Product – ou Produto Mínimo Viável. Significa construir a versão mais simples e enxuta de um produto*
- Isso ajusta o desenvolvimento para algo mais proximo as exigencias do cliente
### Planeje a Sprint :running_man:
- Com base no *Product Backlog* , distribua  o desenvolvimento conforme a capacidade dos desenvolvedores e importancia da funcionalidade
- Os objetivos da sprint devem estar sempre *claros para todos *
- O que será feito? quem será o resposável? qual o prazo?
### Realize os alinhamentos :speaking_head:
- Enquanto a sprint acontece , você deve alinhar com todos os envolvidos no projeto
- Levantar o que deu certo e oque deu de errado com o dia de trabalho passado e planejar o dia de trablaho da equipe
- Essas informações ajudarão a prospectar as proximas sprints , e adaptar conforme a produtividade da equipe
### Sinergia com o método Kanban 
- Uma grande ferramenta que auxilia as sprints é o Kanban
- Um metodo desenvolvido e aplicado pela Toyota 
- É simplesmente um  Quadro com uma sessão "Para fazer", "Fazendo" e "Feito"
- Traz resultados excelentes e facilita muito o trabalho do SCRUM MASTER
## OCCAM Workflow :pushpin:
- Na OCCAM tentamos aproveitar as vantagens de cada um dos metodos , Aplicando algumas praticas de cada Método
- A Etapa inicial do modelo cascata , é feita com rigor 
- O próprio orçamento é baseado na analise de requisitos e os "termos de contrato" , também são atrelados  a esse documento
- Esse documento deixa os prazos e objetivos bem claros , e vem tendo resultados positivos nas atividades recentes da empresa , pois todos os envolvidos sabem exatamente do que se trata o software que estão desenvolvendo ao ler o documento
- Depois de assinar o contrato , se os blocos de "Design" e  "Desenvolvimento" podem ser explandidos em um fluxograma de SCRUM.
- O Backlog é feito rapidamente pois os requisitos ja estao levantados
- Conforme o cleinte valida o Design , em um certo ponto o desenvolvimento inicia ,  o quanto antes melhor
- Até que sprint após sprint o objetivo seja alcançado 

<img width="3377" alt="Untitled (1)" src="https://user-images.githubusercontent.com/62350059/207483044-7df6f3d0-531c-4df4-b9e8-142f67ea9a1b.png">

- Dessa maneira conseguimos usufluir da previsibilidade de complexidade, orçamento e prazos que o método Cascata oferece , E utilizamos da adaptabilidade e feedback do cliente  para alinhar o produto coma as expectativas e reduzir o atraso devido a imprevistos.
- A maneira que trabalhamos na OCCAM está em constante melhoramento , e gostamos muito de testar coisas novas , e por conta disso criamos alguns ritos que geraram bons resultados ao longo do tempo 

## Ritos  da OCCAM 
### Café dos Devs :coffee:
- Um de Nossos membros sugeriu que um dia tomassemos café na OCCAM enquanto fizessemos o alinhamento , e que logo em seguida trabalhassemos na Sprint atual em grupo no mesmo local
- A ideia foi um completo sucesso , depois de um tempo todos os alinhamentos semanais foram substituidos pelo *café dos devs*
- Gerava uma produtividade maior pois compartilhavem-se as dificuldades e todos se ajudavam
- Poupava de trabalho em casa 
- Todos os membros conseguer ver o trabalho do colega ao lado , dando maior senso de responsabilidade e de equipe
- Além de tudo isso é um momento bem descontraído, e  divertido  que fortifica os laços entre os membros
### Alinhamentos Gerais do setor
-  Em um dado momento percebemos que as diferentes equipes não sabiam oque estava acontecendo fora do próprio projeto
-  Para resolver esse problema fazemos alinhamentos gerias para todos do setor
-  Cada equipe de um projeto mostra o estado atual do projeto que está trabalhando 
-  É muito importante que todos da empresa saibam ao maximo o que os colegas estão fazendo , para poder aloca-la na função desejada , caso contrario a pessoa pode se sentir "esquecida" pela equipe
### Cultura de FeedBacks :busts_in_silhouette:
- Muitas vezes principalmente em cargos de liderança , pode surgir uma sensação de "névoa" ao pensar sobre seus colegas de equipe e situações
- Como o diretor de projetos vai saber se sua gestão está satisfatória? Como o Scrum MASTER saberá se está sobrecarregando os desenvolvedores? etc.. 
- Para isso é essencial que todos os membros tenham o habito de dar um "FeedBack" objetivo quando se realiza uma atividade
- Ou até mesmo formularios, é rapido , simples e efetivo
- Além disso Parte da maturidade profissional é a maturidade emocional na hora de receber um feedback
- Durante a vida profissional , ocorrerão erros e é preciso saber separar suas emoções e orgulho , quando se recebe um feedback , mesmo que pareça duro , é para que você reconheça o que pode ser melhorado, e posteriormente melhore.
- Existe sim uma maneira certa de *dar um feedback* , **são 3 passos**:
- **Reconhecimento** : Reconhece os pontos positivos da pessoa
- **Avaliação** : Traz a avaliação com o que deve ser melhorado
- **Orientação** : Como a pessoa pode melhorar naquilo   
    
### Final Quest :crossed_swords:
- Trazer uma solução para o cliente , vende-lá e desenvolve-lá aplicando os conceitos das metodologias ágeis.

- Grupo 1:
     - Paulo Amaral (SCRUM master)
     - Thiago Gonçalves Salustiano
     - Gabriela Nazario Fonseca
     - Luiz Ricardo Brumati De Lima
     - Carlos Eduardo Ribas Dos Santos
     
     
- Grupo 2:
     - Luan Filipe (SCRUM master)
     - Pedro Henrique Gnoatto Rosa
     - Alexandre Meurer Castanhede
     - Kauê Mauri de Souza
     - Fabrício Giannini
     - Pamela Pereira de Jesus
