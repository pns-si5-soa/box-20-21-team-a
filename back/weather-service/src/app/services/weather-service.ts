const weatherService = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<string>): string {
    let weather = tab[Math.floor(Math.random() * Math.floor(tab.length))];
    console.log("The weather is currently : "+weather);
    return weather;
}

export default function() : string{
    return choice(weatherService);
}