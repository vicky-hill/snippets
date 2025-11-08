// Update one record
await client.update({
    index: 'products',
    id: productId,
    body: { doc: updatedProduct }
})

// Update multiple record
await client.bulk({
    body: [
        { update: { _index: 'products', _id: '1' } },
        { doc: { price: 12.00 } },
        { update: { _index: 'products', _id: '3' } },
        { doc: { price: 8.00 } },
        { update: { _index: 'products', _id: '4' } },
        { doc: { name: 'New name' } },
    ]
})

// With docs mapping
const docs = products.map(product => ([
    { update: { _index: 'products', _id: product.productId } },
    { doc: { price: product.price } },
])).flat();

await client.bulk({
    body: docs
})

