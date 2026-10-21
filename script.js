// LINK DO CHATBOT
const linkBot = "COLE_AQUI_O_LINK_DO_SEU_BOT";

// LISTA DE PRODUTOS
const produtos = [
    {
        nome: "Vestido Floral",
        preco: 89.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600"
    },
    {
        nome: "Camiseta Básica",
        preco: 49.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
        nome: "Jaqueta Jeans",
        preco: 159.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600"
    },
    {
        nome: "Moletom Casual",
        preco: 119.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
    },
    {
        nome: "Bolsa Fashion",
        preco: 99.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    },
    {
        nome: "Tênis Casual",
        preco: 179.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    }
];

// CARRINHO
let carrinho = [];

// EXIBIR PRODUTOS
function mostrarProdutos(lista) {
    const container = document.getElementById("lista-produtos");

    container.innerHTML = "";

    lista.forEach((produto) => {
        const indice = produtos.indexOf(produto);

        container.innerHTML += `
            <div class="produto-card">
                <img src="${produto.imagem}"
                     alt="${produto.nome}">

                <div class="produto-info">
                    <h3>${produto.nome}</h3>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </p>

                    <button onclick="adicionarCarrinho(${indice})">
                        🛒 Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
    });
}

// FILTRAR PRODUTOS
function filtrarProdutos(categoria) {
    if (categoria === "todos") {
        mostrarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(
            produto => produto.categoria === categoria
        );

        mostrarProdutos(filtrados);
    }
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(indice) {
    const produto = produtos[indice];

    carrinho.push(produto);

    document.getElementById("contador").textContent =
        carrinho.length;

    alert(produto.nome + " adicionado ao carrinho!");
}

// MOSTRAR CARRINHO
function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let resumo = "🛒 SEU CARRINHO\n\n";
    let total = 0;

    carrinho.forEach((produto) => {
        resumo += produto.nome + " - R$ " +
            produto.preco.toFixed(2).replace(".", ",") + "\n";

        total += produto.preco;
    });

    resumo += "\nTotal: R$ " +
        total.toFixed(2).replace(".", ",");

    alert(resumo);
}

// ABRIR CHATBOT
function abrirChatbot() {
    const mensagem = document.getElementById("mensagem");

    if (linkBot === "COLE_AQUI_O_LINK_DO_SEU_BOT") {
        mensagem.textContent =
            "Configure o link do Landbot primeiro!";
        return;
    }

    mensagem.textContent =
        "Abrindo a assistente virtual StyleBot...";

    window.open(linkBot, "_blank", "noopener,noreferrer");

    // LINK DO CHATBOT LAND BOT
const linkBot = "COLE_AQUI_O_LINK_DO_SEU_BOT";

// LISTA DE PRODUTOS
const produtos = [
    {
        nome: "Vestido Floral",
        preco: 89.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600"
    },
    {
        nome: "Camiseta Básica",
        preco: 49.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
        nome: "Jaqueta Jeans",
        preco: 159.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600"
    },
    {
        nome: "Moletom Casual",
        preco: 119.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
    },
    {
        nome: "Bolsa Fashion",
        preco: 99.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    },
    {
        nome: "Tênis Esportivo",
        preco: 179.90,
        categoria: "calcados",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        nome: "Calça Jeans",
        preco: 129.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
    },
    {
        nome: "Camisa Social",
        preco: 109.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=600"
    },
    {
        nome: "Óculos de Sol",
        preco: 69.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    },
    {
        nome: "Tênis Branco",
        preco: 199.90,
        categoria: "calcados",
        imagem: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600"
    },
    {
        nome: "Blusa Feminina",
        preco: 59.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1564257577-7cadc5d38e3e?w=600"
    },
    {
        nome: "Jaqueta Masculina",
        preco: 189.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
        nome: "Relógio Casual",
        preco: 149.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
        nome: "Salto Elegante",
        preco: 139.90,
        categoria: "calcados",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"
    },
    {
        nome: "Saia Jeans",
        preco: 79.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=600"
    },
    {
        nome: "Bermuda Casual",
        preco: 69.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600"
    },
    {
        nome: "Mochila Moderna",
        preco: 119.90,
        categoria: "acessorios",
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    },
    {
        nome: "Bota Feminina",
        preco: 219.90,
        categoria: "calcados",
        imagem: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600"
    },
    {
        nome: "Vestido Elegante",
        preco: 149.90,
        categoria: "feminino",
        imagem: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600"
    },
    {
        nome: "Camisa Polo",
        preco: 89.90,
        categoria: "masculino",
        imagem: "https://images.unsplash.com/photo-1625910513413-5fc45a0c20c8?w=600"
    }
];

// CONFIGURAÇÕES
let categoriaAtual = "todos";
let carrinho = [];
let favoritos = [];

// FORMATAR PREÇO
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// MOSTRAR PRODUTOS
function mostrarProdutos(lista) {
    const container = document.getElementById("lista-produtos");

    container.innerHTML = "";

    document.getElementById("quantidade-produtos").textContent =
        lista.length + " produtos encontrados";

    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    lista.forEach(produto => {
        const indice = produtos.indexOf(produto);
        const favorito = favoritos.includes(indice);

        const tamanhos = produto.categoria === "acessorios"
            ? ["Único"]
            : produto.categoria === "calcados"
                ? ["35", "36", "37", "38", "39", "40", "41", "42"]
                : ["P", "M", "G", "GG"];

        container.innerHTML += `
            <div class="produto-card">
                <img src="${produto.imagem}"
                     alt="${produto.nome}"
                     loading="lazy">

                <div class="produto-info">
                    <p class="categoria">
                        ${produto.categoria.toUpperCase()}
                    </p>

                    <h3>${produto.nome}</h3>

                    <p class="preco">
                        ${formatarPreco(produto.preco)}
                    </p>

                    <select id="tamanho-${indice}">
                        ${tamanhos.map(t => `
                            <option value="${t}">${t}</option>
                        `).join("")}
                    </select>

                    <button class="favorito"
                        onclick="alternarFavorito(${indice})">
                        ${favorito ? "❤️ Favoritado" : "🤍 Favoritar"}
                    </button>

                    <button onclick="adicionarCarrinho(${indice})">
                        🛒 Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
    });
}

// FILTRAR POR CATEGORIA
function filtrarProdutos(categoria) {
    categoriaAtual = categoria;
    atualizarProdutos();
}

// PESQUISA E ORDENAÇÃO
function atualizarProdutos() {
    const pesquisa = document.getElementById("pesquisa")
        .value.toLowerCase();

    const ordenacao = document.getElementById("ordenacao").value;

    let lista = produtos.filter(produto => {
        const correspondeNome = produto.nome
            .toLowerCase().includes(pesquisa);

        const correspondeCategoria =
            categoriaAtual === "todos" ||
            produto.categoria === categoriaAtual;

        return correspondeNome && correspondeCategoria;
    });

    if (ordenacao === "menor") {
        lista.sort((a, b) => a.preco - b.preco);
    }

    if (ordenacao === "maior") {
        lista.sort((a, b) => b.preco - a.preco);
    }

    if (ordenacao === "nome") {
        lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    mostrarProdutos(lista);
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(indice) {
    const produto = produtos[indice];

    const tamanho = document.getElementById(
        "tamanho-" + indice
    ).value;

    carrinho.push({
        nome: produto.nome,
        preco: produto.preco,
        tamanho: tamanho
    });

    document.getElementById("contador").textContent =
        carrinho.length;

    alert(produto.nome + " adicionado ao carrinho!");
}

// MOSTRAR CARRINHO
function mostrarCarrinho() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let texto = "🛒 SEU CARRINHO\n\n";
    let total = 0;

    carrinho.forEach((item, indice) => {
        texto += (indice + 1) + ". " + item.nome +
            " - Tamanho: " + item.tamanho +
            " - " + formatarPreco(item.preco) + "\n";

        total += item.preco;
    });

    texto += "\nTOTAL: " + formatarPreco(total);

    alert(texto);
}

// FAVORITOS
function alternarFavorito(indice) {
    if (favoritos.includes(indice)) {
        favoritos = favoritos.filter(i => i !== indice);
    } else {
        favoritos.push(indice);
    }

    atualizarProdutos();
}

// CHATBOT
function abrirChatbot() {
    const mensagem = document.getElementById("mensagem");

    if (linkBot === "") {
        mensagem.textContent =
            "⚠️ Configure o link do Landbot primeiro!";
        return;
    }

    mensagem.textContent = "Abrindo o StyleBot...";

    window.open(linkBot, "_blank", "noopener,noreferrer");
}

// INICIAR SITE
atualizarProdutos();
}

// CARREGAR PRODUTOS AO ABRIR A PÁGINA
mostrarProdutos(produtos);