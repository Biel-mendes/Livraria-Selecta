# Cadastro de usuário

def cadastrar_usuario(nome, email):
    usuario = {"nome": nome, "email": email}
    usuarios.append(usuario)
    return "Usuário cadastrado com sucesso!"

# Exploração de livros
def explorar_livros():
    return livros

# Visualização de detalhes de um livro específico
def detalhes_livro(id_livro):
    livro = next((livro for livro in livros if livro['ID'] == id_livro), None)
    if livro:
        return livro
    else:
        return {"mensagem": "Livro não encontrado!"}

# Busca avançada de livros por critérios específicos
def busca_avancada(preco_max):
    resultados = [livro for livro in livros if livro['Preco'] <= preco_max]
    return resultados

# Adição de um livro ao carrinho
def adicionar_carrinho(id_livro, quantidade):
    livro = next((livro for livro in livros if livro['ID'] == id_livro), None)
    if livro:
        if livro['Estoque'] >= quantidade:
            mensagem = f"{quantidade}x {livro['Titulo']} adicionado(s) ao carrinho!"
        else:
            mensagem = "Quantidade solicitada excede o estoque disponível!"
    else:
        mensagem = "Livro não encontrado!"
    return mensagem
