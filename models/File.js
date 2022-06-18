var { Schema, model } = require("mongoose");

var FileSchema = Schema({
    nro_siniestro: {
        type: String,
        required: false,
    },
    a_siniestro: {
        type: String,
        required: false,
    },
    nro_cuenta: {
        type: String,
        required: false,
    },
    no_formalizado: {
        type: Boolean,
        required: false,
        default: false
    },
    codigo_recepcion: {
        type: String,
        required: false,
    },
    nro_folios: {
        type: String,
        required: false,
    },
    es_factura: {
        type: Boolean,
        required: false,
        default: true
    },
    es_glosa: {
        type: Boolean,
        required: false,
        default: true
    },
    archivo_recepcion: {
        type: String,
        required: false
    },
    Archivo_recepcion_glosa: {
        type: String,
        required: false
    },
    Archivo_factura_original: {
        type: String,
        required: false
    },
    Archivo_Factura_marca_agua: {
        type: String,
        required: false
    },
    fecha_digitalizado: {
        type: Date,
        required: false
    },
    fecha_creacion: {
        type: Date,
        required: false
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('File', FileSchema);