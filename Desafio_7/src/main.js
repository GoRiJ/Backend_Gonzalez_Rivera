import serverConect from "./server.js";

const PORT = 8080 /*?? process.env.PORT*/;

async function server() {

    try {

        const NEW_SERVER = await serverConect(PORT);
        console.log(`¡Servidor Conectado al Puerto : ${NEW_SERVER.address().port}!`);
        
    } catch (err) {

        console.log(`¡¡ERROR : ${err}!!`);
        
    };

};

server();