# CRUDMongoNodeDocker

## CRUD para recibir datos de un PDF asociado a un numero de siniestro

```
_id: 62ad50608f453635bdae0bfd
nro_siniestro: "222"
a_siniestro: "65dasd4321"
no_formalizado: true
codigo_recepcion: "65dsad4147"
nro_folios: "dsa20"
es_factura: true
es_glosa: false
archivo_recepcion: "JVBERi0xLjUNCiW1tbW1DQoxIDAgb2JqDQo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIF…"
Archivo_recepcion_glosa: "BASE64(2)"
Archivo_factura_original: "BASE64(3)"
Archivo_Factura_marca_agua: "BASE64(4)"
fecha_digitalizado: 2020-04-28T05:00:00.000+00:00
fecha_creacion: 2020-04-28T05:00:00.000+00:00
createdAt: 2022-06-18T04:11:12.780+00:00
updatedAt: 2022-06-18T04:11:12.780+00:00

```

## Datos en .env de variables de entorno

- PORT=3000 
- BD_CNN=mongodb://localhost:27017/files

## npm run dev