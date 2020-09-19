const weather = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

export default function() : String{
    return choice(weather);
}