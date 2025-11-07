await client.create({
    id: productId,
    index: 'products',
    refresh: true,
    body: product
})