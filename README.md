# CotaCrypto

### Desafio: Dashboard de Cotação de Criptomoedas

#### Objetivo:
Desenvolver uma aplicação que consome a API da CoinGecko para mostrar cotações de diferentes criptomoedas em tempo real. O usuário deve ser capaz de:
- Visualizar a cotação atual de diferentes criptomoedas.
- Ver gráficos de variação de preço ao longo do tempo.
- Favoritar criptomoedas para fácil acesso.

#### API:
- [CoinGecko API](https://www.coingecko.com/en/api): A API da CoinGecko fornece informações sobre o mercado de criptomoedas, incluindo preços em tempo real, variação de preços e outros dados.

#### Requisitos Funcionais:
1. **Página Inicial:**
   - Exibir uma lista com a cotação atual das principais criptomoedas (Bitcoin, Ethereum, Litecoin, etc.).
   - Cada criptomoeda deve exibir seu nome, símbolo, valor atual em dólar, e uma variação percentual nas últimas 24 horas.
   - Permitir que o usuário adicione moedas aos "favoritos" para fácil acompanhamento.

2. **Favoritos:**
   - Uma página separada que exibe apenas as criptomoedas favoritas, com as mesmas informações da página inicial.
   - O usuário deve poder remover uma criptomoeda dos favoritos.
   - Os favoritos devem ser armazenados no `localStorage`.

3. **Gráficos de Preço:**
   - Ao clicar em uma criptomoeda, o usuário deve ser redirecionado para uma página de detalhes que exibe um gráfico de variação de preço nos últimos 7 dias.
   - O gráfico deve ser interativo, permitindo visualizar o preço em diferentes pontos do tempo.

4. **Filtros:**
   - Na página inicial, o usuário deve ser capaz de filtrar as criptomoedas por sua variação percentual (ex.: mostrar apenas as que subiram ou caíram nas últimas 24 horas).
   - Implementar um campo de busca para procurar por criptomoedas específicas pelo nome ou símbolo.

#### Requisitos Técnicos:
1. **React:**
   - Utilizar Hooks (como `useState`, `useEffect`) e Context API para gerenciamento de estado global.
   - Usar bibliotecas de gráficos como Chart.js ou D3.js para exibir os gráficos de preço.
   - Utilizar `localStorage` para persistência dos favoritos.

2. **Angular:**
   - Usar serviços para consumir a API da CoinGecko.
   - Implementar rotas para navegação entre a lista de moedas, detalhes de moedas e favoritos.
   - Utilizar o módulo `HttpClient` para requisições HTTP.
   - Uso de Angular Charts ou outra biblioteca para gráficos.

3. **Estilização:**
   - A aplicação deve ser visualmente atraente e responsiva. O layout deve ser organizado de maneira a exibir as cotações de forma clara e intuitiva.
   - Implementar dark mode como um diferencial.

4. **Tratamento de Erros e Loading:**
   - Exibir um indicador de carregamento enquanto as cotações são carregadas.
   - Tratar erros de requisição à API, como falta de conexão ou dados incorretos.

#### Diferenciais:
- **Notificações em Tempo Real:** Implementar notificações ou alertas quando uma criptomoeda atingir um certo valor (via WebSocket, se possível).
- **Gráficos Avançados:** Implementar gráficos mais avançados, como volume de negociação e comparações entre moedas.
- **Testes Unitários:** Implementar testes unitários com Jest (React) ou Jasmine (Angular).
- **Histórico de Favoritos:** Permitir que o usuário veja o histórico de preços das criptomoedas favoritas, mostrando gráficos de variação no tempo.
- **PWA:** Transformar a aplicação em um PWA para funcionar offline e permitir acesso rápido via dispositivos móveis.

#### Passos para Iniciar:
1. **Obter a API Key da CoinGecko:**
   - A CoinGecko API é pública e não requer autenticação, porém, verifique os limites de requisição na documentação: [CoinGecko API Documentation](https://www.coingecko.com/en/api).

2. **Criação do Projeto:**
   - Criar um novo projeto em React ou Angular e configurar a estrutura básica, integrando com a API da CoinGecko para exibir as cotações de criptomoedas.

#### Avaliação:
- **Consumo de API:** Correta integração com a API da CoinGecko e bom uso dos dados retornados.
- **Gráficos:** Implementação de gráficos claros e interativos para exibir a variação de preços.
- **UI/UX:** Interface atraente, responsiva e bem organizada, com foco em uma boa experiência de usuário.
- **Gerenciamento de Estado:** Persistência eficiente dos favoritos no `localStorage` ou outro meio de armazenamento local.

#### Prazo:
O prazo de entrega para o projeto é de 7 dias a partir da data de recebimento deste teste. Acreditamos que esse prazo é suficiente para concluir as tarefas propostas, considerando um planejamento e gestão de tempo eficazes.

#### Solicitação de Extensão de Prazo:

Entendemos que imprevistos podem ocorrer e que cada desenvolvedor tem um ritmo de trabalho. Caso precise de mais tempo para concluir o projeto, é possível solicitar uma extensão do prazo. No entanto, pedimos que nos informe até o 6º dia do prazo inicial, incluindo um argumento sólido que justifique a necessidade de mais tempo.
