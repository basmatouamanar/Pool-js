const orbitalPeriods = {
    earth: 1.0,
    terre: 1.0,
    mercury: 0.2408467,
    mercure: 0.2408467,
    venus: 0.61519726,
    vénus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    saturne: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

function dogYears(namePlanet, second) {
    const planet = namePlanet.toLowerCase();  
    
    if (!orbitalPeriods[planet]) {
        throw new Error(`Unknown planet: ${namePlanet}`);
    }

    const eartyear = second / 31557600;
    const dogage = eartyear * 7;
    const result = dogage / orbitalPeriods[planet];

    return Number(result.toFixed(2));
}
