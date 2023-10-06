import Image from 'next/image'
import Link from 'next/link';
import im from './pic1/photo_2023-10-06_19-01-02.jpg'


const Home = async() => {
  const fet = await fetch("http://localhost:3000/api/dat/?limit=4");
  const ans = await fet.json()
  return (
    <>
    <h1 className='text-center'>WELCOME TO GARAD BLOG</h1>
    <img
      src="https://th.bing.com/th?q=Humana+Ad&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=ET&setlang=en&adlt=moderate&t=1&mw=247"
      width={10}
      height={10}
      alt="Picture of the author"
    />
    <Image src={im} width={100}/>
    {ans.map(a => <Link href={`./single/${a.id}`}><h1 className='bg-green-500 text-center text-4xl'>id:{a.id}</h1>
    <h1 className='text-2xl'>name:{a.name}</h1>
    <h1>age:{a.age}</h1>
    <h1>image:{a.img}</h1>
    <Image
      src= {a.img}
      width={50}
      height={50}
      alt="Picture of the author"
    />
    </Link>
    
    )}
    </>
  )
}
export default Home
