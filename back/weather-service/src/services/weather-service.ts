const weatherService = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<string>): string {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

export default function() : string{
    return choice(weatherService);
}