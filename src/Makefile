#!/usr/bin/make -f

########################################
#
#      Kallaikia v1.8.1b (beta)
#
#        Basado en SMAUG 1.8b
#
########################################

NOME = kallaikia
VERSION = 1.8.1b
DESCRIPCION = Kallaikia  ^ O Reino das Tebras^


########################################
# Extras Opcionais (Estables)
########################################

# Planos areas
PLANES = -DPLANES

# Xogo de axedrez
CHESS = -DCHESS

# Aumentar VNUM a un billon
BILLION_VNUM = -DBILLION_VNUM

# Tableiro para SUDOKUS
SUDOKU = -DSUDOKU


###################################################################
# Extras Opcionais Devel (Experimentales NON ACTIVAR!)
###################################################################

# Reinos e Conquistas (devel)
# KINGDOMS = -DKINGDOMS


########################################
# Arquitectura do sistema
########################################

ARCH = `uname -m`

########################################
# Opcions para GCC (FLAGS)
########################################

CC      = gcc
#PROF    = -p

#Descomentar si se obtenhen referencias indefinidas para dlsym, dlopen, and dlclose.
#Comentar si se obtinhen errores de ldl non encontrado.
NEED_DL = -ldl

#Alguns sistemas precisan isto para o enlazado dinamico.
EXPORT_SYMBOLS = -export-dynamic

# Descomentar para modo devel/debug  
# Comentar para modo distribucion
#CXX_FLAGS = -Wall -Wconversion -Wwrite-strings -Wshadow -Wformat-security -Wpointer-arith -Wcast-align -Wredundant-decls -Wunused-result -Wpointer-to-int-cast -Wint-to-pointer-cast

# Descomentar para modo distribucion
# Comentar para modo devel/debug
CXX_FLAGS = -Wno-all -Wno-conversion -Wno-write-strings -Wno-shadow -Wno-format-security -Wno-pointer-arith -Wno-cast-align -Wno-redundant-decls -Wunused-result -Wno-pointer-to-int-cast -Wno-int-to-pointer-cast


########################################
# GCC & LD FLAGS Completos
########################################

C_FLAGS = -O -g2 -pipe $(CXX_FLAGS) $(PROF) $(EXPORT_SYMBOLS) -DSMAUG

ifeq ($(ARCH), x86_64)
C_FLAGS := $(C_FLAGS) -march=$(ARCH) -mtune=$(ARCH)
else
C_FLAGS := $(C_FLAGS) 
endif

L_FLAGS = $(PROF) -lz $(NEED_DL)


########################################
# Ficheiros Principais para compilar
########################################

C_FILES =   adminlist.c  clans.c     db.c       hashstr.c  imm_host.c  mapout.c    news.c       requests.c  shops.c    stat_obj.c \
act_info.c  ban.c        colorize.c  deity.c    hint.c     interp.c    misc.c      reset.c      skills.c    tables.c \
act_move.c  boards.c     comm.c      fight.c    house.c    liquids.c   mpxset.c    player.c     save.c      special.c  track.c \
act_obj.c   build.c      comments.c  grub.c     ibuild.c   magic.c     mud_comm.c  polymorph.c  services.c  stances.c  update.c \
act_wiz.c   act_comm.c   const.c     handler.c  ident.c    makeobjs.c  mud_prog.c  renumber.c   sha256.c    starmap.c  variables.c

H_FILES = bet.h  hint.h  house.h  liquids.h  mud.h  news.h  sha256.h

################################################
# Ficheiros para Opcions Extra
################################################

#Ficheiros FLAGS adicionais para planos de areas
ifdef PLANES
   C_FILES := $(C_FILES) planes.c
   C_FLAGS := $(C_FLAGS) $(PLANES)
endif

#Ficheiros FLAGS adicionais para o xogo de Axedrez
ifdef CHESS
   C_FILES := $(C_FILES) chess.c
   H_FILES := $(H_FILES) chess.h
   C_FLAGS := $(C_FLAGS) $(CHESS)
endif

# FLAGS adicionais para BILLION_VNUM
ifdef BILLION_VNUM
   C_FLAGS := $(C_FLAGS) $(BILLION_VNUM)
endif

#Ficheiros FLAGS adicionais para xogo de Sudoku
ifdef SUDOKU
   C_FILES := $(C_FILES) sudoku.c
   C_FLAGS := $(C_FLAGS) $(SUDOKU)
endif

#Ficheiros FLAGS adicionais para Reinos e conquistas
ifdef KINGDOMS
   C_FILES := $(C_FILES) kingdoms.c
   H_FILES := $(H_FILES) kingdoms.h
   C_FLAGS := $(C_FLAGS) $(KINGDOMS)
endif


############################################################
# Obxetos do compilador xeneranse en "obxetos_compilador"
############################################################

O_FILES := $(patsubst %.c,obxetos_compilador/%.o,$(C_FILES))

########################################
# Construir o codigo
########################################

all:
	@$(MAKE) -s clean
	@echo && echo " [ "$(MAKE)" ] Construccion -> \""$(NOME)" "$(VERSION)" ("$(ARCH)")\"." && echo
	@echo " [ "$(MAKE)" ] "$(DESCRIPCION)"" && echo
	@echo " [ "$(CC)" ] CFLAGS: "$(C_FLAGS)""
	@echo " [ "$(CC)" ] LDFLAGS: "$(L_FLAGS)"" && echo
	@mkdir -p obxetos_compilador
	@$(MAKE) -s $(NOME)
	@echo " [ "$(MAKE)" ] Finalizado! -> \""$(NOME)" "$(VERSION)" ("$(ARCH)")\"." && echo

# Incluir as dependencias para os obxetos existentes
-include dependencies.d

$(NOME): $(O_FILES)
	rm -rf ../$(NOME)
	$(CC) -export-dynamic -o ../$(NOME) $(O_FILES) $(L_FLAGS)
	@echo && echo " [ "$(MAKE)" ] Xerar o ficheiro de dependencia \"dependencies.d\".";
	@$(CC) -MM $(C_FLAGS) $(C_FILES) > dependencies.d
	@perl -pi -e 's.^([a-z]).o/$$1.g' dependencies.d
	echo " [ "$(MAKE)" ] Finalizada a construccion de: \""$(NOME)"\"."
	chmod g+w ../$(NOME)
	chmod a+x ../$(NOME)
	chmod g+w $(O_FILES)

obxetos_compilador/%.o: %.c
	echo " [ "$(CC)" ] Construir -> $@ ... "
	$(CC) -c $(C_FLAGS) $< -o $@

.c.o: $(NOME).h
	$(CC) -c $(C_FLAGS) $<

clean:
	@rm -rf obxetos_compilador dependencies.d *~ ../*/*~ ../*~

cleanall:
	@rm -rfv ../$(NOME) obxetos_compilador dependencies.d *~ ../*/*~ ../*~
	@touch ../log/$(NOME).log && rm -rfv ../log/*

dist:
	@echo && echo " [ "$(MAKE)" ] Limpiar obxetos do codigo e ficheros de log ..." && echo
	@$(MAKE) -s cleanall
	@echo && echo " [ "$(MAKE)" ] Creando o ficheiro de distribucion: \"../../"$(NOME)"-"$(VERSION)".tar.bz2\" ..."
	@cd ../../ && tar cfj $(NOME)-$(VERSION).tar.bz2 $(NOME)-$(VERSION)
	@echo " [ "$(MAKE)" ] Finalizado." && echo

git:
	@$(MAKE) -s cleanall; \
	cd ..; \
	git add -A; \
	git commit -m "Publicado desde Makefile"; \
	git push origin master
