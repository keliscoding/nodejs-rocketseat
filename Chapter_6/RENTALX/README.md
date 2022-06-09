
## Requisitos Funcionais


### Cadastro de Carro

- [] Deve ser possível cadastrar um novo carro.

### Listagem de Carros

- [] Deve ser possível listar os carros disponíveis.
- [] Deve ser possível listar todos os carros desponíveis pelo nome da categoria.
- [] Deve ser possível listar todos os carros desponíveis pelo nome da marca.
- [] Deve ser possível listar todos os carros desponíveis pelo nome da carro.


### Cadastro de Especificação do Carro

- [] Deve ser possível cadastrar uma especificação para um carro.


### Cadastro de Imagens do Carro

- [] Deve ser possível cadastrar a imagem do carro.


### Aluguel de Carro

- [] Deve ser possível cadastrar um aluguel.


### Devolução de Carro

- [] Deve ser possível realizar a devolução de um carro.


### Listagem de Alugueis para Usuário

- [] Deve ser possível realizar a busca de todos os alugueis para o usuário.


### Recuperar Senha

- [] Deve ser possível o usuário recuperar a senha informando o email.
- [] O Usuário deve receber um email com o passo a passo para a recuperação da senha.
- [] O Usuário deve conseguir inserir uma nove senha.


## Requisitos não Funcionais


### Cadastro de Imagens do Carro
- [] Utilizar o multer para upload dos arquivos.


## Regra de Negócio

### Cadastro de Carro
- [] Não deve ser possível cadastrar um carro com uma placa já existente.
- [] Não deve ser possível alterar uma placa de um carro já cadastrado.
- [] O carro deve ser cadastrado por padrão, com disponibilidade.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.


### Listagem de Carros

- [] O usuário não precisa estar logado no sistema.


### Cadastro de Especificação no Carro

- [] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [] Não deve ser possível cadastrar um especificação já existente para o mesmo carro.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.


### Cadastro de Imagens do Carro

- [] O usuário deve cadastrar mais de uma imagem para o mesmo carro.
- [] O usuário responsável pelo cadastro deve ser um usuário administrador.


### Aluguel de Carro

- [] O aluguel deve ter duração mínima de 24 horas.
- [] Não deve ser possível cadastrar um aluguel, caso já exista um aberto para o mesmo usuário.
- [] Não deve ser possível cadastrar um aluguel, caso já exista um aberto para o mesmo carro.
- [] O Usuário deve estar logado na aplicação.
- [] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.


### Devolução de Carro

- [] Se o Carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- [] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- [] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [] Caso o horário de devolução seja superior ao horário previsto de entrega , deverá ser cobrado multa proporcional aos dias de atraso.
- [] Caso haja multa, deverá ser somado ao total do aluguel.
- [] O Usuário deve estar logado na aplicação.


### Listagem de Alugueis para Usuário

- [] O Usuário deve estar logado na aplicação.


### Recuperar Senha 

- [] O Usuário deve receber um email com o passo a passo para recuperação da senha.
- [] O Link enviado para a recuperação deve expiarar em 3 horas.