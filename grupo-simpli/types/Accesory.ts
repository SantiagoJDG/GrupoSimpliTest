export type Accesory = {
    name: string,
    type: AccesoryType,
    uid?: string | undefined,
    seller: AccesorySeller,
    slug: string,
    metadata?: string |undefined,
    uuid: string,
    brand: AccesoryBrand,
    used: boolean,
    featured: boolean,
    favourite: boolean,
    links: string[],
    seo?: string | undefined,
    images: string[],
    categories: AccesoryCategories[],
    accessories: string[],
    services: string[],
    similar_to: string[],
    tags: string[],
    variants: AccesoryVariants[],

};

export type AccesoryType = {
    name: string,
    uuid: string
};
export type AccesorySeller = {
    name: string,
    uuid: string,
    metadata?: string |undefined
};
export type AccesoryBrand = {
    name: string,
    uuid: string
};
export type AccesoryCategories = {
    name: string,
    locale: string,
    uuid: string
}
export type AccesoryVariants = {
    name: string,
    slug?: string, 
    uid: string,
    externalId: string,
    uuid: string,
    used?: string | undefined,
    featured: boolean,
    favourite: boolean,
    main: boolean,
    metadata?: string | undefined,
    links: [],
    seo?: string | undefined,
    images: AccesoryVariantsImages[],
    prices: VariantsPrices[],
    details: AccesoryVariantsDetails,
    tags: string[],
    stock: number
}

export type VariantsPrices = {
    amount: number,
    currency: string, 
    purpose: string,
    uuid: string
}

export type AccesoryVariantsDetails = {
    years: DetailYear[],
    motors: DetailMotor[],
    features: DetailFeatures[],
    fuel_types: DetailFuelTypes[],
    doors: DetailDoors[],
    transmissions: DetailTransmissions[],
    body_types: DetailBodyTypes[],
    testdrive: DetailTestDrive[],
    kilometers: DetailKilometers[],
    description: DetailDescription[]

}
export type DetailDescription = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailKilometers = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}
export type DetailTestDrive = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailBodyTypes = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}
export type DetailTransmissions = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}
export type DetailFuelTypes = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailDoors = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailYear = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailMotor = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}

export type DetailFeatures = {
    value: number,
    description?: string | undefined
    extra?: number | undefined
}


export type AccesoryVariantsImages = {
    id: string
    name: string
    alternativeText: string
    caption: string
    width: string
    height: string
    formats: AccesoryFormat,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl?: string,
    provider: string,
    provider_metadata?: string | undefined,
    data: string,
    type: string,
    uuid?: string| undefined
}

export type AccesoryFormat = {
    thumbnail: AccesoryThumbnail
}

export type AccesoryThumbnail = {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    path?: string | undefined,
    size: number,
    width: number,
    height: number
}

export type ImageData = {
    view_type: string
}