import React from 'react'
import {assets} from '../assets/assets'
import Footer from '../components/Footer'
import HomePage_Card from './HomePage_Card'
import HomePage_OfferCard from './HomePage_OfferCard'
import LogoCard from './logoCard'
import Client_Card from './Client_Card'


export default function Home() {

const flight_itenary=[
  {
    locationImageUrl: "../Austria.jpg",
    countryFlagUrl: "",
    priceUrl: "300000",
    city: "lagos",
    country: "Nigeria",

  },
  {
    locationImageUrl: "../brazil.jpg",
    countryFlagUrl: "",
    priceUrl: "400000",
    city: "paris",
    country: "France",
  },
  {
    locationImageUrl: "../Sweden.jpg",
    countryFlagUrl: "",
    priceUrl: "20000",
    city: "Cape Town",
    country: "South Africa",
  },
]

const OfferCard = [
  {
    logoUrl: "../deals.svg",
    title: "Pay small Small",
    text: "Lockdown the best travels deals and pay in convenient time",
  },
  {
    logoUrl:"../airline.svg",
    title:"Holiday Escape",
    text: "Experience a new destination at an affordable price",

  },
  {
    logoUrl:"../guide.svg",
    title: "Travel Guide",
    text: "Explore and be Inspired",
  },
  {
    logoUrl: "../visa_counseling.svg",
    title: "Visa Counseling",
    text: "Our expert Guide you for your traveling process",
  },
]

const logo_Card = [
  {
    logo: '../logo_1.svg',
  },
  {
    logo: '../logo_1.svg',
  },
  {
    logo: '../logo_3.svg',
  },
  {
    logo: '../logo_3.svg',
  },
  {
    logo: '../logo_3.svg'
  },
]


const client_section = [
  {
    text:"Lorem Ipsum is a Well co-ordinated Idea that helps developers to create text.",
    client_image:"../",
    name: "Kelechi Iroegbu",
    portfolio:"Lead Full-Stack Developer",
  },

  {
    text:"Lorem Ipsum is a Well co-ordinated Idea that helps developers to create text.",
    client_image:"../",
    name: "Charles Igwe",
    portfolio:"FullStack Developer",
  },

]


  return (
      <div className = "h-[800px] w-full ">
         <div className="  inset-x-0 top-0 bg-[#000000A6] h-[50px] w-full text-white px-120 flex items-center top-[100px]">
          <div>
            <nav className="space-x-15 flex divide-x ">
              <button className='pr-7 mr-6 '>Home</button>
              <button className='pr-7 mr-6'>Hotel</button>
              <button className='pr-7 mr-6'>Visa</button>
              <button className='pr-7'>Tours</button>
            </nav>
            
          </div>
          
        </div>
          <img src= {assets.home} alt="" className=''/>
         
         <div className='h-[866px] w-full t-[751px] bg-[url(./assets/world_vector.svg)] -rotate-[16.39] pl-15 bg-[#F6F8FA] '>
         <div className = 'w-[160px] h-[150px] t-[750] left-[82px] bg-[#000000] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px]'></div>
        <div className='absolute p-20 mt-30  flex justify-around space-x-7'>
          {OfferCard.map((data,index)=>{
            return <HomePage_OfferCard key={index} data={data} />
          })}
        </div>
        <img src={assets.deco_text} className='w-[153px] h-[166px] ml-270 pr-10 ' alt='' />
         </div>
        
         <div className=' container  relative flex w-full h-[972px]  bg-[url(./assets/Image_city.png)]'>
         <img src ={assets.mountain} className="w-full h-[484px] opacity-7"/>
         <img src ={assets.mountain} className=" w-full h-[588px] t-[136px] left-[730px] opacity-7"/>
        
         <div className='absolute p-20 mt-40  flex justify-around space-x-7'>
          {flight_itenary.map((data,index)=>{
            return <HomePage_Card key={index} data={data} />
          })}
        </div>
        </div>
        <div className='w-[1400px] h-[1101px]'>
          <img src={assets.video} class='h-[456px] w-[1440px]'/>
          <div className='h-[536px] w-[1440px] bg-[#F6F8FA]'>
            <div className='container flex flex justify-between'>
              <div className='relative pl-20 -top-50'>
                <div className='absolute w-[612px] h-[568px] bg-[#FFFFFF]'>
                  <div className='absolute w-[612px] h-[568px]  bg-[url(./assets/Vector_map.svg)] pl-10'>
                    <div className='absolute w-[404.24px] h-[488.13px] top-[40px] left-[100px] bg-[url(./assets/Mask_group.svg)] opacity-[]'>
                      <div className='absolute w-[390.1px] h-[390.1px] top-[65px] right-[4px] bg-[url(./assets/blur.svg)] flex items-center'>
                      <img src={assets.small_ellipse} className='relative' />
                      <img src={assets.Big_ellipse} className='absolute top-[150px] -left-[200px]'/>
                      <div className='absolute w-[732.21px] h-[788.45px] -left-[190px] pt-30 rotate-[180]'>
                           <img src={assets.Boat} />
                      </div>
                     
                      </div>
                    </div>
                </div>
                </div>
                
              </div>
              <div>
                <h2>Category</h2>
                <h2>Make Your Tour Memorable and Safe With Us</h2>
                <p>For far away</p>
                <button>View Tours</button>
              </div>


            </div>

        <div className='relative'>
          <div className=' absolute w-[1440px] h-[100px] t-[1001px] bg-[#F7F7F7] p-20 top-93 flex justify-around space-x-7'>
          {logo_Card.map((data,index)=>{
            return <LogoCard key={index} data={data} />
          })}
          </div>
          </div>
          </div>
        </div>
        <div className='h-[750px] w-[1400px] t-[3584px]  bg-[#F6F8FA] bg-[url(./assets/second_map.svg)] parent p-30'>
          <div className='container'>
            <div className = 'grid grid-cols-2'>
              <div>
                First Column
              </div>
              <div className='relative'>
                <img src={assets.bg_style} className='absolute'/>
                 <img src={assets.Image} className=' absolute'/>
              </div>
            </div>
          </div>
        </div>
        <div className='relative bg-[#F6F8FA] w-[1440px] h-[1067px]'>
          <div className='pl-8'>
            <img src = {assets.Grouped_text}/>
          </div>
          <div className='flex justify-end pr-12 pt-13'>
            <img src = {assets.Group_text2}/>
          </div>
          <div className='absolute container flex items-center top-16 mx-20 '>
          <div className=' bg-[url(./assets/bg_last.svg)] w-[1275px] h-[247px] top-[68px] left-[87px] '>
              <div className=" flex items-center  w-[630px] px-5 py-2.5 bg-[#FFFFFF] mx-auto mt-38">
              <input/>
          </div> 
          </div>
          <div className='container absolute w-[1277px] h-[584px] top-[300px]  border  justify-items-center flex'>
          <div className='justify-items-center mx-auto '>
              <h1>Our Clients Say!</h1>
              <p> Escapism </p>
          <div className='flex pt-10 justify-items-center'>
          <div className = 'z-40 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]'>05</div>
          <div className = 'z-30 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]'>04</div>
          <div className = 'z-20 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]'>03</div>
          <div className = 'z-10  border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]'>02</div>
          <div className = 'z-0 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]'>01</div>
          </div>

          <div className=' flex gap-[10px] pt-20 gap-[25px] flex justify-items-center '>
          {client_section.map((data,index)=>{
            return <Client_Card key={index} data={data} />
          })}
      
          </div>
          </div>
          </div>
            

          </div>
        </div>
        
         <Footer/>
      </div>
      
  
  )
}
