<p align="center"><img src="./img/wordart.png" width="400px"></p>

# Instalação Git

- [Linux](https://git-scm.com/download/linux) :purple_heart::100:
- [Mac](https://git-scm.com/download/mac) :money_with_wings:
- [Windows](https://git-scm.com/download/win) :weary:


# Configurando repositório remoto

> Vamos usar github como exemplo, mas para outros repositórios remotos o procedimento é basicamente o mesmo.


- Entre em sua conta em Profile - Settings - SSH Keys

- Para gerar sua chave SSH, vá no terminal e digite os seguintes comandos: 

  ```shell
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  > pressionar enter nos passos a seguir até gerar.

  ```shell
  eval "$(ssh-agent -s)"
  ```

  ```shell
  ssh-add ~/.ssh/id_rsa
  ```

  

- Para Copiar sua chave SSH para ser adicionado na sua conta do github/gitlab:

  - No **Linux** :purple_heart::100::

    - ```shell
      cat ~/.ssh/id_rsa.pub
      ```

      

  - No **Windows**:

    - ```shell
      clip < ~/.ssh/id_rsa.pub
      ```

      

  - No **Mac**:

    - ```shell
      pbcopy < ~/.ssh/id_rsa.pub
      ```
> A chave será copiada para a área de transferência.
      
- No GitHub entre em [Settings - SSH Keys - New SSH Key](https://github.com/settings/ssh/new)
- Agora só colar sua chave no campo 'key'.



# Comandos

> Comandos serão iguais em ambos os SO.

### Básico de comandos do bash

```shell
pwd  # Exibe o diretório atual
ls   # Lista os arquivos e pastas no diretório
mkdir <pasta>  # Cria um diretório
cd <pasta>   # Entra no diretório informado
mv <atual> <novo>  # Renomeia um arquivo ou diretório
```

## Comandos Básicos do git (famoso "com isso me viro")

- `git init` // inicia a linha do tempo
- `git add` // adiciona ou atualiza mudanças para irem para a linha do tempoo
- `git commit` // adiciona um ponto na linha do tempo
- `git log` // visualiza os pontos na linha do tempo / commit
- `git status` // informa o estado das alterações do nosso projeto
- `git show` // apresenta determinado ponto na história
- `git branch` // gerenciar novas linhas do tempo
- `git checkout` // manipula as linhas do tempo
- `git merge` // unir linhas do tempo
- `git push` // envia alterações locais para o repositório remoto
- `git clone` // clonar um projeto / repositório
- `git pull` // puxa do repositório remoto


### Git log

```shell
gitk // Visualize os Commits numa interface gráfica

git log // Todos os commits

git log -p // Commits realizados + Diff

git log -p -3 // Commits realizados + Diff com limitação de exibição

git log --stat // Resultado com estatistica

git log --name-status // Visualiza status de todos os arquivos que foram modificados

git log --oneline // Exibe log com hash e título do commit

git log --pretty=oneline // Visualizando somente o código e mensagem de cada commit

git log --abbrev-commit // Abrevia hash-commit

git log --pretty=oneline --abbrev-commit // Resulta em linha única com hash-commit abreviada

git log --pretty=format:"%h - %an, %ar : %s" // Resultado personalizado com hash - autor - tempo - titulo-commit
```

##### Visualizar número de commits por usuário

```shell
git shortlog -s
```

##### Visualizar alterações feitas depois do último commit que ainda não foram stageadas

```shell
git diff
```

##### Visualizar alterações feitas depois do último commit que já foram stageadas

```shell
git diff --cached
```

##### Identificando User que fez alterações em determinado arquivo

```shell
git blame nome-arquivo
```

# Commits

**1 Commitando arquivos**

*Depois de adicionar os arquivos com git add -A, por exemplo.*

```shell
git commit -m "Inseir um Comentário Significativo"
```

#####  Commitando arquivos já inseridos na Staging Area

```shell
git commit -a -m "Inseir um Comentário Significativo"
git commit -am "Inseir um Comentário Significativo"
```

##### Editando a mensagem do último commit

```shell
git commit --amend -m "mensagem-do-commit"
```

##### Fechar issues através de commits

```shell
git commit -m "Mensagem commit - fix ou resolve IDissue"
```

O ID da Issue você consegue na URL da mesma. Ex.: `issues/8` - 8.

Outras palavras chave que podemos usar para fechamento de Issues: `fix, fixes, fixed, close, closes, closed, resolve, resolves, resolved`

##### Revertendo ação de um commit específico

```shell
git revert commit-hash
```

Para encontrar o hash, você precisa rodar no terminal: `git log`.

O hash é aquele número que aparece em `comit: xxxxxxx.`

##### Abortando o processo de reverter commit

```shell
git revert --abort
```

##### Abortando o merge

```shell
git merge --abort
```

##### Acionando a [mergetool](https://git-scm.com/docs/git-mergetool)

```shell
git mergetool
```

##### Excluindo um commit local

```shell
git reset --hard hash-commit
```

##### Visualiza alterações específicas

```shell
git diff nome-arquivo.extensao
```

##### Visualiza alterações entre commits

```shell
git diff hash-commit1 hash-commit2
```

##### Visualiza arquivos em conflito

```shell
git diff --name-only --diff-filter=U
```

##### Transferindo alterações que ainda não estão commitadas para o stash

```shell
git stash
```

##### Visualizando itens que estão no stash

```shell
git stash list
```

##### Utilizando o último item adicionado no stash

```shell
git stash apply
```

##### Remove Stash

```shell
git stash drop stash@{0}
```

##### Aplica e remove o último Stash

```shell
git stash pop
```

##### Limpando o stash

```shell
git stash clear
```

# Branches

##### Cria uma nova branch

```shell
git branch nome-branch

# Acessando a nova branch
git checkout nome-branch 

# Criando e acessando uma nova branch
git checkout -b nome-branch 

# Criando uma nova branch vazia
git checkout --orphan nome-branch 
```

##### Cria uma branch local baseada na remota

```shell
git fetch origin 

git checkout origin/feature-x -b feature-x
```

##### Renomeia branch local

```shell
# Renomeia a brach localmente
git branch -m old-branch new-branch 

# Deleta a branch velha
git push --set-upstream origin new-branch

# Empurra a nova branch, define a branch local no track remoto
git push origin :old-branch  
```

##### Retorna num ponto específico e cria uma nova branch

```shell
git checkout hash-commit -b nome-nova-branch
```

##### Para encontrar o hash, você precisa rodar no terminal: `git log` . O hash é aquele número que aparece em `comit: xxxxxxx.`

##### Renomeando branches

```shell
git branch -m nome-branch
```

##### Aplicando merge em branches

```shell
# Precisa estar na branch de destino
git merge nome-branch 
```

##### Visualizando todas as branches existentes no repositório

```shell
# A branch corrente será marcada por um asterisco
git branch 
```

##### Visualizando todas as branches locais e remotas

```shell
git branch -a
```

##### Deletando uma branch

```shell
git branch -D nome-branch
```

##### Deletando branch remota

```shell
git push origin :nome-branch
```


# Referências
  [GUIA RÁPIDO DE GIT E GITHUB](https://github.com/gprando55/guia_Git#guia-rápido-de-git--github-desktop_computer)
