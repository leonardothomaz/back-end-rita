# [Iniciar]()

---

## Iniciar

```sh
# Clonar o repositorio em sua maquina:
git clone https://github.com/leonardothomaz/ProjetoOI2.git

# Baixar as dependencias:
yarn

# Criar servidor de desenvolvimento
yarn dev:server

# Rodar as migrations 
yarn typeorm migration:run

# Criar uma migration
yarn typeorm migration:create -n nomeDaMigration

# Caso necessário reverter a migration executada - reverte apenas a ultima!
yarn typeorm migration:revert
```
## Configuração de Banco de dados

```sh
    # caso queira utilizar docker, execute o seguinte comando:
    docker run --name trabalhooficina_postgres -e POSTGRES_PASSWORD=trabalhooficina -p 5432:5432 -d postgres
    # Apos rodar este comando usando o DBeaver poderá conectar neste banco, deverá criar um DB chamado -> pgoficina2
    # Ou poderá utilizar o postgres direto da sua maquina sem a necessidade do docker, lembrando que deverá estar na porta
    # 5432 e deverá possuir um banco com as mesmas configurações definidas no arquivo ormconfig.json
```