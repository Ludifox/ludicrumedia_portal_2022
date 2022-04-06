export default {
    title: "Prosjekt",
    name: "project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Prosjekttittel"
        },
        {
            name: "slug",
            type: "slug",
            title: "Permalenke",
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: "description",
            type: "string",
            title: "Beskrivelse"
        },
        {
            name: "customer",
            type: "reference",
            title: "Kunde",
            to: {type: "customer"}
        },
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'customer.clientname'
        }
      }
}