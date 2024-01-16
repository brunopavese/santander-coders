## Atividade 1 - Agência ✈️ TravelMundo

Você é o desenvolvedor do um site de reservas de viagens chamado "TravelMundo".

A empresa deseja criar uma página de reserva que ofereça uma experiência intuitiva e fácil de usar para os usuários. No entanto, você precisa escolher o tipo correto de campo de entrada HTML para cada parte do processo de reserva.

Crie uma página HTML (CSS é opcional) que contenha o formulário de reserva com o tipo correto de campo de entrada para cada um dos cenários trazidos pelo cliente.

Aqui estão as situações em que você deve escolher o tipo apropriado de campo de entrada:

- **Cenário 1:** Para permitir que os usuários insiram seu nome completo ao fazer uma reserva de viagem.
- **Cenário 2:** Para que os usuários escolham a data de partida de sua viagem.
- **Cenário 3:** Para que os usuários informem o número de passageiros.
- **Cenário 4:** Para que os usuários selecionem seu país de residência a partir de uma lista suspensa.
- **Cenário 5:** Para que os usuários insiram seu endereço de e-mail ao fazer uma reserva.
- **Cenário 6:** Para que os usuários escolham o tipo de refeição desejado durante o voo (por exemplo, vegetariana, sem glúten, padrão) [uma refeição].
- **Cenário 7:** Para permitir que os usuários insiram o número de telefone de contato durante o processo de reserva.
- **Cenário 8:** Para que os usuários escolham o destino da viagem entre várias opções (por exemplo, Paris, Londres, Nova York, Tóquio).
- **Cenário 9:** Para que os usuários indiquem se têm alguma preferência de assento (por exemplo, janela, corredor, próximo à saída de emergência) durante o voo.
- **Cenário 10:** Para que os usuários insiram os detalhes do cartão de crédito ao efetuar o pagamento da reserva.
- **Cenário 11:** Para que os usuários façam o upload de uma cópia digitalizada de seu passaporte como parte do processo de reserva para viagens internacionais.
- **Cenário 12**: Para que os usuários possam selecionar as opções de preferências de serviço, como serviço de quarto, traslado do aeroporto e passeios turísticos adicionais. É possível escolher várias opções.

## Atividade 2 - Realizando a reserva da TravelMundo

Agora que você criou o formulário de reserva de viagem para o "TravelMundo," é hora de simular a submissão do formulário e entender como os dados seriam processados.

Utilize o método GET para enviar os dados.

Verifique se os dados foram enviados corretamente, utilize o console do navegador.

```javascript
const urlParams = window.location.search
