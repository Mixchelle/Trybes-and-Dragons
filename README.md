<body>
  <h1>Trybers and Dragons 🐉</h1>
  <p>Bem-vindo ao repositório do projeto Trybers and Dragons! Este projeto foi desenvolvido no módulo de backend da Trybe.</p>
  <h2>Descrição do Projeto</h2>
  <p>O Trybers and Dragons é um jogo de interpretação de papéis (RPG - Role Playing Game) onde você poderá explorar um universo fantástico, enfrentar desafios e cumprir missões emocionantes.</p>
  <h2>Habilidades desenvolvidas 👨‍💻</h2>
  <p>Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos e tecnologias:</p>
  <ul>
    <li>Princípios da arquitetura SOLID 🏰</li>
    <li>Programação Orientada a Objetos (POO) 🧩</li>
    <li>Utilização de classes, herança e interfaces 📚</li>
    <li>Implementação de lutas entre personagens e monstros ⚔️</li>
    <li>Criação de classes e objetos 🖌️</li>
  </ul>
  <h2>Contextualizando 🐲</h2>
  <p>No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma <strong>raça</strong> definida.</p>
  <p>As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados <strong>monstros</strong> que não possuem uma raça específica, mas podem lutar.</p>
  <p>Alguns seres também possuem uma <strong>energia</strong> e, ao treinarem o uso da energia, passam a possuir um <strong>arquétipo</strong>. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.</p>
  <p>Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.</p>
  <p>Agora, cabe a você, nobre dev, explorar essas terras e cumprir as quests que surgirão ao longo da sua incrível jornada leitura do README.</p>

   <h2>Requisitos do projeto 📋</h2>

### 1 - Crie a classe `Race`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.

Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de **criar a classe abstrata `Race`**.

Para que você tenha sucesso nesta *quest*, é importante saber que:

- O arquivo foi criado no diretório `src/Races/` e chamar `Race.ts`;
- A classe `Race` deve ter os atributos privados: `name` e `dexterity`, ambos inicializados em seu **construtor**;
  - O atributo `name` dever ser do tipo `string`;
  - O atributo `dexterity` dever ser do tipo `number`;
  - `name` e `dexterity` devem ser recebidos como parâmetros e inicializados no construtor.
- Os atributos da classe `Race` podem ser lidos, mas não podem ser alterados:
  - `name` deve retornar o tipo `string`;
  - `dexterity` deve retornar o tipo `number`.
- A classe `Race` deve ter um **método estático** chamado `createdRacesInstances`, que retorna um `number`;
  - Esse número corresponde à quantidade de **instâncias criadas a partir das classes estendidas** da classe `Race`;
  - Cada raça terá seu número máximo de instâncias, **que será definido dentro de cada classe especializada**;
  - Na classe `Race`, o método deve lançar um erro com a mensagem `Not implemented`.
- A classe `Race` deve ter um **getter abstrato** chamado `maxLifePoints` que retorna um `number`;
  - Esse número corresponde à quantidade máxima de pontos de vida da raça;
  - Cada raça terá seu número máximo de pontos, **que será definido dentro de cada classe especializada**;
  - Na classe `Race` **deve estar apenas a assinatura do método**.

> Dica: use a convenção de atributos privados para criar os atributos **com** `_` e os getters para expor os atributos **sem** o `_`.
<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Race` deve ser exportada de forma padrão (com `export default`);
> - Deve ser criado o arquivo chamado `index.ts` dentro do diretório `src/Races/`;
> - A classe `Race` deve ser importada dentro deste arquivo e exportada também de forma padrão, da mesma forma que no diretório `src/Battle/`.

<br>
</details>

<details close>
  <summary><strong> 🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe Race:
  - A classe `Race` existe;
  - A classe `Race` é abstrata;
  - O método `maxLifePoints` da classe `Race` é abstrato;
  - O método `maxLifePoints` ao ser implementado retorna um valor numérico;
  - O atributo `name` da classe `Race` pode ser lido;
  - O atributo `name` da classe `Race` *NÃO* pode ser alterado;
  - O atributo `dexterity` da classe `Race` pode ser lido;
  - O atributo `dexterity` da classe Race *NÃO* pode ser redefinido;
  - O método `createdRacesInstances` deve existir e ser estático;
  - O método `createdRacesInstances` deve lançar um erro com a mensagem "Not implemented".

</details>

---

### 2 - Crie classes que herdam de `Race`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda *quest*, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante saber que:

- Os arquivos devem ser criados no diretório `src/Races/`;
- Todas as raças devem estender da classe abstrata `Race`;
- As classes `Dwarf`, `Elf`, `Halfling` e `Orc` devem ser criadas em arquivos com exatamente esses nomes.
- Cada raça deve possuir um número máximo de pontos de vida (`maxLifePoints`), que deve ser inicializado em seu **construtor**:
  - A raça `Dwarf` deve receber `80` pontos de vida;
  - A raça `Elf` deve receber `99` pontos de vida;
  - A raça `Halfling` deve receber `60` pontos de vida;
  - A raça `Orc` deve receber `74` pontos de vida.
- Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata `Race`;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s).

<br>

> ⚠️ **Atenção**:
> - Assim como no requisito anterior, cada uma das classes criadas (`Dwarf`, `Elf`, `Halfling` e `Orc`) para este requisito deve ser exportada de forma padrão (com `export default`).
> - As classes (`Dwarf`, `Elf`, `Halfling` e `Orc`) devem ser importadas dentro de `src/Races/index.ts` e exportadas de forma explícita (`export { class1, class2, classN }`).
> - Não se esqueça de implementar o método `createdRacesInstances` nas classes herdeiras;

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para as classe que herdam de Race:
  - A classe `Dwarf` existe;
  - A classe `Dwarf` herda de `Race`;
  - O atributo `name` da classe `Dwarf` pode ser lido;
  - O atributo `dexterity` da classe `Dwarf` pode ser lido;
  - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Dwarf`;
  - O atributo `maxLifePoints` da classe `Dwarf` existe e é igual a 80;
  - A classe `Elf` existe;
  - A classe `Elf` herda de `Race`;
  - O atributo `name` da classe `Elf` pode ser lido;
  - O atributo `dexterity` da classe `Elf` pode ser lido;
  - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Elf`;
  - O atributo `maxLifePoints` da classe `Elf` existe e é igual a 99;
  - A classe `Halfling` existe;
  - A classe `Halfling` herda de `Race`;
  - O atributo `name` da classe `Halfling` pode ser lido;
  - O atributo `dexterity` da classe `Halfling` pode ser lido;
  - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Halfling`;
  - O atributo `maxLifePoints` da classe `Halfling` existe e é igual a 60;
  - A classe `Orc` existe;
  - A classe `Orc` herda de `Race`;
  - O atributo `name` da classe `Orc` pode ser lido;
  - O atributo `dexterity` da classe `Orc` pode ser lido;
  - O método `createdRacesInstances` retorna o número correto de instâncias criadas da classe `Orc`;
  - O atributo `maxLifePoints` da classe `Orc` existe e é igual a 74;

</details>

---

### 3 - Crie a interface `Energy`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de *"stamina"* .
Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de *"mana"*.

Sua próxima missão é tornar possível o uso destes dois tipos de energia:  *"stamina"* e *"mana"*. Para isso:

- Crie uma `interface` chamada `Energy`, para isso:
  - Crie o arquivo `Energy.ts` na raiz do diretório `src/`.
  - A interface deverá possuir os atributos:
    - `type_`, do tipo `EnergyType`; ✨✨
      - Esse novo tipo ~~pode~~ deve receber os valores: `'mana'` ou `'stamina'`;
      - O tipo `EnergyType` também deve ser exportado.
    - `amount`, do tipo `number`.

✨ Dica de mestre: ✨
- Para implementar a `interface Energy`, é necessário criar um tipo novo, o `type EnergyType`;

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a interface `Energy` deve ser exportada de forma padrão ( com `export default`).
> - `EnergyType` também deve ser exportado, mas este de forma explícita (`export`).

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a interface Energy:
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`;
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 10, type_: 'stamina'}`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 45, type_: 'mana'}`;
  - Não é possível criar uma variável com o tipo `EnergyType` e atribuir a ela um valor diferente de `'mana'` ou `'stamina'`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `amount`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `type_`.
</details>

---

### 4 - Crie a classe `Archetype`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D.
Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima *quest* será **criar a classe abstrata `Archetype`**.

Para que você tenha sucesso nesta *quest*, é importante saber que:

- O arquivo `Archetype.ts` deve ser criado no diretório `src/Archetypes/`;
- A classe `Archetype` deve ter os atributos privados: `name`, `special`, `cost`, que serão inicializados em seu **construtor**;
  - O atributo `name` dever ser do tipo `string`;
  - O atributo `special` dever ser do tipo `number`;
  - O atributo `cost` dever ser do tipo `number`;
  - `name` deve ser recebido como parâmetro e inicializado no construtor;
  - `special` e `cost` devem ser apenas inicializados no construtor com o valor `0`.
- Os atributos da classe `Archetype` podem ser lidos, mas não podem ser alterados:
  - `name` deve retornar o tipo `string`;
  - `special` deve retornar o tipo `number`;
  - `cost` deve retornar o tipo `number`.
- A classe `Archetype` deve ter um **método estático** chamado `createdArchetypeInstances` que retorna um `number`:
  - Esse número corresponde à quantidade de **instâncias criadas a partir das classes estendidas** da classe abstrata `Archetype`;
  - Cada arquétipo terá seu número máximo de instâncias, **que será definido dentro de suas classes especializadas**;
  - Na classe abstrata `Archetype`, o método deve apenas lançar um erro com a mensagem `Not implemented`.
- A classe `Archetype` deve ter um **getter abstrato** chamado `energyType` que retorna uma `EnergyType`:
  - Esse tipo EnergyType corresponde ao tipo de energia que este arquétipo deve ter. *(`mana` ou `stamina`)*
  - Cada arquétipo terá o seu tipo de energia, **que será definido dentro de suas classes especializadas**;
  - A classe abstrata `Archetype` **deve conter apenas a assinatura do método**.

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Archetype` deve ser exportada de forma padrão ( com `export default`);
> - Um arquivo `index.ts` deve ser criado dentro do diretório `src/Archetypes/`;
> - A classe `Archetype` deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito com `Race`.

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>
  <br>

  > :dragon_face: Para a classe Archetype:
  - A classe `Archetype` existe;
  - A classe `Archetype` é abstrata;
  - O atributo `name` da classe `Archetype` pode ser lido;
  - O atributo `name` da classe `Archetype` não pode ser alterado;
  - O atributo `special` da classe `Archetype` pode ser lido;
  - O atributo `cost` da classe `Archetype` pode ser lido;
  - O tipo do retorno do método `energyType` é `EnergyType`;
</details>

---

### 5 - Crie classes que herdam de `Archetype`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Como você pode imaginar, há diversos arquétipos diferentes no mundo de *Trybers and Dragons*, cada um com as suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns desses arquétipos. E o que poderia ser melhor para isso do que criar classes para eles?
Para isto, atenção às instruções a seguir:

- Os arquivos devem ser criados no diretório `src/Archetypes/`;
- Todos os arquétipos devem estender da classe abstrata `Archetype`.
- No momento, vamos nos ater a quatro arquétipos muito comuns aos seres deste universo: (eles devem estar em quatro arquivos com os mesmos nomes)
  - `Mage` 🧙‍♀️;
  - `Necromancer` ☠️; 
  - `Warrior` ⚔️;
  - `Ranger` 🍃.
- Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente, e essa habilidade deve ser inicializada em seu **construtor**
  - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`;
  - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`.
- Não se esqueça de implementar o(s) método(s) necessário(s) após estender a classe abstrata `Archetype`;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);

<br>

> ⚠️ **Atenção**:
> - Assim como no requisito anterior, cada uma das classes criadas (`Mage`, `Necromancer`, `Warrior` e `Ranger`) para este requisito deve ser exportada de forma padrão ( com `export default`);
> - Novamente, as classes (`Mage`, `Necromancer`, `Warrior` e `Ranger`) devem ser importadas dentro de `src/Archetypes/index.ts` e exportadas de forma explícita (`export { class1, class2, classN }`).
> - Não se esqueça de implementar o método `createdArchetypeInstances` nas classes herdeiras;

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para as classes que herdam de Archetype:
  - A classe `Mage` existe;
  - A classe `Mage` herda de `Archetype`;
  - O atributo `name` da classe `Mage` pode ser lido;
  - O método `energyType` da Classe `Mage` existe e retorna um `EnergyType`;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Mage`;
  - A classe `Necromancer` existe;
  - A classe `Necromancer` herda de `Archetype`;
  - O atributo `name` da classe `Necromancer` pode ser lido;
  - O atributo `energyType` da classe `Necromancer` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Necromancer`;
  - A classe `Ranger` existe;
  - A classe `Ranger` herda de `Archetype`;
  - O atributo `name` da classe `Ranger` pode ser lido;
  - O atributo `energyType` da classe `Ranger` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Ranger`;
  - A classe `Warrior` existe;
  - A classe `Warrior` herda de `Archetype`;
  - O atributo `name` da classe `Warrior` pode ser lido;
  - O atributo `energyType` da classe `Warrior` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`;
</details>

---

### 6 - Crie a interface `Fighter`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`. Mas não se preocupe! Não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe as orientações abaixo:

- Crie uma `interface` chamada `Fighter`;
- O arquivo `Fighter.ts` deve ser criado no diretório `src/Fighter/`;
- A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`;
  - `defense`, do tipo `number`;
  - `energy`, do tipo `Energy`. ✨✨
- A interface deverá possuir os métodos:
  - `attack()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`);
  - `special()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`); ✨✨
  - `levelUp()`, que não recebe parâmetro e não possui retorno (`void`);
  - `receiveDamage()`, que recebe um `attackPoints` do tipo `number` como parâmetro e retorne um `number`.

✨ Dica de mestre: ✨
- O atributo `energy` e o método `special()` devem ser opcionais;
  - Pesquise sobre: `Optional Properties` ou `Optional parameters` em interfaces;
- Agora você pode descomentar os trechos de código dos arquivos do diretório `Battle`; (`Battle.ts` e `index.ts`).

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a interface `Fighter` deve ser exportada de forma padrão (com `export default`);
> - Um arquivo chamado `index.ts` deve ser criado dentro do diretório `src/Fighter/`;
> - A interface `Fighter` deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito em requisitos anteriores.

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a interface Fighter:
  - A interface `Fighter` existe;
  - A interface `Fighter` possui o atributo `lifePoints`;
  - A interface `Fighter` possui o atributo `strength`;
  - A interface `Fighter` possui o atributo `defense`;
  - A interface `Fighter` possui o método `attack()`, que recebe um `enemy` do tipo `Fighter`;
  - A interface `Fighter` possui o método `special()`, que recebe um `enemy` do tipo `Fighter`
  - A interface `Fighter` possui o método `receiveDamage()`, que recebe um `attackPoints` do tipo number;
  - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`;
  - A interface `Fighter` possui o método `levelUp()`, que não recebe parâmetros nem retorna nada;
</details>

---

### 7 - Crie a classe `Character`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Maravilha! Agora já temos tanto as nossas raças quanto os nossos arquétipos e interfaces definidos. Mas antes de sair por aí entrando em tavernas e calabouços, temos outra *quest*: **criar uma personagem**!

Cada personagem será composta tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer desse ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

As dicas para completar essa *quest* são: 

- O arquivo deve ser criado na raiz do diretório `src/` e se chamar `Character.ts`;
- A classe deve implementar a interface `Fighter`;
- A classe `Character` deve ter os atributos privados: `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity` e `energy`, todos inicializados em seu **construtor**;
  - O atributo `race` deve ser do tipo `Race`;
  - O atributo `archetype` deve ser do tipo `Archetype`;
  - O atributo `maxLifePoints` deve ser do tipo `number`;
  - O atributo `lifePoints` deve ser do tipo `number`;
  - O atributo `strength` deve ser do tipo `number`;
  - O atributo `defense` deve ser do tipo `number`;
  - O atributo `dexterity` deve ser do tipo `number`;
  - O atributo `energy` deve ser do tipo `Energy`;
  - O atributo `name` deve ser recebido como parâmetro no construtor e deve ser usado para dar nome à sua personagem.
  - Devem ser inicializados no construtor:
    - `dexterity` com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨;
    - `race` por padrão com uma instância de `Elf` (A destreza de `Elf` deve ser a mesma definida em `dexterity`);
    - `archetype` por padrão com uma instância de `Mage`;
    - `maxLifePoints` por padrão com metade do `maxLifePoints` da raça instanciada;
    - `lifePoints` por padrão com o mesmo valor de `maxLifePoints` da classe;
    - `strength`, `defense` com valores aleatórios de no mínimo 1 e no máximo 10 pontos; ✨✨
    - `energy` por padrão:
      - `type_` com o mesmo valor do arquétipo instanciado;
      - `amount` com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨
- Os atributos da classe `Character` podem ser lidos mas não podem ser alterados:
  - `race` deve retornar o tipo `Race`;
  - `archetype` deve retornar o tipo `Archetype`
  - `lifePoints` deve retornar o tipo `number`;
  - `strength` deve retornar o tipo `number`;
  - `defense` deve retornar o tipo `number`;
  - `dexterity` deve retornar o tipo `number`;
  - `energy` deve retornar o tipo `Energy`.
    - ✨ Lembre-se que `energy` é um objeto, portanto se você retornar ele diretamente o javascript permite que as propriedades desse objetos sejam alteradas, mesmo `energy` sendo privado. 
- A classe `Character` também deve implementar os métodos estendidos da `interface Fighter`;
  - **`receiveDamage 😵`** este método recebe por parâmetro um valor (`attackPoints`) e as regras são:
    - Para calcular o dano recebido (`damage`), o valor da defesa (`defense`) do personagem deve ser subtraído do valor do ataque recebido (`attackPoints`);
    - Se o dano calculado (`damage`) for maior que `0`, você perde esse valor em pontos de vida (`lifePoints`). Se o dano calculado (`damage`) for igual ou menor a zero, você deve perder apenas `1` ponto de vida (`lifePoints`);
    - Ao receber o ataque e perder pontos de vida (`lifePoints`), e se sua vida chegar a `0` ou menos, você deve fixá-la com o valor `-1`;
    - Ao final sempre retorne o valor atualizado de seus pontos de vida.
  - **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    - Este dano deve ser equivalente a força (`strength`) de quem ataca.
  - **`levelUp 🆙`** este método não recebe parâmetro e as regras são:
    - Sempre que este método for chamado os atributos `maxLifePoints`, `strength`, `dexterity` e `defense` terão um incremento de no mínimo 1 e no máximo 10 pontos; ✨✨
    - Assim como os atributos anteriores o montante de energia (`amount` dentro de `energy`) deve ser alterado também, ele deve ficar cheio, valendo exatamente `10`;
    - O atributo `maxLifePoints` do Character **nunca poderá ser maior** que o `maxLifePoints` de sua raça (`race`). Se, ao incrementar o valor de `maxLifePoints` do Character esse valor ficar maior do que o `maxLifePoints` da raça, ele deve receber o valor igual ao do da raça. Exemplo: se o `maxLifePoints`da raça é 100, e o do Character é 95, e ao fazer o levelUp ele ficaria 8 pontos maior, isso daria 103, que é maior do que o da raça, portanto você deveria deixar em 100.
    - Ao final, o atributo `lifePoints` também deve ser atualizado, recebendo o novo valor de `maxLifePoints` (de acordo com as regras anteriores).
  - **`special ⚡`** este método não recebe parâmetro e as regras é você quem decide:
    - Aqui você pode expandir sua mente e realizar a lógica que achar mais interessante para um ataque especial, use tudo que aprendeu no mundo de T&D! :dragon_face:
    - Esta parte do requisito não esta sendo avalida é apenas para você se divertir aprendendo. 💚

✨ Dica de mestre: ✨
- Para gerar valores aleatórios, use a função `getRandomInt` fornecida no arquivo `src/utils.ts`.

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Character` deve ser exportada de forma padrão ( com `export default`).

<br>
</details>

<details close>
  <summary>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe Character:
  - A classe `Character` existe;
  - A classe `Character` implementa a interface `Fighter`;
  - `Character` possui uma `Race`;
  - `Character` possui um `Archetype`;
  - `Character` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `defense`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `energy`, que pode ser lido, mas não pode ser setado nem ter um de seus valores internos alterados;
  - `Character` possui um atributo `dexterity`, que pode ser lido, mas não pode ser setado;
  - `Character` pode subir de nível através do método `levelUp`, e seus atributos (`amount`, `maxLifePoints`, `strength`, `dexterity`, `defense`) terão um incremento;
  - `Character` pode receber danos através do método `receiveDamage`;
  - `Character1` pode atacar `Character2`;
</details>

---

### 8 - Crie a interface `SimpleFighter`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Uau, o nosso universo de T&D está ficando fabuloso! No entanto, nem todo mundo que luta possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais. Dito isto, vamos para mais uma *quest*: **criar a interface lutador simples**

As dicas para completar essa *quest* são:

- Crie uma `interface` chamada `SimpleFighter`;
- O arquivo `SimpleFighter.ts` deve ser criado no diretório `src/Fighter/`.
- A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`.
- A interface deverá possuir os métodos:
  - `attack()` que recebe um `enemy` do tipo `SimpleFighter` como parâmetro e não possui retorno (`void`);
  - `receiveDamage()` que recebe um `attackPoints` do tipo `number` como parâmetro e retorne um `number`;
- Aqui é um bom momento para treinarmos algumas skills deste bloco e aplicar uma refatoração, além disso você acaba adiantando uma parte do próximo requisito ✨. Utilize a segregação de interfaces, volte e observe nossa `interface Fighter`.

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a interface `SimpleFighter` deve ser exportada de forma padrão (com `export default`);
> - A interface `SimpleFighter` deve ser importada dentro de `src/Fighter/index.ts` e deve ser exportada de forma explícita (`export { SimpleFighter }`), como feito em requisitos anteriores.

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a interface SimpleFighter:
  - A interface `SimpleFighter` existe;
  - A interface `SimpleFighter` possui o atributo `lifePoints`;
  - A interface `SimpleFighter` possui o atributo `strength`;
  - A interface `SimpleFighter` possui o método `attack`, que recebe um `enemy` do tipo `SimpleFighter`;
  - A interface `SimpleFighter` possui o método `receiveDamage`, que recebe um `attackPoints` do tipo `number`;
</details>

---

### 9 - Crie a classe `Monster`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres. Então, sua próxima *quest* é: **criar a classe Monster**!

O que você deve saber para seguir em frente:

- O arquivo deve ser criado na raiz do diretório `src/` e chamar `Monster.ts`;
- A classe deve implementar a interface `SimpleFighter`;
- A classe `Monster` deve ter os atributos privados `lifePoints` e `strength`, ambos inicializados em seu **construtor**:
  - Os atributos `lifePoints` e `strength` devem ser do tipo `number`;
  - Devem ser inicializados no construtor:
    - `lifePoints` por padrão com o valor de `85`;
    - `strength` por padrão com o valor de `63`.
- Os atributos da classe `Monster` podem ser lidos mas não podem ser alterados:
  - `lifePoints` e `strength` devem retornar o tipo `number`.
- A classe `Monster` também deve implementar os métodos estendidos da `interface SimpleFighter`:
  - **`receiveDamage 😵`** este método recebe por parâmetro um valor (`attackPoints`) e as regras são:
    - Este valor deve ser decrescido de seus pontos de vida (`lifePoints`), assim causando um dano (`damage`);
    - Ao receber o ataque, sua vida nunca poderá chegar a `0`, se isto acontecer seus `lifePoints` devem valer `-1`;
    - Ao final o método deve retornar o valor atualizado dos pontos de vida.
  - **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    - Este dano deve ser calculado a partir de `attackPoints` equivalentes à força (`strength`) de quem ataca.

<br>

✨ Dica de mestre: ✨
- Aqui vamos precisar que os métodos de `Fighter` que recebiam um inimigo do tipo `Fighter` agora possam receber um `SimpleFighter`. Assim um `Fighter` pode atacar um `Monster` 😄.

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Monster` deve ser exportada de forma padrão ( com `export default`).

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe Monster:
  - A classe `Monster` existe;
  - A classe `Monster` implementa a interface `SimpleFighter`;
  - `Monster` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Monster` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Monster` pode receber danos através do método `receiveDamage`, fazendo com que seus `lifePoints` diminuam;
  - `Monster` pode atacar um `Character`, e o `Character` receberá dano;
  - `Character` pode atacar um `Monster`, e o `Monster` receberá de dano;
</details>

---

### 10 - Crie a classe `PVP`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido da sua mente depois das suas últimas *quests*. 
Nesse mundo, existem lutas, muitas delas inclusive épicas, denominadas `Battles` (batalhas). Sua representação geral/abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma dessas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️

Sua *quest* agora é justamente **criar a classe PVP**, então, você que lute ! 🗡️😂
Brincadeira! Estamos aqui para te ajudar e por isso trazemos abaixo algumas dicas preciosas para garantir a sua vitória neste requisito:

- O arquivo deve ser criado no diretório `src/Battle/` e se chamar `PVP.ts`;
- A classe `PVP` deve herdar de `Battle`;
- A classe `Battle` já esta criada, dê uma espiada nela; 🧐
- Na criação de uma instância de `PVP` é esperado que em seu construtor sejam recebidos dois `Characters` lutadores, ambos inicializados lá;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s). ✨✨

✨ Dica de mestre: ✨
- Use um dos _players_ para ser parâmetro do `super` na inicialização e use o método `fight` do super para dar o veredito da batalha, ou seja, se `super.fight()` retornar 1 o _player_ quer foi usado como parâmetro do `super` na inicialização ganhou, e se retornar -1 a vitória foi do _player_ que não foi o parâmetro do `super`; 

- Aqui ~~podemos~~ devemos sobrescrever o método `fight`;
  - No método `fight` sobrescrito, implemente uma lógica de ataque entre personagens lutadores da classe;
  - As personagens `devem batalhar` até uma das duas ser `derrotada`, em outras palavras, a batalha só deverá terminar, quando alguma personagem ter seus pontos de vida (`lifePoints`) igual a `-1`;
- Se necessário, refatore o que já foi feito com as interfaces `Fighter` e `SimpleFighter` para se adequarem melhor à sua nova implementação de batalha;
- Não esqueça de descomentar os trechos de código dos arquivos do diretório `Battle` como citado nas "Dica de mestre" do requisito 6 - Crie a interface `Fighter`.

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `PVP` deve ser exportada de forma padrão (com `export default`);
> - Novamente, dentro de `src/Battle/index.ts`, a classe (`PVP`) deve ser importada, porém esta deve ser exportada de forma normal (`export { PVP }`), como feito em requisitos anteriores.

<br>
</details>

<details close>
  <summary>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe PVP:
  - A classe `PVP` existe e pode ser criada uma nova instância, passando dois `Characters` lutadores;
  - A classe `PVP` pode ser utilizada onde a classe `Battle` é esperada e uma personagem que chamou várias vezes o levelUp e possui melhores atributos tem maiores chances de vencer;
  - A classe `PVP` pode receber tanto dois `Characters` quanto duas instâncias de uma implementação diferente de `Fighter`;
</details>

---

## Requisitos Bônus

### 11 - Criar a classe `PVE`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Nem todas as batalhas são entre personagens lutadoras (`Character`), afinal, há perigos à solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante, não é? Tornar isso possível é a sua próxima *quest*! 🧙‍♀️ ⚔️ 👾👹👻

Antes de prosseguir para essa nova batalha, leia atentamente as dicas abaixo !!! Só assim obteremos sucesso e prosperidade:

- O arquivo deve ser criado no diretório `src/Battle/` e se chamar `PVE.ts`;
- Lembre-se a classe `Battle` já esta criada;
- Na criação de uma instância de `PVE.ts` é esperado que em seu construtor seja recebido uma pessoa personagem lutadora (`Character Fighter`) e um *array* com pelo menos um monstro (`Monster`), ambos inicializados no **construtor**;
  - Como estamos falando de uma batalha *player versus environment*, este *array* de monstros também aceita instâncias de pessoas personagens lutadoras sendo elas simples ou não; (`Fighter`, `SimpleFighter`)
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);
  - Como na "Dica de mestre" do requisito anterior (`PVP`), não esqueça de implementar uma lógica de luta para este requisito também;
  - Lembre-se, aqui a luta é de uma personagem contra apenas um oponete ou uma legião deles. Logo, para a batalha ser finalizada, a personagem principal, ou seus oponentes, deverão ter perdido os seus respectivos pontos de vida (`lifePoints`).

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `PVE` deve ser exportada de forma padrão (com `export default`);
> - Novamente dentro de `src/Battle/index.ts` a classe (`PVE`) deve ser importada, porém desta vez de forma normal (`export { PVP }`), como feito em requisitos anteriores.

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe PVE:
  - A classe `PVE` existe e se pode ser criada uma nova instância, passando um `Character` e um array com um `Monster`;
  - A classe `PVE` pode ser utilizada onde a classe `Battle` é esperada. Além disso, uma personagem (`Character`) que chamou várias vezes o método `levelUp` e possui melhores atributos tem maiores chances de vencer uma luta contra somente um `Monster`, enquanto uma personagem com atributos menores perde uma luta contra diversos `Monsters`;
  - A classe `PVE` pode receber tanto `Character` e um array com um `Monster` quanto implementações diferentes de `Fighter` e `SimpleFighter` que não são `Character` nem `Monster`;
</details>

---

### 12 - Crie a classe `Dragon`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Seria muito estranho se esse mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos são representados como monstros aqui, mas com a característica especial de possuírem elevados valores de pontos de vida.

Nesta *quest*, você deve **criar a classe `Dragon`**, cuidando para garantir que:

- O arquivo deve ser criado na raiz de `src/` e se chamar `Dragon.ts`;
- A classe `Dragon` deve herdar de `Monster`;
- Como citado acima, um Dragão tem elevados valores de pontos de vida, então em seu construtor defina o valor de `_lifePoints` sendo igual a 999; :dragon_face::dragon_face:

:dragon_face: Dica de mestre: :dragon_face:
- Aqui é interessante voltar no conteúdo do course sobre **Herança e Interfaces** e relembrar um pouco de **Atributos protegidos**;

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Dragon` deve ser exportada de forma padrão ( com `export default`).

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a classe Dragon:
  - A classe `Dragon` existe;
  - A classe `Dragon` herda de `Monster`;
  - `Dragon` deve ter 999 no valor do atributo `lifePoints`;
</details>

---

### 13 - Crie objetos no arquivo `index`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Você já modelou todo o mundo de T&D, maravilha!

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então a sua última *quest* para completar essa aventura é dar vida às suas personagens e criar algumas instâncias das classes criadas anteriormente. 🪄

Algumas dicas se fazem necessárias para completar sua última missão no mundo de T&D. Elas são:

- O arquivo deve ser criado na raiz de `src/` e se chamar `index.ts`;
- ⚠️ Preste bastante atenção nos nomes das variáveis/métodos e nas exportações pedidas deste último requisito; :wink:.
- Crie `3` objetos do tipo `Character`:
  - As variáveis devem-se chamar `player1`, `player2` e `player3`;
  - Execute algumas vezes o método `levelUp` do `player1`;
  - Ao final do arquivo `index.ts` exporte `player1`, `player2` e `player3`.
- Crie `2` objetos do tipo `Monster`:
  - As variáveis devem se chamar `monster1` e `monster2`;
  - `monster1` deve ser um `Monster` e `monster2` deve ser um `Dragon`;
  - Ao final do arquivo `index.ts` exporte `monster1` e `monster2`.
- Crie um objeto do tipo `PVP`:
  - A variável deve se chamar `pvp`;
  - Como parâmetro do construtor passe `player2` e `player3`;
  - Ao final do arquivo `index.ts` exporte `pvp`.
  - **NÃO execute o método `pvp.fight`**;
- Crie um objeto do tipo `PVE`:
  - A variável deve se chamar `pve`;
  - Como parâmetro do construtor passe `player1` e um array contendo `monster1` e `monster2`;
  - Ao final do arquivo `index.ts` exporte `pve`.
  - **NÃO execute o método `pve.fight`**;
- Crie uma função chamada `runBattles`:
  - A função recebe por parâmetro um *array* de batalhas (`battles`) e este *array* é do tipo `Battle`; ✨✨
  - Dentro da função, crie uma repetição percorrendo este array e chame o método `fight`;
  - Ao final do arquivo `index.ts` exporte `runBattles`.

✨ Última dica de mestre: ✨
- Lembre-se `Battle` não pode ser instanciada, pois é uma classe abstrata;

<br>

> ⚠️ **Atenção**:
> - Para que os testes funcionem corretamente, os objetos/métodos criados em `src/index.ts` devem ser exportados como explicado no requisito;

<br>
</details>

<details close>
  <summary><strong>🔎 O que será verificado</strong></summary>

  > :dragon_face: Para a criação de objetos no arquivo index:
  - Existem 3 objetos do tipo `Character` no arquivo `index`, exportados como `player1`, `player2` e `player3` e o método `levelUp` foi chamado algumas vezes em `player1`
  - Existem 2 objetos do tipo `Monster` no arquivo `index`, exportados como `monster1`, `monster2`, sendo que o objeto `monster2` é um `Dragon`;
  - Existe um objeto do tipo `PVP` (com os `Characters` `player2` e `player3`), exportados no arquivo index como `pvp` e nele *NÃO* foi executado o método `pvp.fight`;
  - Existe um objeto do tipo `PVE` (com o `Character` `player1` e com os `Monsters` `monster1` e `monster2`), exportado no arquivo `index` como `pve` e nele *NÃO* foi executado o método `pve.fight`;
  - Existe uma função chamada `runBattles`, que recebe um `array de Battles` e chama em seu interior o método `battle.fight`;
</details>

---
