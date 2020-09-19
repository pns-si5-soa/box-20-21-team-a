const rocket_status = ["ready", "not ready"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

export default function() : String{
    return choice(rocket_status);
}