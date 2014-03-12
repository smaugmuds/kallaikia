var HMUD_Guide = [
    [
        "Movementos",
        [
            ["norte", "Anda para o norte."],
            ["sur", "Anda para o sur."],
            ["leste", "Anda para o leste."],
            ["oeste", "Anda para o oeste."],
            ["arriba", "Anda para cima."],
            ["abaixo", "Anda para baixo."],
            ["mirar", "Digite VER para observar a sala onde você está. VER <nome> para ver uma coisa, pessoa ou criatura. VER QUADRO irá ver o objeto quadro."],
            ["saidas", "Lista as saídas visíveis."],
            ["entrar", "Entra em algum lugar. ENTRAR PORTAL para entrar em um portal."],
            ["abrir", "Abre uma porta ou objeto. ABRIR <porta ou objeto>. ABRIR NORTE irá abrir uma porta que esteja fechada ao norte."],
            ["fechar", "Fecha uma porta ou objeto. FECHAR <porta ou objeto>. FECHAR SUL irá fechar uma porta que esteja aberta ao sul."],
            ["atrancar", "Tranca uma porta ou objeto. TRANCAR <porta ou objeto>. TRANCAR LESTE irá trancar uma porta que esteja aberta à leste. É preciso ter a chave da porta para trancá-la."],
            ["desatrancar", "Destranca uma porta ou objeto. DESTRANCAR <porta ou objeto>. DESTRANCAR OESTE irá detrancar uma porta que esteja aberta à oeste. É preciso ter a chave da porta para destrancá-la."],
            ["acordar", "Acorda, caso esteja dormindo."],
            ["dormir", "Dorme, caso esteja acordado. Recupera pontos mais rapidamente."],
            ["descansar", "Descansa. Recupera pontos um pouco mais rápido, com a vantagem de correr menos riscos do que dormir (ser atacado uma criatura, por exemplo)."],
            ["sentar", "Senta."],
            ["levantar", "Levanta."],
            ["meditar", "Medita, recuperando os pontos de mana com maior rapidez."]
        ]
    ],
    [
        "Comunicación",
        [
            ["falar", "Fala. Apenas digite FALAR <mensagem>. As pessoas que estiverem na mesma sala que você receberão a mensagem."],
            ["contar", "Conta algo para alguém. Ou seja, é uma conversa em particular. Use FALAR <pessoa> <mensagem>."],
            ["aralar", "Envia uma mensagem para todas os jogadores."]
        ]
    ],
    [
        "Obxetos",
        [
            ["inventario", "Lista os objetos que você está carregando."],
            ["equipamento", "Lista os objetos que você está vestindo."],
            ["recoller", "Recoller um objeto. Exemplo: RECOLLER ESCUDO."],
            ["soltar", "Solta um objeto. Exemplo: SOLTAR CHAVE."],
            ["vestir", "Veste algum objeto. Exemplo: VESTIR BOTAS."],
            ["desvestir", "Remove um objeto que esteja vestindo. Exemplo: DESVESTIR BOTAS."],
            ["asegurar", "Asegura um objeto. Exemplo: SEGURAR TOCHA."],
            ["empunhar", "Empunha uma arma. Exemplo: EMPUNHAR ESPADA."],
            ["ponher", "Coloca um objeto em algum lugar. Exemplo: PÔR PÃO MOCHILA coloca o pão dentro da mochila."],
            ["observar", "Digite VER para observar a sala onde você está. VER <nome> para ver uma coisa, pessoa ou criatura. VER QUADRO irá ver o objeto quadro."],
            ["ler", "Lê alguma coisa. Por exemplo, para ler uma mensagem de um quadro, digite LER 1 para ler a mensagem número 1."],
            ["examinar", "Examina com mais detalhes alguém ou algum objeto. Exemplo: EXAMINAR MOCHILA."],
            ["dar", "Dá alguma coisa para alguém. Exemplos: DAR LUVAS MARVIN entrega luvas para Marvin. DAR 1000 MOEDAS NINA entrega 1000 moedas para Nina."],
            ["comer", "Come um alimento. Exemplo: COMER PÃO."],
            ["beber", "Bebe um líquido de algum lugar. Exemplo: BEBER CANTIL."]
        ]
    ],
    [
        "Información",
        [
            ["axuda", "Obtém ajuda. Exemplo, para saber mais sobre o comando PEGAR, digite AJUDA PEGAR."],
            ["regras", "Lista as regras e diretrizes que você deve ler e seguir. São as leis deste mundo."],
            ["deuses", "Lista os deuses que administram este mundo."],
            ["inmortais", "Lista os imortais. Jogadores muito experientes e que merecem destaque."],
            ["horas", "Mostra o tempo atual dentro do jogo."],
            ["otempo", "Mostra o estado climático atual (tempestade, sol, nuvens etc)."],
            ["opcions", "Mostra o estado de diversas opções no jogo."],
            ["dicas", "Liga e desliga exibição periódica de dicas sobre o jogo."],
            ["dmesg", "Mostra a mensagem do dia."],
            ["puntuacion", "Mostra diversas informações sobre seu personagem."],
            ["practicar", "Lista as magias e habilidades que você conhece. Em frente ao mestre em sua guilda, serve para praticar uma magia ou habilidade."],
            ["habilidades", "Lista as habilidades que você aprende em cada nível na classe atual."],
            ["maxias", "Lista as magias que você aprende em cada nível na classe atual."],
            ["quen", "Lista os personagens conectados no jogo que estejam visíveis para você."],
            ["onde", "Mostra onde está um monstro ou jogador dentro da mesma área que você. Exemplo: ONDE CACHORRO irá mostrar em qual sala está o cachorro, caso seja encontrado um em sua área."],
            ["considerar", "Compara as forças entre você e um possível oponente para um combate. Exemplo: CONSIDERAR MONSTRO."]
        ]
    ],
    [
        "Combate",
        [
            ["matar", "Inicia um combate. Exemplo: MATAR MONSTRO."],
            ["fuxir", "Se achar que vai morrer, pode tentar fugir do combate com este comando."],
            ["cobardia", "Faz seu personagem se acovardar e fugir automaticamente quando o HP estiver abaixo de um certo nível. Exemplo: COVARDE 100 para fugir com HP abaixo de 100."],
            ["grupo", "Gerencia grupos de combate. GRUPO TODOS irá adicionar ao seu grupo todos que estejam te seguindo. Apenas GRUPO mostra as pessoas em seu grupo."],
            ["seguir", "Segue alguém. Exemplo: SEGUIR HENRY."]
        ]
    ],
    [
        "Maxias",
        [
            ["lanzar", "Lança uma magia. Exemplo: LANÇAR 'ARMOR'."],
            ["recitar", "Recita um pergaminho. Exemplo: RECITAR RETORNO."],
            ["tomar", "Toma uma poção. Exemplo: TOMAR POÇÃO,AMARELA."],
            ["usar", "Usa um bastão mágico que esteja segurando. Exemplo: USAR VARINHA."]
        ]
    ],
    [
        "Comandos Utiles",
        [
            ["cores", "Altera o modo de exibição de cores. Exemplo: CORES COMPLETE."],
            ["breve", "Liga e desliga o modo breve, que não exibe as descrições das salas ao andar entre elas."],
            ["compacto", "Elimina linhas vazias desnecessárias, tornando o texto mais compacto."],
            ["acentos", "Liga e desliga a visualização de acentos."],
            ["sair", "Sai do jogo"]
        ]
    ]
];
