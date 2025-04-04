const BASE_URL = "https://www.swapi.tech/api/";

async function fecthData(name) {
    if (!localStorage.getItem(name)) {
        const response = await fetch(BASE_URL + name);
        if (!response.ok) {
            throw new Error(response.status);
        }

        const result = await response.json();

        const promises = result.results.map(async (item) => {
            const response = await fetch(item.url);

            let result = await response.json();
            if (name === "people") {
                console.log(result.result.uid);
                const extraData = await fetch(`https://akabab.github.io/starwars-api/api/id/${result.result.uid}.json`);
                const extraJson = await extraData.json();
                result.result.properties.image = extraJson.image;

            }
            return result.result;
        });

        const data = await Promise.all(promises);
        localStorage.setItem(name, JSON.stringify(data))
        return data
    }


    const data = JSON.parse(localStorage.getItem(name))
    return data
}

export { fecthData };
