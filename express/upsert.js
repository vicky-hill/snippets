await DrinkModel.bulkCreate(payload, {
    updateOnDuplicate: ['type', 'country', 'current', 'price'],
    conflictAttributes: ['name']
});

const drinkSchema = {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
}

// ALTER TABLE drinks ADD UNIQUE (name);