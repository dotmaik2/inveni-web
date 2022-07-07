const nodemailer = require('nodemailer')
const SERVICE = require('../service/home_service')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
module.exports = function (cron) {

  /* cron.schedule('5 2,8,14,20 * * *', function(){
        console.log("reporte covia")
        SERVICE
            .COVIAReport(80) // 80 | GRABEN 1H
            .then(() => {
            })
            .catch(function (err) {
                console.error('[scheduler/cron.js][COVIAReport] Error cuando obtenemos el reporte de COVIAReport (): ', err);
            });
    }) */

}
