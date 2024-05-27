import client from './client'

const endpoint = 'http://192.168.100.103:9000/api/listings'

const getListings = () => client.get(endpoint)

const addListing = listing => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)

    //
    //console.log(listing.images)
    // listing.images.forEach((image, index) => 
    //     //data.append('images', image.base64));
    //     //console.log(listing.image.base64)
    //     data.append('images', {
    //         name: 'image' + index,
    //         type: 'image/jpeg',
    //         uri: image
    //     }));
    for (let i = 0; i < listing.images.length; i++) {
        const image = listing.images[i];
        data.append('images', { name: `image${i}`, type: 'image/jpeg', uri: image });
      }

    //console.log(listing.images)
    if (listing.location) 
        data.append('location', JSON.stringify(listing.location))

    //console.log(data)
    return client.post(endpoint, data, {
        headers: { 
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progress) => 
            console.log(progress.loaded / progress.total)
    })
    // return apiClient.post(endpoint, {
    //     title: 'Test',
    //     price: '20',
    //     categoryId: 4,
    //     description: 'Test',
    //     location: {
    //         latitude: 28.33488467,
    //         longitude: -100.0385732
    //     }
    // })
}

export default {
    addListing,
    getListings
}