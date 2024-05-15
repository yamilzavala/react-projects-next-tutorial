import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  return (
    <ul className='menu menu-vertical pl-0'>
      {drinks.map((drink) => {
        const {strDrinkThumb} = drink;
        return (        
            <li key={drink.idDrink}>
            
            <Link
                href={`/drinks/${drink.idDrink}`}
                className='text-xl font-medium'
            >
                <img src={strDrinkThumb} alt="img" />                
                {drink.strDrink}
            </Link>
            </li>
        )
    }
      )}
    </ul>
  );
};
export default DrinksList;