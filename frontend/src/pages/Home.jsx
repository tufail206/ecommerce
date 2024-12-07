import React from 'react'
import Slider from '../components/Slider'
import { useAuth } from '../context/Auth-context'
import { useProducts } from '../context/product-context'
import Card from '../components/Card'


const Home = () => {
let {isLoggedIn,LoginUserData}=useAuth()
  let { isLoading,
    mensProducts }=useProducts()
  return (
    <section className='mens-prodcut-section bg-slate-100 '>
     
      <Slider/>
      <div className=" container mx-auto mens-category py-8">
          <h2 className='text-lg md:text-2xl'>Mens Products</h2>
        <div className="mens-cards flex gap-6 flex-wrap py-8">
          {
            isLoading ? "LOADING...." : mensProducts?.map((cardData, ind) => {
              return <Card key={ind} {...cardData} />
            })
          }
       </div>
        </div>
    </section>
  )
}

export default Home
