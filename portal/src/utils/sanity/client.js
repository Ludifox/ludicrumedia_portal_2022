import sanityClient from '@sanity/client'

const options = {
    projectId: "h3o7n51z",
    dataset: "production"
}

const client = sanityClient({
    ...options,
    apiVersion: "2021-08-31",
    useCdn: true
});

export default client;