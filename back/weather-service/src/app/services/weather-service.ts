const weatherService = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<string>): string {
    let weather = tab[Math.floor(Math.random() * Math.floor(tab.length))];
    console.log("The current weather is... " + weather);
    return weather;
}

export default function() : string{
    return choice(weatherService);
}