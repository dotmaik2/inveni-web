const moment = require('moment-timezone')
const nodemailer = require('nodemailer')

// formato de correo para reporte semanal
exports.sendEmail = class {
  static sendEmail (to, subject, text, reporte) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'notificaciones@pidelectronics.com',
        pass: 'pidelectronics1818'
      }
    })
    const mailOptions = {
      from: 'notificaciones@pidelectronics.com', // Update from email
      to: to,
      subject: subject,
      html: `
        <html>
  <head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <style type="text/css">
      /* FONTS */
      @media screen {
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
          }
          
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
          }
          
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
          }
          
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 700;
            src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
          }
      }
      
      /* CLIENT-SPECIFIC STYLES */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
  
      /* RESET STYLES */
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
  
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }
      
      /* MOBILE STYLES */
      @media screen and (max-width:600px){
          h1 {
              font-size: 32px !important;
              line-height: 32px !important;
          }
      }
  
      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] { margin: 0 !important; }
  </style>
  </head>
  <body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
  
  <!-- HIDDEN PREHEADER TEXT -->
  
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- LOGO -->
      <tr>
          <td bgcolor="#656c7a" align="center">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                  <tr>
                      <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                          <a href="http://radiall.kinnilweb.com/" target="_blank">
                              <img alt="Logo" src="http://157.245.187.225/img/kinnil.png" style="display: block; width: 200px; height:250; font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                          </a>
                      </td>
                  </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
      </tr>
      <!-- HERO -->
      <tr>
          <td bgcolor="#656c7a" align="center" style="padding: 0px 10px 0px 10px;">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                  <tr>
                      <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                        <h1 style="font-size: 48px; font-weight: 400; margin: 0;">¡Hola ` + text + `!</h1>
                      </td>
                  </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
      </tr>
      <!-- COPY BLOCK -->
      <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <!-- COPY -->
                <tr>
                <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 0px 30px; color: #38429e; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
                <p style="font-size: 20px;  font-weight: 400; margin: 0;">Para el monitoreo de tu producción, te enviamos los indicadores de la semana que acaba de terminar.</p>
                </td>
                </tr>              
                <!-- BULLETPROOF BUTTON -->
                <tr>
                  <td bgcolor="#ffffff" align="left">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                          <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" style="border-radius: 3px;" bgcolor="#656c7a"><a href="http://radiall.kinnilweb.com/" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #656c7a; display: inline-block;">Ir a kinnil web</a></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
      </tr>
  
      <!-- FOOTER -->
      <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >
                <!-- NAVIGATION -->
                <tr>
                </tr>
                <!-- PERMISSION REMINDER -->
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                    <p style="margin: 0; margin-top: 30px;">"Lo que no se mide no se puede mejorar, y lo que no se mejora lentamente se degrada"</p>
                       
                          <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                              <a href="https://www.pidelectronics.com/" target="_blank">
                                  <img alt="Logo" src="http://157.245.187.225/img/logoPid.png" style="display: block; width: 100px; height:150; font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                              </a>
                          </td>
                  </td>
                </tr>
                <!-- UNSUBSCRIBE -->
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                    <p style="margin: 0;">Conoce mas aqui <a href="https://www.youtube.com/watch?v=i1KUwkgeaEo&feature=emb_logo" target="_blank" style="color: #111111; font-weight: 700;">click aqui</a>.</p>
                  </td>
                </tr>
                <!-- ADDRESS -->
                <tr>
                  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                    <p style="margin: 0;">PID Electronics S. de R.L. de C.V. Blvrd Antonio Ortiz Mena 1818, Las Palmas, Campestre-Lomas, 31205 Chihuahua, Chih.</p>
                  </td>
                </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
      </tr>
  </table>
  
  </body>
  </html>
        `,
      attachments: [
        {
          filename: 'Reporte Semanal ' + moment(getFechaActual()).format('YYYY-MM-DD') + '.pdf',
          content: reporte
        }]
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) { return console.log(error) }
      console.log('Message sentaaa: %s', info.messageId)
    })
  }
}
