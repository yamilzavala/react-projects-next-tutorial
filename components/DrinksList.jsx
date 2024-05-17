import Image from 'next/image';
import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.map((drink) => {
        const {strDrinkThumb} = drink;
        return (        
            <li key={drink.idDrink}>
              <Link
                  href={`/drinks/${drink.idDrink}`}
                  className='text-xl font-medium'
              >
                <div className='relative h-48 mb-4'>
                  <Image src={strDrinkThumb} fill sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw' alt={drink.strDrink} className='rounded-md object-cover'/>  
                </div>  
                  {/* <img src={strDrinkThumb} alt="img" />                 */}
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