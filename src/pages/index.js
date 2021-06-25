import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>

      
      {/* Header */}
      <Header/>

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
      <ProductFeed products={products}/>
      </main>
            
    </div>
  );
}

// When we need to do server side rendering as in our case for NEXT.js
// This below line tells the nextjs that it is not a static website and it needs to habe that middle server 
export async function getServerSideProps(context){
  const products=await fetch('https://fakestoreapi.com/products')
  .then(response=>response.json())
  return {props:{
    // What comes from api is products so as es6 provide the same for the below we use directly products
    // products:products
    products
  }} 
}


// GET>>>>>https://fakestoreapi.com/products