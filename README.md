```
                            Benvid@ ... estas entrando en Kallaikia

                            O    R E I N O    D A S    T E B R A S !
            _________________________________________________________________________
           /            \ Written, maintained and modified by Thoric; connection by  \
          |             /     BlueGenesis.com; governed by the Council of Elders      |
          |-------------\          (email all concerns to blodkai@game.org)           |
          |   \\._.//   /                                                             |
          |   (0...0)   \ Home of SMAUG based on Merc2.1 code by Hatchet, Fury Kahn;  |
          |    ).:.(    / in turn based on DikuMUD code (Hans Staerfeldt, Katja Nyboe |
          |    {o o}    \ Tom Madsen, Michael Seifert and Sebastian Hammer)           |
          |   / ' ' \   /                                                             |
          |-'- /   \ -`-\  Realm:          0ri0n.no-ip.biz:4000                       |
          |   .VxvxV.   /  Realm Home:     http://0ri0n.no-ip.biz/kallaikia/          |
          |-------------\  Smaug Home:     http://www.game.org/smaug                  |
          | SMAUG v1.8b /  Realms of Despair Home: http://www.realmsofdespair.com     |
           \___________/_____________________________________________________________/
            //                                                                     \\
           [| Code by Thoric (Derek Snider, derek@idirect.com) with Altrag/Blodkai/ |]
           [| Haus/Narn/Scryn/Swordbearer/Tricops/Gorog/Rennard/Grishnakh/Fireblade/|]
           [| Nivek/BuRZuMiSHi                                                      |]
            \\_____________________________________________________________________//

```

##Benvido a Kallaikia ...

Benvid@ a **Kallaikia ^O Reino das Tebras^**, podes visitarnos en [http://0ri0n.no-ip.biz/kallaikia] (Kallaikia), esta e a primeira xeneraci&oacute;n deste MUD en galego, nacido a partir do servidor **Smaug 1.8b** creado para [http://www.realmsofdespair.com] (Realms Of Despair) por **Thorin**, escrito en linguaxe **C#** e liberado baxo licencia [http://www.gnu.org/licenses/gpl-2.0.html] (GPLv2).

Dirección para conectar a **Kallaikia**: **0ri0n.no-ip.biz:4000**

*(É preciso un cliente de telnet ou de MUD)*


###OBXETIVOS

Crear un mundo virtual completamente en **Galego** que transcurre na antiga **Galiza (Kallaikia) castrexa**,
onde antigos deuses inmortales, druidas, guerreiros, curandeiros, arqueiros, demos, magos e demáis seres
convivían, loitaban e disfrutaban polo encanto da nosa fermosa terra ... **Kallaikia**.

* Animamos a todo o mundo a participar de algunha forma:

	- **Xogar** e **axudar** a novos **xogadores**.
	- **Propoñer** ou **adaptar** novas e vellas **ideas**.
	- **Modificar** ou **traducir areas** existentes (nivel +55).
	- **Crear** novas **áreas** (nivel +64), se non tes o nivel suficiente e che gostaría colaborar creando novas áreas, tamén podes correxir erros nas áreas co editor externo, e envialas a algún inmortal para que as valide e inclua en Kallaikia.
	- Programar e analizar código C# **[https://github.com/burzumishi/Kallaikia] (GitHub)**.


###CAMBIOS REALIZADOS SOBRE SMAUG 1.8b

* O ficheiro **Makefile** de **Smaug1.8b** foi modificado severamente, agora pódense establecer varios parámetros de configuración: 

	- Características do *Makefile*: **NOME**, **VERSION**, **DESCRIPCION**, **ARCH** 
	- Características do *MUD*: **CHESS**, **PLANES**, **BILLION_VNUM**, **SUDOKU**, **KINGDOMS**

* Cambiaronse os **FLAGS** do compilador para adaptalo ás novas necesidades de **GCC** sobre **GNU/Linux**, que é o sistema utilizado polo servidor.

* Engadíronse **Novas Clases** cos suas habilidades:

	- **Demon -> Demo **
	- **Angel -> Anxo **
	- **Assassin -> Asasino **
	- **Archer -> Arqueiro **

* Engadíronse os **Clans** para as novas clases.

* **Xogos** internos para xogadores:

	- **Xadrez** (probar)
	- **Sudoku** (probar)

* Reinos, código experimental para soportar **Reinos (Kingdoms)**, por agora non está finalizado, faltan partes por integrar.

* Novas areas experimentales para integrar, nos directorios **"o_reino_das_tebras/area.devel"** e **"o_reino_das_tebras/areas14.devel"** que seran incluídas no directorio de areas **"o_reino_das_tebras"**. Estas areas poden ser editadas co editor de areas do directorio "devel/area_editor". Unha vez finalizadas serán incluidas en "**o_reino_das_tebras/area.lst**".

* Engadíronse ferramentas e código para desarrollo no directorio "devel"

	- **Editor de Areas**
	- **Mappers**
	- **Diversos scripts e snippets para "Smaug1.x".**

* Engadíronse scripts para controlar o inicio do servicio sinxelamente polos inmortais:

	- **kallaikia.servidor.configuracion**
	- **kallaikia.servidor.desarrollo**
	- **kallaikia.servidor.rapido**
	- **kallaikia.servidor.completo**

* Seguridade extra para cifrar contrasinais das contas con **SHA256**.

* **Anti-Hack para inmortales**.

* Eliminouse o código de **"IMC (Inter MUD Connector)"**, nun futuro incluirase **"IMC2"** ou **"I3"**, deste xeito poderemos interconectar diferentes MUDs (novos Reinos, probablemente da peninsula ou arredores) basados en **Kallaikia**.

* Convertíronse todos os ficheiros de formato **"DOS"** a **"UNIX"**, para evitar errores de codificación de caracteres.

* Traducción da estructura de ficheiros ao Galego.

####COMANDOS TRADUCIDOS A GALEGO

Listado de comandos traducidos:

- help -> axuda
- time -> tempo
- name -> nome
- title -> titulo
- score -> puntuacion
- level -> nivel
- list -> lista
- languages -> linguaxes
- laws -> leis
- lead -> liderar
- mail -> email
- make -> crear
- makeboard -> creartaboeiro
- makeclan -> crearclan
- makecouncil -> crearconcello
- makerepair -> crearferreiro
- makeshop -> creartenda
- makewizlist -> crearlistawiz
- makedeity -> creardeidade
- mortalize -> mortalizar
- memberlist -> listamembros
- message -> mensaxe
- newzones -> novaszonas
- savearea -> gardarzona
- areas -> zonas
- authorize -> autorizar
- auction -> subastar
- answer -> respostar
- advance -> avanzar
- allow -> permitir
- adminlist -> administradores
- appear -> aparecer
- accessories -> accesorios
- buy -> comprar
- ban -> banear
- ask -> preguntar
- bodybag -> bolsa
- boards -> taboeiros
- bolt -> raio
- cast -> invocar
- map -> mapa
- music -> musica
- look -> mirar
- north -> norte
- south -> sur
- east -> leste
- weast -> oeste
- northeast -> norleste
- northweast -> noroeste
- southeast -> surleste
- southweast -> suroeste
- ne -> nl
- nw -> no
- se -> sl
- sw -> so
- up -> subir (su)
- down -> baixar (b)
- close -> fechar
- open -> abrir
- exits -> saidas
- leave -> abandoar
- examine -> examinar
- order -> orden
- channels -> canais
- clear -> limpar
- equipment -> equipamento
- compare -> comparar
- shout -> gritar
- commands -> comandos
- comment -> comentar
- config -> configuracion
- councils -> concellos
- credits -> creditos
- climate -> clima
- cook -> cocinhar
- colorize -> corear
- changes -> cambios
- connect -> conectar
- compass -> bruxula
- drop -> deixar
- deny -> denegar
- description -> descripcion
- destroy -> destruir
- disconnect -> desconectar
- drag -> arrastrar
- deities -> deidades
- dismount -> desmontar
- diagnose -> diagnosticar
- date -> fecha
- dissapear -> desaparecer
- empty -> vaciar
- enter -> entrar
- elevate -> elevar
- experience -> experiencia
- fill -> encher
- editnews -> editarnovas
- follow -> seguir
- drink -> beber
- eat -> comer
- sit -> sentar
- sleep -> dormir
- smoke -> fumar
- speak -> falar
- sayto -> decirlle
- tell -> comentar
- take -> coller
- think -> pensar
- throw -> arroxar
- unlock -> desbloquear
- lock -> bloquear
- kill -> matar
- murder -> asasinar
- sacrifice -> sacrificar
- wimpy -> cobardia
- flee -> fuxir
- force -> forzar
- freeze -> conxelar
- sell -> vender
- fixed -> arranxado
- fire -> lume
- get -> coller
- give -> dar
- group -> grupo
- goto -> ir
- guilds -> irmandades
- gold -> ouro
- gohome -> poboado
- hold -> vestir
- hintedit -> editarconsello
- hints -> consellos
- house -> fogar
- homebuy -> comprarfogar
- inventory -> inventario
- immortalize -> inmortalizar
- installarea -> instalarzona
- loadarea -> cargarzona
- quit -> sair
- quest -> mision
- instazone -> instazona
- immhost -> inmortalservidor
- journal -> xornal
- last -> derradeiro
- light -> alumar
- setcouncil -> setconcello
- showcouncil -> mostrarconcello
- showclan -> mostrarclan
- showdeities -> mostrardeidades
- showclasses -> mostrarclases
- showweather -> mostrarotempo
- showrace -> mostrarraza
- shops -> tendas
- shutdown -> apagar

###TODO LIST

* Finalizar Reinos de Kallaikia (**Kingdoms**), faltan partes por integrar, revisar (**kingdoms.h**, **kingdoms.c**, mud.h e diversos ficheiros do directorio "**src**").

* Incluir **IMC2** ou **I3**.

* Traducir e modificar o MUD desde **OLC** (editor interno do mud)

* ¿Adaptar **Oasis OLC2**?

