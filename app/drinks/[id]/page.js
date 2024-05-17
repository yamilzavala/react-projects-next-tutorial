import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fecthDrinkDetails = async (id) => {
    new Promise((resolve) => setTimeout(resolve,1000));
    const resp = await fetch(`${url}${id}`)

    if(!resp.ok) {
        throw new Error('Failed to load drink details!')
    }

    return resp.json();
}

const SingleDrinkPage = async ({params}) => {
    console.log('##PARAMS##:', params)
    const data = await fecthDrinkDetails(params.id);
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
        <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>back to drinks</Link>
        <h1 className='text-4xl mb-8'>{title}</h1>
        {/* <img src={imgSrc} alt={title}/> */}
        <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded shadow-lg mb-4'
        priority
        alt=''
        />
    </div>
  )
}

export default SingleDrinkPage