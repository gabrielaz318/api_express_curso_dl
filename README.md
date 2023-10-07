# Agendamento de consulta médica

### **Inicialização container pro DB**

Você pode usar esse comando para iniciar o container:

`docker run --name api_express_curso_dl -p 5432:5432 -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -d -t postgres`

> Caso apareça esse erro:
>
> error during connect: this error may indicate that the docker daemon is not running
>
> Utilize esse comando:
>
> `"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchDaemon`
>
> Caso ainda não funcione use esse:
>
> `wsl --update` e tente abrir o docker

### **Funcionalidades**

---

### **Cadastro de Usuários**

- [x] Deve ser possível o usuário realizar um cadastro.
  - [x] O usuário não precisa estar autenticado no sistema para se cadastrar.
  - [x] Não deve ser possível realizar o cadastro de um usuário ser username e senha.
  - [x] Não deve ser possível realizar um cadastro de username já existente.
  - [x] Não deve ser possível o usuário cadastrar a permissão de administrador.

---

### **Cadastro de Especialidade**

- [ ] Deve ser possível um usuário cadastrar uma especialidade.
  - [ ] O usuário precisa estar autenticado na aplicação.
  - [ ] Não deve ser possível realizar o cadastro de uma especialidade jpa existente, ou seja, com o mesmo nome.
  - [ ] O usuário precisa ter permissão de administrador.
  - [ ] Não deve ser possível cadastrar uma especialidade com nome vazio.
