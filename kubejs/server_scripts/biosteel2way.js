
ServerEvents.recipes(event => {
    event.custom({
        "type": "alchemancy:item_transmutation",

        "catalyst": {
            "item": "immersiveengineering:ingot_steel"
        },

        "result": {
            "count": 1,
            "id": "oritech:biosteel_ingot"
        }
    })
        event.custom({
        "type": "alchemancy:item_transmutation",

        "catalyst": {
            "item": "oritech:biosteel_ingot"
        },

        "result": {
            "count": 1,
            "id": "immersiveengineering:ingot_steel"
        }
    })
})