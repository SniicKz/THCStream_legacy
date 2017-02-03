angular.module("streama.translations").config(["$translateProvider",function(a){a.translations("es",{LOGIN:{TITLE:"Introduzca su usuario",USERNAME:"Usuario",PASSWORD:"Contrase\u00f1a",FIRST_TIME_HINT:"\u00bfEs tu primera vez? Prueba 'admin' en ambos campos.",SUBMIT:"Identificarse"},DASHBOARD:{TITLE:"Panel de control",NEW_RELEASES:"Nuevas Publicaciones",CONTINUE_WATCHING:"Continuar Viendo",DISCOVER_SHOWS:"Descubrir Shows",DISCOVER_MOVIES:"Descubrir Pel\u00edculas",DISCOVER_OTHER_VIDEOS:"Descubrir otros v\u00eddeos",
SORT:"Ordenar:",SEARCH_BY_NAME:"Buscar por Nombre...",FILTER_BY_TAG:"Filtrar por Etiqueta...",BROWSE_GENRES:"Buscar",LOOKING_AT_GENRE:"Est\u00e1s viendo el g\u00e9nero:",MARK_COMPLETED:"Marca Completada",NO_TVSHOWS_FOUND:"No hay Shows de TV Disponibles",NO_MOVIES_FOUND:"No hay Pel\u00edculas Disponibles"},VIDEO:{RELEASED:"Publicado",IMDB:"IMDB",RATING:"Puntuaci\u00f3n",VOTES:"Votos",OVERVIEW:"Sinopsis",GENRE:"G\u00e9nero",TRAILER:"Trailer",SEASON:"Temporada"},MESSAGES:{SHARE_SOCKET:"Creando una sesi\u00f3n nueva, seras redirigido de vuelta a este reproductor, pero esta vez tendr\u00e1s un c\u00f3digo de sesi\u00f3n \u00fanico en la URL. \u00a1Comparte \u00e9ste enlace con tus amigos para tener una experiencia de visi\u00f3n sincronizada con ellos!",
FILE_MISSING:"Hay un problema con este contenido. Parece que has eliminado el archivo asociado al mismo.",CODEC_PROBLEM:"Parece que hay un problema a\u00f1adiendo el archivo de v\u00eddeo al reproductor. La causa suele ser debida a un problema con los c\u00f3decs. Prueba convirti\u00e9ndolo a un c\u00f3dec HTML5 compatible, elimina el fichero adjunto, y a\u00f1\u00e1delo de nuevo. Si los c\u00f3decs son los correctos, comprueba el registro del servidor y la URL en las opciones.",WRONG_BASEPATH:'Tu v\u00eddeo ha sido incluido usando una ruta incorrecta, pero est\u00e1s accediendo a la p\u00e1gina a traves de la ruta "{{basePath}}". Aseg\u00farate de escribir la ruta correcta en las propiedades y de que est\u00e1s us\u00e1ndola para acceder a la aplicaci\u00f3n.'},
MANAGE_CONTENT:"Gestionar Contenido",ADMIN:"Admin",HELP:"Ayuda",HELP_FAQ:"Ayuda / Preguntas Frecuentes",PROFILE_SETTINGS:"Opciones de Perfil",LOGOUT:"Salir",CHANGE_PASSWORD:"Cambiar Contrase\u00f1a",LANGUAGE_en:"Ingl\u00e9s",LANGUAGE_de:"Alem\u00e1n",LANGUAGE_de:"Espa\u00f1ol",LANGUAGE_kr:"Coreano",PROFIlE:{USERNAME:"Nombre de usuario",FULL_NAME:"Nombre completo",LANGUAGE:"Idioma",PAUSE_ON_CLICK:"Haz click para pausar",FAVORITE_GENRES:"G\u00e9neros Favoritos",SAVE:"Guardar Perfil",OLD_PASS:"Antigua Contrase\u00f1a",
NEW_PASS:"Nueva Contrase\u00f1a",NEW_PASS_PLACEHOLDER:"Nueva Contrase\u00f1a  (min. 6 Caracteres)",REPEAT_PASS:"Repite tu Contrase\u00f1a",SAVE_PASS:"Guardar Nueva Contrase\u00f1a"},SORT_OPTIONS:{AZ:"A-Z",ZA:"Z-A",NEWEST_ADDED:"A\u00f1adidos Recientemente",OLDEST_ADDED:"A\u00f1adidos Primero",NEWEST_RELEASED:"\u00daltimos Publicados",OLDEST_RELEASED:"Primeros Publicados",NEWEST_AIRED:"Transmitidos Recientemente",OLDEST_AIRED:"Transmitidos Primero"},FAQ:{UPLOAD_VIDEO:{TITLE:"\u00bfC\u00f3mo puedo subir un v\u00eddeo?",
TEXT:"Puedes subir un v\u00eddeo accediendo al men\u00fa Gestionar Contenido. Elige si quieres subir una Pel\u00edcula, un Show de TV o cualquier otro v\u00eddeo. Haz click en la opci\u00f3n correspondiente del men\u00fa vertical en el lateral izquierdo de la aplicaci\u00f3n. Puedes subir un v\u00eddeo haciendo click en el bot\u00f3n de Crear Nueva Pel\u00edcula/Show de TV/Otro o escribiendo el nombre del v\u00eddeo que quieres subir en la barra de b\u00fasqueda y seleccionando la pel\u00edcula deseada de entre los resultados. Despu\u00e9s de eso, puedes elegir rellenar la informaci\u00f3n del v\u00eddeo manualmente o cargar la informaci\u00f3n desde TheMovieDB autom\u00e1ticamente. Posteriormente, puedes subir el v\u00eddeo y los archivos de subt\u00edtulos pulsando sobre el bot\u00f3n Gestionar Archivos."},
DELETE_VIDEO:{TITLE:"\u00bfC\u00f3mo puedo borrar un v\u00eddeo?",TEXT:"Puedes borrar un v\u00eddeo yendo a la p\u00e1gina de informaci\u00f3n de dicho video, haciendo click en Gestionar Archivos y seleccionando el icono de una papelera roja. Otra manera es haciendo click en Editar Pel\u00edcula y seleccionando Borrar pel\u00edcula. Tambi\u00e9n puedes usar el Gestor de Archivos que se encuentra en el men\u00fa de Gestionar Contenido. De \u00e9sta manera puedes ver todos los archivos subidos. Haz click en Click en el icono de la papelera roja para eliminar un fichero."},
VIDEO_FORMATS:{TITLE:"\u00bfQu\u00e9 formatos de v\u00eddeo est\u00e1n soportados?",TEXT:"THCStream soporta actualmente solo aquellos formatos de v\u00eddeo soportados por el reproductor HTML5. Puedes comprobar si un archivo de v\u00eddeo es compatible con HTML5 arrastr\u00e1ndolo a una pesta\u00f1a vac\u00eda de tu navegador."},SUBTITLES:{TITLE:"\u00bfC\u00f3mo puedo a\u00f1adir subt\u00edtulos a un v\u00eddeo?",TEXT:"Puedes a\u00f1adir subt\u00edtulos a los v\u00eddeos haciendo click en el bot\u00f3n Gestionar Archivos que se encuentra en la p\u00e1gina de informaci\u00f3n del v\u00eddeo. Arrastra los archivos ah\u00ed. Antiguamente ten\u00edamos que convertirlos manualmente a un formato de archivo compatible, \u00a1pero ya no! Ahora la aplicaci\u00f3n se encarga de ello por ti."},
INVITE_USERS:{TITLE:"\u00bfC\u00f3mo puedo invitar a mis amigos a ver mis v\u00eddeos?",TEXT:"Puedes compartir tus v\u00eddeos con tus amigos invit\u00e1ndoles a usar tu THCStream. Ve al men\u00fa de Usuarios y haz click en el bot\u00f3n de Invitar Usuario. Rellena el formulario de invitaci\u00f3n y selecciona el rol del invitado. Los usuarios con el rol de Administradores pueden editar Usuarios y Configuraciones. Los usuarios con el rol de Gestor de Contenido pueden editar el contenido. Tu amigo ser\u00e1 notificado a trav\u00e9s de su correo electr\u00f3nico. Tambi\u00e9n puedes compartir una sesi\u00f3n de v\u00eddeo con tus amigos haciendo click sobre el bot\u00f3n Compartir del reproductor y envi\u00e1ndoles el enlace correspondiente."},
BASE_URL:{TITLE:"\u00bfQu\u00e9 es la URL base y c\u00f3mo deber\u00eda configurarla?",TEXT:"LA URL base se utiliza en los v\u00eddeos y en los enlaces que se env\u00edan en las invitaciones por correo."},NOTIFICATIONS:{TITLE:"\u00bfQu\u00e9 son las notificaciones?",TEXT:"Puedes notificar a los amigos que invites mand\u00e1ndoles mensajes de notificaci\u00f3n. Puedes enviarlas a\u00f1adi\u00e9ndolas a la cola de notificaciones haciendo click en el bot\u00f3n de A\u00f1adir Notificaci\u00f3n que se encuentra en la p\u00e1gina de informaci\u00f3n del v\u00eddeo y accediendo al men\u00fa de Notificaciones y clickando en el bot\u00f3n de Enviar Cola."},
VIDEO_PLAYER_SHORTCUTS:{TITLE:"\u00bfEl reproductor tiene teclas de acceso r\u00e1pido?",TEXT:"Si. Pausar/Continuar: espacio. Controlar el vol\u00famen: flechas de arriba y abajo. Avanzar el v\u00eddeo adelante/atr\u00e1s: flechas de derecha e izquierda. Salto grande: control + flechas de derecha e izquierda. Pantalla completa on/off: alt + enter. Subt\u00edtulos on/off: S, Silenciar: M, Volver a la anterior pantalla: delete o backspace."},FAVORITE_GENRES:{TITLE:"\u00bfC\u00f3mo afectan a THCStream los g\u00e9neros favoritos del usuario?",
TEXT:"Pr\u00f3ximamente..."},USEFUL_LINKS:{TITLE:"Enlaces \u00fatiles",TEXT:"Pr\u00f3ximamente..."}}})}]);