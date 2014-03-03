#!/usr/bin/make -f

########################################
#
#      Phantasien v1.8.3b (beta)
#
#      Basado en SMAUG 1.8b
#
########################################

NOMBRE = phantasien
VERSION = 1.8.3b
DESCRIPCION = Phantasien III  ^Reinos de Deseperacion^

########################################
# Arquitectura del sistema
########################################

ARCH = `uname -m`

########################################
# Opciones para G++
########################################

CC      = gcc
#PROF    = -p

#Descomentar si se obtienen referencias indefinidas para dlsym, dlopen, and dlclose.
#Comentar si se obtienen errores de ldl no encontrado.
NEED_DL = -ldl

#Algunos sistemas necesitan esto para el enlazado dinamico.
EXPORT_SYMBOLS = -export-dynamic

# IMC - Comentar para deshabilitar el soporte IMC (Mud Network Chat) (No se utiliza, para habilitarlo copiar los ficheros de imc a src)
# IMC = -DUSE_IMC

# TODO TODO TODO (Portar desde MERC)
# MOB_PROG - Comentar para deshabilitar el soporte de MOB_PROGRAMS
#MOB_PROG = 1

# Descomentar para modo desarrollo/debug  
# Comentar para modo distribucion
# CXX_FLAGS = -Wall -Wshadow -Wformat-security -Wpointer-arith -Wcast-align -Wredundant-decls -Wconversion -Wwrite-strings -Wunused-result -Wpointer-to-int-cast -Wint-to-pointer-cast

# Descomentar para modo distribucion
# Comentar para modo desarrollo/debug
CXX_FLAGS = -Wno-all -Wno-conversion -Wno-write-strings -Wno-shadow -Wno-format-security -Wno-pointer-arith -Wno-cast-align -Wno-redundant-decls -Wno-unused-result -Wno-pointer-to-int-cast -Wno-int-to-pointer-cast

########################################
# GCC & LD FLAGS Completos
########################################

C_FLAGS = -O -g2 -pipe $(CXX_FLAGS) $(PROF) $(EXPORT_SYMBOLS)

ifeq ($(ARCH), x86_64)
C_FLAGS := $(C_FLAGS) -march=$(ARCH) -mtune=$(ARCH)
else
C_FLAGS := $(C_FLAGS) 
endif

L_FLAGS = $(PROF) -lz $(NEED_DL)

########################################
# Ficheros C para compilar
########################################

C_FILES = act_comm.c  adminlist.c  clans.c     db.c       hashstr.c  imm_host.c  mapout.c    news.c       requests.c  shops.c    stat_obj.c \
act_info.c  ban.c        colorize.c  deity.c    hint.c     interp.c    misc.c      planes.c     reset.c     skills.c   tables.c \
act_move.c  boards.c     comm.c      fight.c    house.c    liquids.c   mpxset.c    player.c     save.c      special.c  track.c \
act_obj.c   build.c      comments.c  grub.c     ibuild.c   magic.c     mud_comm.c  polymorph.c  services.c  stances.c  update.c \
act_wiz.c   chess.c      const.c     handler.c  ident.c    makeobjs.c  mud_prog.c  renumber.c   sha256.c    starmap.c  variables.c

# Ficheros adicionales para soporte IMC
#ifdef IMC
#   C_FILES := imc.c $(C_FILES)
#   C_FLAGS := $(C_FLAGS) $(IMC) -DIMCSMAUG
#endif

# Ficheros adicionales para soporte MOB_PROGRAMS: criaturas||mobprogs
#ifdef MOB_PROG
#   C_FILES := $(C_FILES) criaturas_programas.c criaturas_comandos.c
#   C_FLAGS := $(C_FLAGS) -DDUNNO_STRSTR
#endif

# Objetos del compilador se generan en "objetos_compilador"
O_FILES := $(patsubst %.c,objetos_compilador/%.o,$(C_FILES))

H_FILES = bet.h  chess.h  hint.h  house.h  liquids.h  mud.h  news.h  sha256.h

########################################
# Construir el codigo
########################################

all:
	@$(MAKE) -s clean && mkdir objetos_compilador
	@echo && echo " [ "$(MAKE)" ] Construccion -> \""$(NOMBRE)" "$(VERSION)" ("$(ARCH)")\"." && echo
	@echo " [ "$(MAKE)" ] "$(DESCRIPCION)"" && echo
	@echo " [ "$(CC)" ] CFLAGS: "$(C_FLAGS)""
	@echo " [ "$(CC)" ] LDFLAGS: "$(L_FLAGS)"" && echo
	@$(MAKE) -s $(NOMBRE)
	@echo " [ "$(MAKE)" ] Finalizado! -> \""$(NOMBRE)" "$(VERSION)" ("$(ARCH)")\"." && echo

# Incluir las dependencias para los objetos existentes
-include dependencies.d

$(NOMBRE): $(O_FILES)
	rm -f ../$(NOMBRE)
	$(CC) -export-dynamic -o ../$(NOMBRE) $(O_FILES) $(L_FLAGS)
	@echo && echo " [ "$(MAKE)" ] Generar el fichero de dependencia \"dependencies.d\".";
	@$(CC) -MM $(C_FLAGS) $(C_FILES) > dependencies.d
	@perl -pi -e 's.^([a-z]).o/$$1.g' dependencies.d
	echo " [ "$(MAKE)" ] Finalizada la construccion de: \""$(NOMBRE)"\"."
	chmod g+w ../$(NOMBRE)
	chmod a+x ../$(NOMBRE)
	chmod g+w $(O_FILES)

objetos_compilador/%.o: %.c
	echo " [ "$(CC)" ] Construir -> $@ ... "
	$(CC) -c $(C_FLAGS) $< -o $@

.c.o: $(NOMBRE).h
	$(CC) -c $(C_FLAGS) $<

clean:
	@rm -rf objetos_compilador dependencies.d *~ ../*/*~ ../*~

cleanall:
	@rm -rfv ../$(NOMBRE) objetos_compilador dependencies.d *~ ../*/*~ ../*~
	@touch ../log/$(NOMBRE).log && rm -rfv ../log/*

dist:
	@echo && echo " [ "$(MAKE)" ] Limpiar objetos del codigo y ficheros de log ..." && echo
	@$(MAKE) -s clean && cd .. && touch log/$(NOMBRE).log && rm -rfv log/*
	@echo && echo " [ "$(MAKE)" ] Creando el fichero de distribucion: \"../../"$(NOMBRE)"-"$(VERSION)".tar.bz2\" ..."
	@cd .. && tar cfj ../$(NOMBRE)-$(VERSION).tar.bz2 *
	@echo " [ "$(MAKE)" ] Finalizado." && echo

git:
	@cd ..; \
	git add -A; \
	git commit -m "Publicado desde Makefile"; \
	git push origin master
