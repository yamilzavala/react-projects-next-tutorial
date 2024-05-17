import DrinksList from "@/components/DrinksList";

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const resp = await fetch(baseUrl);

    if (!resp.ok) {
        throw new Error('Failed to get drinks!')  
    }

    const data = await resp.json();
    return data;
}

const DrinksPage = async () => {   
    const data = await fetchData();    
    // console.log('data: ', data)
    return (
        <div>            
            <DrinksList drinks={data.drinks}/>
        </div>
    );
};

export default DrinksPage;