export default {
    title: "Arbeid",
    name: "arbeidstimer",
    type: "object",
    fields: [
        {
            name: "beskrivelse",
            type: "text",
            title: "Arbeidsbeskrivelse"
        },
        {
            name: "dato",
            type: "datetime",
            title: "Arbeidsdato"
        },
        {
            name: "timer",
            type: "number",
            title: "Arbeidstimer"
        }
    ]
}