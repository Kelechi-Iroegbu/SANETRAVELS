import React from 'react'
import {assets} from '../assets/assets'
import Footer from '../components/Footer'
import HomePage_Card from './HomePage_Card'
import HomePage_OfferCard from './HomePage_OfferCard'
import LogoCard from './logoCard'
import Client_Card from './Client_Card'
import { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Text from './Text'




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

const [payload,setPayload] = useState({
  flightType:"",
  classType:"Economy",
  fromCity:"",
  toCity:"",
  departureDate:"",
  travellers:{
    adult:0,
    children:0,
    infant:0,
  },
})


const onChange = (event)=>{
  const {name,value} = event.target
  setPayload(
    {
      ...payload,
      [name]:value
    }
  )
}

const [selected,setSelected] = useState("")

  return (
      <div className = " relative h-[800px] w-full ">
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
         <div className='absolute w-[581px] h-[59px] rounded-tr-[50px] rounded-tl-[50px]  bg-[#000000] -mt-15 ml-11 opacity-70 flex space-x-3'>
          
          <div className='p-5 text-white space-x-1.5'>
          <svg className='w-5 h-4 inline-block ' viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.63033 7.16889L4.57133 0.804091L6.30923 0.337891L12.5651 6.11589L17.3009 4.84689C17.6468 4.75428 18.0153 4.80285 18.3253 4.98193C18.6354 5.16101 18.8616 5.45592 18.9542 5.80179C19.0468 6.14766 18.9983 6.51615 18.8192 6.82621C18.6401 7.13626 18.3452 7.36248 17.9993 7.45509L4.52453 11.0641L3.82613 8.45589L4.04303 8.39739L6.26333 10.5979L3.89993 11.2315C3.70613 11.2835 3.50052 11.2692 3.31577 11.1909C3.13102 11.1126 2.97772 10.9749 2.88023 10.7995L0.519531 6.54609L1.82363 6.19689L4.04303 8.39739L8.63033 7.16799V7.16889ZM2.80013 13.8001H17.2001V15.6001H2.80013V13.8001Z" fill="#FFFFFF"/>
          </svg>
          <span>Flight</span>
          </div>
          <div className='p-5 text-white space-x-1.5'>
            <svg className='w-6 h-6 inline-block ' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3201 3.5H5.0901C3.1001 3.5 2.1001 4.51 2.1001 6.52V22.5H7.5001V18.75C7.5001 18.34 7.8401 18 8.2501 18C8.6601 18 9.0001 18.33 9.0001 18.75V22.5H14.3001V6.52C14.3001 4.51 13.3101 3.5 11.3201 3.5ZM10.7501 13.25H5.8001C5.3901 13.25 5.0501 12.91 5.0501 12.5C5.0501 12.09 5.3901 11.75 5.8001 11.75H10.7501C11.1601 11.75 11.5001 12.09 11.5001 12.5C11.5001 12.91 11.1601 13.25 10.7501 13.25ZM10.7501 9.5H5.8001C5.3901 9.5 5.0501 9.16 5.0501 8.75C5.0501 8.34 5.3901 8 5.8001 8H10.7501C11.1601 8 11.5001 8.34 11.5001 8.75C11.5001 9.16 11.1601 9.5 10.7501 9.5Z" fill="#F0F4FD"/>
            <path d="M23 21.7501H20.73V18.7501C21.68 18.4401 22.37 17.5501 22.37 16.5001V14.5001C22.37 13.1901 21.3 12.1201 19.99 12.1201C18.68 12.1201 17.61 13.1901 17.61 14.5001V16.5001C17.61 17.5401 18.29 18.4201 19.22 18.7401V21.7501H1C0.59 21.7501 0.25 22.0901 0.25 22.5001C0.25 22.9101 0.59 23.2501 1 23.2501H19.93C19.95 23.2501 19.96 23.2601 19.98 23.2601C20 23.2601 20.01 23.2501 20.03 23.2501H23C23.41 23.2501 23.75 22.9101 23.75 22.5001C23.75 22.0901 23.41 21.7501 23 21.7501Z" fill="#F0F4FD"/>
          </svg>
          <span>Hotel</span>
          </div>
           <div className='p-5 text-white space-x-1.5'>
           <svg className='w-6 h-6 inline-block ' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3201 3.5H5.0901C3.1001 3.5 2.1001 4.51 2.1001 6.52V22.5H7.5001V18.75C7.5001 18.34 7.8401 18 8.2501 18C8.6601 18 9.0001 18.33 9.0001 18.75V22.5H14.3001V6.52C14.3001 4.51 13.3101 3.5 11.3201 3.5ZM10.7501 13.25H5.8001C5.3901 13.25 5.0501 12.91 5.0501 12.5C5.0501 12.09 5.3901 11.75 5.8001 11.75H10.7501C11.1601 11.75 11.5001 12.09 11.5001 12.5C11.5001 12.91 11.1601 13.25 10.7501 13.25ZM10.7501 9.5H5.8001C5.3901 9.5 5.0501 9.16 5.0501 8.75C5.0501 8.34 5.3901 8 5.8001 8H10.7501C11.1601 8 11.5001 8.34 11.5001 8.75C11.5001 9.16 11.1601 9.5 10.7501 9.5Z" fill="#F0F4FD"/>
            <path d="M23 21.7501H20.73V18.7501C21.68 18.4401 22.37 17.5501 22.37 16.5001V14.5001C22.37 13.1901 21.3 12.1201 19.99 12.1201C18.68 12.1201 17.61 13.1901 17.61 14.5001V16.5001C17.61 17.5401 18.29 18.4201 19.22 18.7401V21.7501H1C0.59 21.7501 0.25 22.0901 0.25 22.5001C0.25 22.9101 0.59 23.2501 1 23.2501H19.93C19.95 23.2501 19.96 23.2601 19.98 23.2601C20 23.2601 20.01 23.2501 20.03 23.2501H23C23.41 23.2501 23.75 22.9101 23.75 22.5001C23.75 22.0901 23.41 21.7501 23 21.7501Z" fill="#F0F4FD"/>
          </svg>
          <span>Tours</span>
          </div>
          <div className='p-5 text-white space-x-1.5'>
          <svg className='w-6 h-6 inline-block ' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0501 11.1301L15.3801 9.12006L14.3401 8.68006C14.1801 8.60006 14.0401 8.39006 14.0401 8.21006V5.15006C14.0401 4.19006 13.3301 3.05006 12.4701 2.61006C12.1701 2.46006 11.8101 2.46006 11.5101 2.61006C10.6601 3.05006 9.95006 4.20006 9.95006 5.16006V8.22006C9.95006 8.40006 9.81006 8.61006 9.65006 8.69006L3.95006 11.1401C3.32006 11.4001 2.81006 12.1901 2.81006 12.8701V14.1901C2.81006 15.0401 3.45006 15.4601 4.24006 15.1201L9.25006 12.9601C9.64006 12.7901 9.96006 13.0001 9.96006 13.4301V14.5401V16.3401C9.96006 16.5701 9.83006 16.9001 9.67006 17.0601L7.35006 19.3901C7.11006 19.6301 7.00006 20.1001 7.11006 20.4401L7.56006 21.8001C7.74006 22.3901 8.41006 22.6701 8.96006 22.3901L11.3401 20.3901C11.7001 20.0801 12.2901 20.0801 12.6501 20.3901L15.0301 22.3901C15.5801 22.6601 16.2501 22.3901 16.4501 21.8001L16.9001 20.4401C17.0101 20.1101 16.9001 19.6301 16.6601 19.3901L14.3401 17.0601C14.1701 16.9001 14.0401 16.5701 14.0401 16.3401V13.4301C14.0401 13.0001 14.3501 12.8001 14.7501 12.9601L19.7601 15.1201C20.5501 15.4601 21.1901 15.0401 21.1901 14.1901V12.8701C21.1901 12.1901 20.6801 11.4001 20.0501 11.1301Z" fill="white"/>
          </svg>
          <span>Manage Bookings</span>
          </div>
          

                       
         </div>
         <div className='h-[866px] w-full t-[751px] bg-[url(./assets/world_vector.svg)] -rotate-[16.39] pl-11 bg-[#F6F8FA] '>
         <div className = 'w-[1248px] h-[150px] t-[750] left-[82px] bg-[#000000] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px]'>
          <form className='text-white space-x-4 pt-4 pl-5  flex items-center'>
                <input type="radio" id="contactChoice1" name="flightType" value="oneWay" onChange={onChange} checked={payload.flightType=="oneWay"} />
                <label for="contactChoice1">One way</label>
                <input type="radio" id="contactChoice1" name="flightType" value="roundTrip" onChange={onChange} checked={payload.flightType=="roundTrip"} />
                <label for="contactChoice1">Round way</label>
                <input type="radio" id="contactChoice1" name="flightType" value="multiCity" onChange={onChange} checked={payload.flightType=="multiCity"} />
                <label for="contactChoice1">Multi city</label>
                <div className='w-[181px] h-[31px] flex  border rounded-lg'>
                  <img src={assets.vector_eco}  className='p-1.5'alt=''/>
                  <select name="classType" value={payload.classType} onChange={onChange}>
                  <option value='economy'>
                    Economy
                  </option>
                   <option value='firstClass'>
                    First Class
                  </option>
                   <option value='businessClass'>
                    Business Class
                  </option>
                  
                
                  </select>
                </div>
               </form>
               <div className='grid grid-cols-5  w-[fullpx] h-[64px] flex gap-4'>
                <div className='pl-4 pt-2 '>
                  <h1  className='flex gap-2'><img src={assets.flight_takeoff} />FROM
                  </h1>
                  <Text selected={selected} setSelected={setSelected}/>
                </div>
                <div className='pt-2.5 -ml-15'>
                <img src={assets.direction} alt=''/>To
                </div>
                <Text selected={selected} setSelected={setSelected} />
                <div className='text-white pt-2 -ml-45'>
                  <h1 className='flex gap-2'><img src={assets.flight_takeoff} />TO</h1>
                </div>
                 <div className='text-white pt-2 pl-10 -ml-45 flex border-l'>
                  <div className='flex-none pl-2 '>
                    <img src={assets.solar_calender}  />
                  </div>
                    <h3 className='pl-2'>Departure
                    <h6>Add Date</h6>
                    </h3>
                </div>
                <div className='text-white pt-2 pl-15 -ml-40 flex border-l'>
                  <div className='flex-none '>
                    <img src={assets.people}  />
                  </div>
                    <h3 className='pl-2'>Traveler
                    <h6>Add Date</h6>
                    </h3>
                </div>
                <div className = 'rounded-full h-[70px] w-[70px] bg-[#E49D42] flex items-center p-6 absolute flex top-[796px] left-[1250px]'>
                  <svg width="19" height="19"  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4279 13.1553L18.2826 17.0091L17.0091 18.2826L13.1553 14.4279C11.7214 15.5774 9.9378 16.2026 8.1 16.2C3.6288 16.2 0 12.5712 0 8.1C0 3.6288 3.6288 0 8.1 0C12.5712 0 16.2 3.6288 16.2 8.1C16.2026 9.9378 15.5774 11.7214 14.4279 13.1553ZM12.6225 12.4875C13.7647 11.3129 14.4026 9.73839 14.4 8.1C14.4 4.6188 11.5803 1.8 8.1 1.8C4.6188 1.8 1.8 4.6188 1.8 8.1C1.8 11.5803 4.6188 14.4 8.1 14.4C9.73839 14.4026 11.3129 13.7647 12.4875 12.6225L12.6225 12.4875Z" fill="#F0F4FD"/>
                  </svg>
                </div>
    
              </div>
         </div>
         
        <div className='absolute p-20 mt-30  flex justify-around space-x-7'>
          {OfferCard.map((data,index)=>{
            return <HomePage_OfferCard key={index} data={data} />
          })}
        </div>
        <img src={assets.deco_text} className='w-[153px] h-[166px] ml-270 pr-10 ' alt='' />
         </div>
        
         <div className='flex w-full h-[972px]  bg-[url(./assets/Image_city.png)]'>
         <div className="container w-full h-[484px] opacity-7">
         <img src ={assets.mountain} className='w-full h-[484px]'/>
         </div>
         <div className=" w-full "> 
         <img src ={assets.mountain} className=" h-[588px] t-[136px] left-[730px] opacity-7"/>
        </div>
         <div className='absolute p-20 mt-40  flex justify-around space-x-7'>
          {flight_itenary.map((data,index)=>{
            return <HomePage_Card key={index} data={data} />
          })}
        </div>
        </div>
        <div className='w-full h-[1101px]'>
          <img src={assets.video} class='h-[456px] w-[1440px]'/>
          <div className='h-[536px] w-full bg-[#F6F8FA]'>
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
          <div className=' absolute w-full h-[100px] t-[1001px] bg-[#F7F7F7] p-20 top-93 flex justify-around space-x-7'>
          {logo_Card.map((data,index)=>{
            return <LogoCard key={index} data={data} />
          })}
          </div>
          </div>
          </div>
        </div>
        <div className='h-[750px] w-full t-[3584px]  bg-[#F6F8FA] bg-[url(./assets/second_map.svg)] parent p-30'>
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
        <div className=' bg-[#F6F8FA] w-full h-[1067px] '>
          <div className=' flex justify-between bg'>
            <img src = {assets.Grouped_text} className=''/>
            <img src = {assets.Group_text2} />
          </div>
          <div className=' container flex items-center  mx-auto bg '>
          <div className=' bg-[url(./assets/bg_last.svg)] w-full h-[247px]'>
              <div className=" flex items-center  w-[630px] px-5 py-2.5 bg-[#FFFFFF] mx-auto mt-38">
              <input/>
          </div> 
          
          <div className='container w-full  '>
          <div className='justify-items-center mx-auto pt-20'>
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
        </div>
        
         <Footer/>
      </div>
      
  
  )
}
