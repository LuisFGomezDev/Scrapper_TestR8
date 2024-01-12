//import { Puppeteer } from "puppeteer";

//import * as puppeteer from "puppeteer";
const puppeteer = require('puppeteer');
//const {email, password, confirmation_password, first_name, last_name, company, phone_number, security_question} = require('./secrets.ts');
//import {email, password, confirmation_password, first_name, last_name, company, phone_number, security_question} from './secrets';
 

//Funcion MAIN para ir llamando cada Rutina paso a paso
let main_actual = (async () => {
try
{
  console.log(puppeteer);
  
  const URL_Login = 'http://scrapping.test/login';
  const URL_ReportePDF = 'http://scrapping.test/reportepdf';

  //const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch({headless: false, args: ['--disable-web-security']});

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200, height: 800,
    deviceScaleFactor: 2,
    });

  //await page.goto("https://example.com/");
  


  await page.goto(URL_Login, { waitUntil: 'networkidle2'});

  //await page.waitForTimeout(10000);
  //await new Promise(r => setTimeout(r, 15000));

  //*************************************************************************
  //MODULO DE AUTENTICACION
  //*************************************************************************

        const email_user_Log = "test-user@r8write.tech" //Email usuario de la BD registrado
        const clave_user_Log = "r8write$$" //Clave usuario de la BD registrado
        
        try
        {
            //Llamada al campo Email del Formulario Login
            const email_input = await page.$('#email')
            
            
            console.log("paso por input email al menos:");

            if(email_input){
                await email_input.focus();
                await email_input.type(email_user_Log);
                console.log("ENTRO AL IF DEL EMAIL:");
            }
    
            //Llamada al campo Password del Formulario Login
            const password_inputs = await page.$('#password')
    
            if(password_inputs){
                await password_inputs.focus();
                await password_inputs.type(clave_user_Log);
                console.log("ENTRO AL IF DEL password:");
            }
    
            //Click En el Boton del Formulario Login
            
            //const login_buttons = await page.$x(`//div[@role='button']//span[text()='Log in']`)
            const login_button = await page.$('#buttonlogin')

                if (login_button) {
                    await login_button.focus();
                    await login_button.click();
                    console.log("ENTRO AL IF DEL BUTTON:");
                }
            
            //const buttons = await page.$x('//button[@name="session[buttonlogin]"]')
            //await page.waitForSelector('button[@name="session[buttonlogin]"]');
    
            //await page.click('button[@name="session[buttonlogin]"]');
    
            /*
            if(buttons.length > 0) {
                await buttons[0].click();
            }
            */
    
        }catch(e){
            console.log("Error in Auth:", e);
        }


  // Fin del modulo de autenticacion

  //*************************************************************************

  await page.waitForTimeout(2000);

  //await new Promise(r => setTimeout(r, 15000));


  //*************************************************************************
  //MODULO DE FACTURACION
  //*************************************************************************
  //await facturar(page);
  //"email" "r8write@tech.com","password": "P@ssw0rd123#R8","confirmation_password": "P@ssw0rd123#R8","first_name": "John","last_name": "Doe","company": "R8write","phone_number": "+1234567890","security_question": "Pablito"
    let email= "r8write@tech.com";
    let password= "P@ssw0rd123#R8";
    let confirmation_password= "P@ssw0rd123#R8";
    let first_name= "John";
    let last_name= "Doe";
    let company= "R8write";
    let phone_number= "234567890"
    //let security_question= "Pablito";


  try
  {
      //Ingresar datos al formulario - Campo Email
      const email_inputDashboard = await page.$('#email');

      if(email_inputDashboard){
          await email_inputDashboard.focus();
          await email_inputDashboard.type(email);
      }

      //Ingresar datos al formulario - Campo Clave Formulario
      const clave_inputDashboard = await page.$('#clave');

      if(clave_inputDashboard){
        await clave_inputDashboard.focus();
        await clave_inputDashboard.type(password);
      }
      
      //Ingresar datos al formulario - Campo Confirma Clave Formulario
      const confirmaPsw_inputDashboard = await page.$('#confirma_clave');

      if(confirmaPsw_inputDashboard){
          await confirmaPsw_inputDashboard.focus();
          await confirmaPsw_inputDashboard.type(confirmation_password);
      }
      
      //Ingresar datos al formulario - Primer Nombre
      const pname_inputDashboard = await page.$('#nombre');

      if(pname_inputDashboard){
          await pname_inputDashboard.focus();
          await pname_inputDashboard.type(first_name);
      }
      
      //Ingresar datos al formulario - Primer Apellido
      const lastname_inputDashboard = await page.$('#apellido');

      if(lastname_inputDashboard){
          await lastname_inputDashboard.focus();
          await lastname_inputDashboard.type(last_name);
      }
      
      //Ingresar datos al formulario - Campo Empresa (OPTIONAL)
      const empresa_inputDashboard = await page.$('#empresa');

      if(empresa_inputDashboard){
          await empresa_inputDashboard.focus();
          await empresa_inputDashboard.type(company);
      }
      
      //ELEGIR SELECT datos EN EL formulario - Campo INDICATIVO  ??????? - +1
      //const indicativo_selectDashboard = await page.$x('//input[@name="session(indicatselectD]"]');
      //const indicativo = "+1";

      //Esperamos a que el campo select este disponible en la pagina
      //await page.waitForSelector('select[@name="session[indicatselectD]"]');
      

      const selectIndicative = await page.$('#indicatselectD');

      if(selectIndicative){
          await selectIndicative.focus();
          //await page.select('select[#indicatselectD]', indicativo);
      }


      //Obtenemos el atributo wait del campo select y le asignamos la variable indicativo como elección
      /*
      await page.$eval(
          'select[@name="session[indicatselectD]"]',
          (select: HTMLSelectElement) => (select as HTMLSelectElement).name,
          await page.select('select[@name="session[indicatselectD]"]',indicativo)
      ); 
        */
      //noImplicitAny poner en false, pero debe mantenerse en True

      
      //Ingresar datos al formulario - Campo PHONE
      const phone_inputDashboard = await page.$('#telefono');

      if(phone_inputDashboard){
          await phone_inputDashboard.focus();
          await phone_inputDashboard.type(phone_number);
      }


      //ELEGIR SELECT datos EN EL formulario - Campo PREGUNTA SEGURIDAD  ??????? - PABLITO
      //const pregseg_selectDashboard = await page.$x('//input[@name="session[xxxxxxxx]"]');
      //const pregseg: string = "Pablito";
      //const pregSeg: string = "Pablito";

      //Esperamos a que el campo select este disponible en la pagina
      const selectPregunta = await page.$('#pregsegselectD');

      if(selectPregunta){
          await selectPregunta.focus();
         // await page.select('select[#pregsegselectD]', security_question);
      }


      //Dar Click en el Button DOWNLOAD del formulario Dashboard
      //const button_Dashboard = await page.$x('//td[@name='buttonD']//span[text()='DOWNLOAD']');
      const Facturar_button = await page.$('#buttonD')

      if (Facturar_button) {
          await Facturar_button.focus();
          await Facturar_button.click();
          console.log("ENTRO AL IF DEL BUTTON FACTURAR:");
      }

      /*
      if(button_Dashboard.length > 0) {
          await button_Dashboard[0].click();
      }
      */
      //await page.waitForTimeout(15000);

      //Ir a la siguiente direccion para descargar el reporte
      //ESTA INSTRUCCION ESTA ABAJO EN EL MAIN
      await page.goto(URL_ReportePDF, { waitUntil: 'networkidle2'});
      await page.waitForTimeout(1000);
      await page.goto("http://scrapping.test/reportepdf", { waitUntil: 'networkidle2'});



  }catch(e){
      console.log("Error in Fields", e);
  }


  console.log("Termino todo el Proceso:");


  //*************************************************************************
  //*************************************************************************
  
  //Navegar a la ruta del ReportePDF para descargarlo
  //await page.goto(URL_ReportePDF, { waitUntil: 'networkidle2'});

  
  //Cerramos el Navegador Chromium una vez cumplido el proceso paso a paso
  await browser.close();

}catch (e)
{
    console.log(e);
}
})();