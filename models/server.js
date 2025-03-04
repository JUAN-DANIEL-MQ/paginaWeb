
const path = require('path');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection, dbConnectionCompass } = require('../database/config');

class Server {
    constructor() {
        this.app  = express();
        // this.port = process.env.PORT;
        this.port = process.env.PORT || 3000;

        this.paths = {
            auth:           '/api',
            // buscar:         '/admin/buscar',
            // dataRol:        '/admin/roles',
            // userAdmin:       '/admin/userManagement',
            // dataCommunications: '/admin/communications/',


            // usuarios:       '/auth/newRegister',
            // dataPersonal:   '/form/dataPersonal',
            // dataComplement: '/form/dataComplement',
            // dataAcademic:   '/form/dataAcademic',
            // dataStudied:    '/form/dataStudied',
            // dataInsurance:  '/form/dataInsurance',
            // dataLabor:      '/form/dataLabor',
            // dataDocuments:  '/form/dataDocuments',
            // dataDependent:  '/form/dataDependent',
            // dataDisability: '/form/dataDisability',
            
            // dataFormRevition: '/revition/',
            // dataSearch: '/search/',

            // printCertification: '/certification/',
            // dataStatistics: '/statistics/',
            // utilitiesData: '/utilities/',

            // reportsData: '/reports/',

            // serviceEndpoint: '/service/',
        };


        //Conectar a la Base de Datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi APP
        this.routes();

        //redireccion de las rutas
        this.spaFallback();

    };

    async conectarDB() {
        // await dbConnection();
        await dbConnectionCompass();
    };

    middlewares() {

        //CORS
        this.app.use(cors());

        //lECTURA Y PARSEO DEL BODY 
        this.app.use(express.json());

        //Directorio Publico
        this.app.use( express.static('public'));

        // Fileupload - Carga de Archivos 
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    };

    routes() {
        
        this.app.use( this.paths.auth, require('../routes/previuRoutes') );
        // this.app.use( this.paths.buscar, require('../routes/busquedaRoutes') );
        
        // this.app.use( this.paths.dataRol, require('../routes/adminRoutes/rolRoutes') );
        // this.app.use( this.paths.userAdmin, require('../routes/adminRoutes/userAdminRoutes') );
        // this.app.use( this.paths.dataCommunications, require('../routes/adminRoutes/communicationRoutes') );

        // this.app.use( this.paths.usuarios, require('../routes/userRoutes') );
        // this.app.use( this.paths.dataPersonal, require('../routes/dataPesonalRoutes') );
        // this.app.use( this.paths.dataComplement, require('../routes/dataComplementRoutes') );
        // this.app.use( this.paths.dataAcademic, require('../routes/dataAcademicRoutes') );
        // this.app.use( this.paths.dataStudied, require('../routes/dataStudiedRoutes') );
        // this.app.use( this.paths.dataInsurance, require('../routes/dataInsuranceRoutes') );
        // this.app.use( this.paths.dataLabor, require('../routes/dataLaborRoutes') );
        // this.app.use( this.paths.dataDocuments, require('../routes/dataDocumentsRoutes') );
        // this.app.use( this.paths.dataDependent, require('../routes/dataDependentRoutes') );
        // this.app.use( this.paths.dataDisability, require('../routes/dataDisabilityRoutes') );
        
        //* REVITION DATA
        // this.app.use( this.paths.dataFormRevition, require('../routes/revitionRoutes/revitionFormsRoutes') );
        
        //* SEARCH DATA
        // this.app.use( this.paths.dataSearch, searchData);
        // 
        //* CERTIFICATION DATA
        // this.app.use( this.paths.printCertification, require('../routes/certificationRoutes/dataKardexRoutes') );
        
        //* STATISTICS DATA
        // this.app.use( this.paths.dataStatistics, require('../routes/mainRoutes/statisticsRoutes') );

        //* UTILITIES DATA
        // this.app.use( this.paths.utilitiesData, require('../routes/adminRoutes/utilitiesRoutes') );
        
        //* REPORT DATA
        // this.app.use( this.paths.reportsData, require('../routes/reports/reportRevitionRoutes') );
        
        // this.app.use( this.paths.serviceEndpoint, require('../routes/service/serviceRoutes') );
    };

    spaFallback() {
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        });
    };

    listen() {
        this.app.listen( this.port , () => {
            console.log('Servidor corriendo en el puerto.', this.port )
        });
    };

}

module.exports = Server;