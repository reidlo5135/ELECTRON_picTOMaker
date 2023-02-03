export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ELECTRON picTOMaker Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            contact: {
                name: "Reidlo Kang",
                url: "https://github.com/reidlo5135",
                email: "naru7922@gmail.com",
            },
            servers: [
                {
                    url: "http://localhost:5000",
                },
            ],
        },
    },
    apis: []
};

