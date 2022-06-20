const File = require('../models/File');


// Search all files
const getFiles = async function (req, res) {
    try {
        const archivos = await File.find();
        return res.status(201).json(archivos);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }

};

//Search for a specific file
const getFileById = async function (req, res) {
    try {
        const archivo = await File.findById(req.params.fileId);
        return res.status(201).json(archivo);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del archivo No Existe' });
    }
};

//Update file simply
const updateFileById = async function (req, res) {
    try {
        const archivo = await File.findByIdAndUpdate(req.params.fileId, req.body, { new: true });
        return res.status(200).json(archivo);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Archivo No Existe' });
    }
};

//Add - Update missing file data
const createFile = async function (req, res) {
    let r = req.body;
    try {
        const bodyFile = {
            "nro_siniestro": r.nro_siniestro,
            "a_siniestro": r.a_siniestro,
            "no_formalizado": r.no_formalizado,
            "codigo_recepcion": r.codigo_recepcion,
            "nro_folios": r.nro_folios,
            "es_factura": r.es_factura,
            "es_glosa": r.es_glosa,
            "archivo_recepcion": r.archivo_recepcion,
            "Archivo_recepcion_glosa": r.Archivo_recepcion_glosa,
            "Archivo_factura_original": r.Archivo_factura_original,
            "Archivo_Factura_marca_agua": r.Archivo_Factura_marca_agua,
            "fecha_digitalizado": r.fecha_digitalizado,
            "fecha_creacion": r.fecha_creacion,
        }
        const newFile = new File(bodyFile);
        const FileSave = await newFile.save();
        return res.status(201).json({ msg: 'Archivo Guardado' });
    } catch (error) {
        return res.status(500).json({ msg: 'Error Al Guardar Archivo' });
    }
};


//Delete a file
const deleteFileById = async function (req, res) {
    try {
        await File.findByIdAndDelete(req.params.fileId);
        return res.status(201).json({ msg: 'Archivo Borrado Con Exito' });
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Archivo No Existe' });
    }
};



module.exports = {
    getFiles,
    getFileById,
    deleteFileById,
    updateFileById,
    createFile
}