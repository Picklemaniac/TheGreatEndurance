const eventComponents = [
    { chainId: 1, templateDescription: "", script: [ 
        /* outcome 3 */
        "you found a chest and a door under water. you opend the chest and inside was an item",
        "",
        "",
        "",

    ]},

    { chainId: 1, templateDescription: "", script: [ 
        /* outcome 2 */
        ["you hit a switch and got drained into a hole which led you to another room", "random outcome 1", "random outcome 2 and skip to script[2][0]", "random outcome 3", "random outcome 4"]
        /* after the first index is completed with its random outcome we do the next and the next etc. */
        ["you get into a room with a person", "we follow script in this one", "so this happends", "then this happends", "then random outcome 1", "then random outcome 2 maybe we even skip to the end now"]
        ["result random outcome 2 from script[0][2]", "random outcome 1", "random outcome 2", "random outcome 3", "random outcome 4"]
        ["you exist out of the underwater chaimbers en make your way trough the hallway again"]

    ]},
    { chainId: 1, templateDescription: "", script: [ 
        /* outcome 1 */
        "A big water snake was swimming about and found you and you got into a fight with it",
        "",
        "",
        "",
    ]},
]