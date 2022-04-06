export default {
    title: "Kunde",
    name: "customer",
    type: "document",
    fields: [
        {
            name: "clientname",
            type: "string",
            title: "Kundenavn"
        },
        {
            name: "clientid",
            type: "string",
            title: "Org.nr."
        },
        {
            name: "contact",
            type: "string",
            title: "Kontaktperson"
        },
        {
            name: "phone",
            type: "string",
            title: "Telefon"
        },
        {
            name: "email",
            type: "string",
            title: "E-post"
        }
    ]
}