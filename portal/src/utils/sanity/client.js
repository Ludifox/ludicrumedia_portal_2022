import sanityClient from '@sanity/client'

const options = {
    projectId: "h3o7n51z",
    dataset: "production"
}

const client = sanityClient({
    ...options,
    apiVersion: "2021-10-21",
    useCdn: true
});

export const writeClient = sanityClient({
    ...options,
    token: "sktkbzKWK6zp7SneHc2Jf1mCVkA3L748EDvxE6ZxyX73SeOleFb0vtmyLVUodGLiryJ18atLmPfAAJLg2JFwlAUiImmZuq2VSWz7lrIsSeL1O7eP1HRsPB21UJZiHasiFW20RsRl65LmHtDRvZThqaMoD2NbKtZdkyc7MshhiM6i3OoA8caL",
    useCdn: false
})

export default client;

/* 
PORTALREGISTRATIONS API
sktkbzKWK6zp7SneHc2Jf1mCVkA3L748EDvxE6ZxyX73SeOleFb0vtmyLVUodGLiryJ18atLmPfAAJLg2JFwlAUiImmZuq2VSWz7lrIsSeL1O7eP1HRsPB21UJZiHasiFW20RsRl65LmHtDRvZThqaMoD2NbKtZdkyc7MshhiM6i3OoA8caL
*/