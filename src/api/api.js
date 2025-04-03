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
            const result = await response.json();
            return result.result;
        });

        const data = await Promise.all(promises);
        localStorage.setItem(name, JSON.stringify(data))
        return data
    }


    const data = JSON.parse(localStorage.getItem(name))
    console.log(data)
    return data
}

export { fecthData };
