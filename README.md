```
                  Benvid@ ... estas entrando en Kallaikia

                 O    R E I N O     D A S    T E B R A S !
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


##BENVID@

Benvid@ a **Kallaikia** o **^Reino das Tebras^**, podes visitarnos en **[http://0ri0n.no-ip.biz/kallaikia] (Kallaikia)**,
esta e a primeira xeneraci&oacute;n deste MUD nacido a partir do servidor **Smaug 1.8b** 
creado para **[http://www.realmsofdespair.com] (Realms Of Despair)**
por **Thorin**, escrito en linguaxe **C#** e liberado baxo licencia **[http://www.gnu.org/licenses/gpl-2.0.html] (GPLv2)**.


  **0ri0n.no-ip.biz:4000**



##OBXETIVO

Crear un mundo virtual completamente en **Galego** que transcurre na antiga **Galiza (Kallaikia) castrexa**,
onde antigos deuses inmortales, druidas, guerreiros, curandeiros, arqueiros, demos, magos e demáis seres
convivían, loitaban e disfrutaban polo encanto da nosa fermosa terra ... **Kallaikia**.

Animamos a todo o mundo a participar de algunha forma:

	- **Xogar e axudar a novos xogadores.**
	- **Propoñer ou adaptar novas e vellas ideas.**
	- **Modificar ou traducir areas existentes (nivel +55).**
	- **Crear novas áreas (nivel +64), se non tes o nivel suficiente e che gostaría colaborar**
	  **creando novas áreas, tamén podes correxir erros nas áreas co editor externo, e envialas**
	  **a algún inmortal para que as valide e inclua en Kallaikia.**
	- **Programando e analizando código C# (GitHub).**
	


##CAMBIOS REALIZADOS SOBRE SMAUG 1.8b

* Modificado o ficheiro Makefile, agora pódense establecer varios parametros: 

	- Características do *Makefile*: **NOME**, **VERSION**, **DESCRIPCION**, **ARCH** 
	- Características do *MUD*: **CHESS**, **PLANES**, **BILLION_VNUM**, **SUDOKU**, **KINGDOMS**

* Novas clases:

	- **Demon**
	- **Angel**
	- **Assassin**
	- **Archer**

* Xogos internos:

	- **Xadrez** (probar)
	- **Sudoku** (probar)

* Reinos, código experimental para soportar **Reinos (Kingdoms)**, por agora non está finalizado,
  faltan partes por integrar no MUD.

* Novas areas experimentales en **"o_reino_das_tebras/area.devel"** e **"areas14.devel"** que seran
  incluídas en **Kallaikia/o_reino_das_tebras**.

* Engadironse ferramentas e código para desarrollo no directorio "devel"

	- **Editor de Areas**
	- **Mappers**
	- **Diversos scripts e snippets.**

* Engadironse scripts para controlar o inicio do servicio:

	- **kallaikia.servidor.configuracion**
	- **kallaikia.servidor.desarrollo**
	- **kallaikia.servidor.rapido**
	- **kallaikia.servidor.completo**

* Eliminouse o código de **"IMC (Inter MUD Connector)"**, nun futuro incluirase **"IMC2"** ou **"I3"**,
  deste xeito poderemos interconectar diferentes MUDs (novos reinos, probablemente da peninsula
  ou arredores) basados en **Kallaikia**.



##TODO LIST

* Finalizar reinos (Kingdoms), faltan partes por integrar no MUD, revisar (kingdoms.h & kingdoms.c).

* Incluir **IMC2** ou **I3**.

* Traducir e modificar o MUD desde **OLC** (editor interno do mud)

* ¿Adaptar **Oasis OLC2**?

