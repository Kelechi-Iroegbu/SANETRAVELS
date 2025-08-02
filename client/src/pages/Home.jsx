import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Client_Card from "../components/Client_Card";
import HomePage_Card from "../components/HomePage_Card";
import HomePage_OfferCard from "../components/HomePage_OfferCard";
import LogoCard from "../components/LogoCard";
import Text from "../components/Text";
import Header from "../components/Header";
import Traveler from "../components/Traveler";





export default function Home() {

  
  const flight_itenary = [
    {
      locationImageUrl: "../Austria.jpg",
      logo:"../sweden.svg",
      countryFlagUrl: "",
      priceUrl: "300000",
      city: "Lagos",
      country: "Nigeria",
      date:"sun,Mar02, 2025 - Mon,Mar10,2025 ",
      flightlogo:"../lufthansa.svg",
    },
    {
      locationImageUrl: "../brazil.jpg",
      logo:"../egypt.svg",
      countryFlagUrl: "",
      priceUrl: "400000",
      city: "Paris",
      country: "France",
      date:"sun,Mar02,2025 - Mon,Mar10,2025 ",
      flightlogo:"../wego.svg",
    },
    {
      locationImageUrl: "../Sweden.jpg",
      logo:"../brazil.svg",
      countryFlagUrl: "",
      priceUrl: "20000",
      city: "Cape Town",
      country: "South Africa",
      date:"sun,Mar02,2025 - Mon,Mar10,2025 ",
      flightlogo:"../egyptair.svg",
    },
  ];

  const OfferCard = [
    {
      logoUrl: "../deals.svg",
      title: "Pay small Small",
      text: "Lockdown the best travels deals and pay in convenient time",
    },
    {
      logoUrl: "../Group 51.svg",
      title: "Holiday Escape",
      text: "Experience a new destination at an affordable price",
    },
    {
      logoUrl: "../guide.svg",
      title: "Travel Guide",
      text: "Explore and be Inspired",
    },
    {
      logoUrl: "../visa_counseling.svg",
      title: "Visa Counseling",
      text: "Our expert Guide you for your traveling process",
    },
  ];

  const logo_Card = [
    {
      logo: "../logo_1.svg",
    },
    {
      logo: "../logo_1.svg",
    },
    {
      logo: "../logo_3.svg",
    },
    {
      logo: "../logo_3.svg",
    },
    {
      logo: "../logo_3.svg",
    },
  ];

  const testimonial = ()=>{

    const client_section = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Egestas quam semper morbi molestie hendrerit dolor volutpat arcu  lectus. Purus turpis fringilla hendrerit.",
      client_image: "../human.png",
      name: "Kelechi Iroegbu",
      portfolio: "Lead Full-Stack Developer",
    },

    {
      text: "Lorem ipsum dolor sit amet consectetur. Egestas quam semper morbi molestie hendrerit dolor volutpat arcu lectus. Purus turpis fringilla hendrerit.",
      client_image: "..//human.png",
      name: "Charles Igwe",
      portfolio: "FullStack Developer",
    },
     {
      text: "Lorem ipsum dolor sit amet consectetur. Egestas quam semper morbi molestie hendrerit dolor volutpat arcu lectus. Purus turpis fringilla hendrerit.",
      client_image: "..//human.png",
      name: "Kc",
      portfolio: "FullStack Developer",
    },
  ];
return client_section
  }


  
  
  const [payload, setPayload] = useState({
    flightType: "",
    classType: "Economy",
    fromCity: "",
    toCity: "",
    departureDate: "",
    travelers: {
      adult: 0,
      children: 0,
      infant: 0,
    },
  });

  
  


  const onChange = (event) => {
    console.log("====================================");
    console.log(event);
    console.log("====================================");

    let { name, value } = event.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  // logs the payload whenever it changes
  useEffect(() => {
    console.log("Payload Updated:");
    
  }, [payload]);
console.log(payload);
  const [showCalendar, setShowCalender] = useState(false);

  const [showList,setshowList] = useState(false);

  const [date, setDate] = useState(new Date());

  const [travels,setTravels] = useState("false")

  const onSubmithander = async(e) =>{
    try {
      
    } catch (error) {
      
    }


  }

  console.log(date)
  useEffect(() => {
    // This effect runs when the component mounts
    if(date){
      onChange({
        target: {name: "departureDate", value: dayjs(date).toISOString()}
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const testimonials = testimonial() || []; // ensure it's an array
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 2 < testimonials.length ?
     prev + 1 : prev
    );
  };


const navigate = useNavigate()

const onSubmit = ()=> {

  console.log("clicked")
  navigate('/book', {state: payload})
  
}








  return (
    <div>
      <Header/>
    <div className=" relative h-[800px] w-full ">
      <div className="  inset-x-0 top-0 bg-[#000000A6] h-[50px] w-full text-white px-120 flex items-center top-[100px]">
        <div>
          <nav className="space-x-15 flex divide-x ">
            <button className="pr-7 mr-6 ">Home</button>
            <button className="pr-7 mr-6">Hotel</button>
            <button className="pr-7 mr-6">Visa</button>
            <button className="pr-7">Tours</button>
          </nav>
        </div>
      </div>
      <img src={assets.home} alt="" className="" />
      <div className="absolute w-[581px] h-[59px] rounded-tr-[50px] outline outline-white rounded-tl-[50px]  bg-[#000000] -mt-15 ml-11 opacity-70 flex space-x-3">
        <div className="p-5 text-white space-x-1.5">
          <svg
            className="w-5 h-4 inline-block "
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.63033 7.16889L4.57133 0.804091L6.30923 0.337891L12.5651 6.11589L17.3009 4.84689C17.6468 4.75428 18.0153 4.80285 18.3253 4.98193C18.6354 5.16101 18.8616 5.45592 18.9542 5.80179C19.0468 6.14766 18.9983 6.51615 18.8192 6.82621C18.6401 7.13626 18.3452 7.36248 17.9993 7.45509L4.52453 11.0641L3.82613 8.45589L4.04303 8.39739L6.26333 10.5979L3.89993 11.2315C3.70613 11.2835 3.50052 11.2692 3.31577 11.1909C3.13102 11.1126 2.97772 10.9749 2.88023 10.7995L0.519531 6.54609L1.82363 6.19689L4.04303 8.39739L8.63033 7.16799V7.16889ZM2.80013 13.8001H17.2001V15.6001H2.80013V13.8001Z"
              fill="#FFFFFF"
            />
          </svg>
          <span>Flight</span>
        </div>
        <div className="p-5 text-white space-x-1.5">
          <svg
            className="w-6 h-6 inline-block "
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3201 3.5H5.0901C3.1001 3.5 2.1001 4.51 2.1001 6.52V22.5H7.5001V18.75C7.5001 18.34 7.8401 18 8.2501 18C8.6601 18 9.0001 18.33 9.0001 18.75V22.5H14.3001V6.52C14.3001 4.51 13.3101 3.5 11.3201 3.5ZM10.7501 13.25H5.8001C5.3901 13.25 5.0501 12.91 5.0501 12.5C5.0501 12.09 5.3901 11.75 5.8001 11.75H10.7501C11.1601 11.75 11.5001 12.09 11.5001 12.5C11.5001 12.91 11.1601 13.25 10.7501 13.25ZM10.7501 9.5H5.8001C5.3901 9.5 5.0501 9.16 5.0501 8.75C5.0501 8.34 5.3901 8 5.8001 8H10.7501C11.1601 8 11.5001 8.34 11.5001 8.75C11.5001 9.16 11.1601 9.5 10.7501 9.5Z"
              fill="#F0F4FD"
            />
            <path
              d="M23 21.7501H20.73V18.7501C21.68 18.4401 22.37 17.5501 22.37 16.5001V14.5001C22.37 13.1901 21.3 12.1201 19.99 12.1201C18.68 12.1201 17.61 13.1901 17.61 14.5001V16.5001C17.61 17.5401 18.29 18.4201 19.22 18.7401V21.7501H1C0.59 21.7501 0.25 22.0901 0.25 22.5001C0.25 22.9101 0.59 23.2501 1 23.2501H19.93C19.95 23.2501 19.96 23.2601 19.98 23.2601C20 23.2601 20.01 23.2501 20.03 23.2501H23C23.41 23.2501 23.75 22.9101 23.75 22.5001C23.75 22.0901 23.41 21.7501 23 21.7501Z"
              fill="#F0F4FD"
            />
          </svg>
          <span>Hotel</span>
        </div>
        <div className="p-5 text-white space-x-1.5">
          <svg
            className="w-6 h-6 inline-block "
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3201 3.5H5.0901C3.1001 3.5 2.1001 4.51 2.1001 6.52V22.5H7.5001V18.75C7.5001 18.34 7.8401 18 8.2501 18C8.6601 18 9.0001 18.33 9.0001 18.75V22.5H14.3001V6.52C14.3001 4.51 13.3101 3.5 11.3201 3.5ZM10.7501 13.25H5.8001C5.3901 13.25 5.0501 12.91 5.0501 12.5C5.0501 12.09 5.3901 11.75 5.8001 11.75H10.7501C11.1601 11.75 11.5001 12.09 11.5001 12.5C11.5001 12.91 11.1601 13.25 10.7501 13.25ZM10.7501 9.5H5.8001C5.3901 9.5 5.0501 9.16 5.0501 8.75C5.0501 8.34 5.3901 8 5.8001 8H10.7501C11.1601 8 11.5001 8.34 11.5001 8.75C11.5001 9.16 11.1601 9.5 10.7501 9.5Z"
              fill="#F0F4FD"
            />
            <path
              d="M23 21.7501H20.73V18.7501C21.68 18.4401 22.37 17.5501 22.37 16.5001V14.5001C22.37 13.1901 21.3 12.1201 19.99 12.1201C18.68 12.1201 17.61 13.1901 17.61 14.5001V16.5001C17.61 17.5401 18.29 18.4201 19.22 18.7401V21.7501H1C0.59 21.7501 0.25 22.0901 0.25 22.5001C0.25 22.9101 0.59 23.2501 1 23.2501H19.93C19.95 23.2501 19.96 23.2601 19.98 23.2601C20 23.2601 20.01 23.2501 20.03 23.2501H23C23.41 23.2501 23.75 22.9101 23.75 22.5001C23.75 22.0901 23.41 21.7501 23 21.7501Z"
              fill="#F0F4FD"
            />
          </svg>
          <span>Tours</span>
        </div>
        <div className="p-5 text-white space-x-1.5">
          <svg
            className="w-6 h-6 inline-block "
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0501 11.1301L15.3801 9.12006L14.3401 8.68006C14.1801 8.60006 14.0401 8.39006 14.0401 8.21006V5.15006C14.0401 4.19006 13.3301 3.05006 12.4701 2.61006C12.1701 2.46006 11.8101 2.46006 11.5101 2.61006C10.6601 3.05006 9.95006 4.20006 9.95006 5.16006V8.22006C9.95006 8.40006 9.81006 8.61006 9.65006 8.69006L3.95006 11.1401C3.32006 11.4001 2.81006 12.1901 2.81006 12.8701V14.1901C2.81006 15.0401 3.45006 15.4601 4.24006 15.1201L9.25006 12.9601C9.64006 12.7901 9.96006 13.0001 9.96006 13.4301V14.5401V16.3401C9.96006 16.5701 9.83006 16.9001 9.67006 17.0601L7.35006 19.3901C7.11006 19.6301 7.00006 20.1001 7.11006 20.4401L7.56006 21.8001C7.74006 22.3901 8.41006 22.6701 8.96006 22.3901L11.3401 20.3901C11.7001 20.0801 12.2901 20.0801 12.6501 20.3901L15.0301 22.3901C15.5801 22.6601 16.2501 22.3901 16.4501 21.8001L16.9001 20.4401C17.0101 20.1101 16.9001 19.6301 16.6601 19.3901L14.3401 17.0601C14.1701 16.9001 14.0401 16.5701 14.0401 16.3401V13.4301C14.0401 13.0001 14.3501 12.8001 14.7501 12.9601L19.7601 15.1201C20.5501 15.4601 21.1901 15.0401 21.1901 14.1901V12.8701C21.1901 12.1901 20.6801 11.4001 20.0501 11.1301Z"
              fill="white"
            />
          </svg>
          <span>Manage Bookings</span>
        </div>
      </div>

      <div className="h-[866px] w-full t-[751px] bg-[url(./assets/world_vector.svg)] -rotate-[16.39] pl-11 bg-[#F6F8FA] relative">
        <div className=" outline-white outline shadow-2xl w-[1248px] h-[150px] t-[750] left-[82px] bg-[#000000] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] ">
          <form onSubmit={onSubmithander} className="text-white space-x-4 pt-4 pl-5  flex items-center">
            <input
              type="radio"
              id="contactChoice1"
              name="flightType"
              value="oneWay"
              onChange={onChange}
              checked={payload.flightType == "oneWay"}
            />
            <label for="contactChoice1">One way</label>
            <input
              type="radio"
              id="contactChoice2"
              name="flightType"
              value="roundTrip"
              onChange={onChange}
              checked={payload.flightType == "roundTrip"}
            />
            <label for="contactChoice2">Round way</label>
            <input
              type="radio"
              id="contactChoice3"
              name="flightType"
              value="multiCity"
              onChange={onChange}
              checked={payload.flightType == "multiCity"}
            />
            <label for="contactChoice3">Multi city</label>
            <div className="w-[181px] h-[31px] flex  border rounded-lg">
              <img src={assets.vector_eco} className="p-1.5" alt="" />
              <select
                name="classType"
                value={payload.classType}
                onChange={onChange}
              >
                <option value="economy">Economy</option>
                <option value="firstClass">First Class</option>
                <option value="businessClass">Business Class</option>
              </select>
            </div>
          </form>
          <div className="grid grid-cols-5 h-[64px] gap- mx-5">
            {/* <div className="flex justify-between"> */}
            <div className="pl-4 pt-2 ">
              <div className="flex gap-2">
                <img src={assets.flight_takeoff} />
                <span className="text-white">FROM</span>
              </div>
              <Text
                selected={payload.fromCity}
                setSelected={onChange}
                name="fromCity"
              />
            </div>

            <div className="mx-2">
              <img src={assets.direction} alt="" />
            </div>

            <div className="pl- pt-2">
              <div className="flex gap-2">
                <img src={assets.flight_takeoff} />

                <span className="text-white">To</span>
              </div>
              <Text
                selected={payload.toCity}
                setSelected={onChange}
                name="toCity"
              />
            </div>
            {/* </div>/ */}
            {/* <div className="text-white pt-2 -ml-45">
              <h1 className="flex gap-2">
                <img src={assets.flight_takeoff} />
                TO
              </h1>
            </div> */}
            <div className="text-white pt-2  mx- flex">
              <div className="flex-none pl-2 ">
                <img src={assets.solar_calender} />
              </div>
              <h3 className="pl-2">
                Departure
                <h6
                  className="cursor-pointer hover:text-gray-300 "
                  onClick={() => setShowCalender(!showCalendar)}
                >
                  {date ? dayjs(date).format("DD/MM/YYYY") : "Add Date"}
                </h6>
                {showCalendar && (
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                  />
                )}
              </h3>
            </div>
            <div className="text-white pt-2 pl-15 -ml- flex">
              <div className="flex-none ">
                <img src={assets.people} />
              </div>
              <h3 className="pl-2">
                Traveler
                <h6 className = 'relative cursor-pointer hover:text-gray-300'  onClick={() => setTravels(!travels)}>
                  {'Add Traveler'}
                </h6>
                {travels && (
                  <Traveler setPayload={setPayload} payload={payload}
                  />
                )}
              
              </h3>

            </div>

            {/* Search icon */}
            <div onClick={onSubmit} className="rounded-full h-[70px] w-[70px] bg-[#E49D42] items-center p-6 absolute right-0">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4279 13.1553L18.2826 17.0091L17.0091 18.2826L13.1553 14.4279C11.7214 15.5774 9.9378 16.2026 8.1 16.2C3.6288 16.2 0 12.5712 0 8.1C0 3.6288 3.6288 0 8.1 0C12.5712 0 16.2 3.6288 16.2 8.1C16.2026 9.9378 15.5774 11.7214 14.4279 13.1553ZM12.6225 12.4875C13.7647 11.3129 14.4026 9.73839 14.4 8.1C14.4 4.6188 11.5803 1.8 8.1 1.8C4.6188 1.8 1.8 4.6188 1.8 8.1C1.8 11.5803 4.6188 14.4 8.1 14.4C9.73839 14.4026 11.3129 13.7647 12.4875 12.6225L12.6225 12.4875Z"
                  fill="#F0F4FD"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col pt-25'>
        <h2 className='font-poppins text-secondary text-[18px] font-semibold'>CATEGORY</h2>
        <h1 className='font-first font-extrabold text-[50px]  text-bush'>We Offer Best Services</h1>
        </div>
        <div className="absolute  flex justify-between space-x-20 mx-40 pt-5">
          {OfferCard.map((data, index) => {
            return <HomePage_OfferCard key={index} data={data} />;
          })}
        </div>
        <img
          src={assets.deco_text}
          className="w-[153px] h-[166px] ml-270 pr-10 "
          alt=""
        />
      </div>
      <div className='w-full  h-[866px]  bg-[url(./assets/Image_city.png)]  mx-auto'>
        <div className='text-center pt-20'>
          <p className='font-bold font-weight:600 text-secondary'>TOP TRENDING</p>
          <p className='font-first font-extrabold text-[50px] text-bush'>Trending Flight Deals</p>
          <p className='pt-5 text-subPrimary '>Get the best flight deals, airline specials and  promotions</p>
          </div>
      <div className='flex w-full h-[972px] -mt-50'>
        <div className=" w-full h-[484px] opacity-7">
          <img src={assets.mountain} className="w-full h-[484px]" />
        </div>
        <div className=" w-[fullpx] h-[588px] pt-30 pl-50">
          <img
            src={assets.mountain}
            className=" h-[588px] t-[136px] left-[730px] opacity-7"
          />
        </div>
        
        <div className="absolute p-20 mt-40  flex justify-around space-x-7 mx-auto pr-5">
          {flight_itenary.map((data, index) => {
            return <HomePage_Card key={index} data={data} />;
          })}
        
          <div className='absolute w-[274px] h-[75.99px] top-[550px] left-[80px]  flex items-center space-x-7 text-teriary '>
            <div className='w-[75.99px] h-[75.99px] bg-[#F7F7F7] rounded-full flex justify-center items-center'>
              <img src='../Phone.png' className='w-[33.5px] h-[33.5px]'/>
            </div>
            <div>
            <p className='text-[18px] font-bold'>Need Help!</p>
            <p>Click to get in touch.</p>
            </div>
          </div>
          <div className='absolute w-[158px] h-[25px] top-[550px] right-[45px] text-teriary '>
            <p className='font-bold underline text-[18px]'>View More Deals</p>
          </div>
        
          </div>
      </div>
      </div>



      <div className="w-full h-[1101px]">
        <div className='w-full h-[465]'>
           <img src={assets.video}/>
        </div>
        <div className="h-[536px] w-full bg-[#F6F8FA]">
          <div className="container flex flex justify-between">
            <div className="relative pl-20 -top-50">
              <div className="absolute w-[612px] h-[568px] bg-[#FFFFFF]">
                <div className="absolute w-[612px] h-[568px]  bg-[url(./assets/Vector_map.svg)] pl-10">
                  <div className="absolute w-[404.24px] h-[488.13px] top-[40px] left-[100px] bg-[url(./assets/Mask_group.svg)] opacity-[]">
                    <div className="absolute w-[390.1px] h-[390.1px] top-[65px] right-[4px] bg-[url(./assets/blur.svg)] flex items-center">
                      <img src={assets.small_ellipse} className="relative" />
                      <img
                        src={assets.Big_ellipse}
                        className="absolute top-[150px] -left-[200px]"
                      />
                      <div className="absolute w-[732.21px] h-[788.45px] -left-[190px] pt-30 rotate-[180]">
                        <img src={assets.Boat} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[450px] h-[450px] items-start pt-7'>
              <h2 className='text-secondary text-[18px] font-bold  w-[421px]'>CATEGORY</h2>
              <h2 className='text-bush text-[50px] font-weight:700 font-first leading-[70px] text-left'>Make Your Tour Memorable And <br></br> Safe With Us</h2>
              <p className='pt-7 pb-7 text-subPrimary font-poppins'>Far far away, behind the word mountains, far from the <br></br> countries Vokalia and Consonantia, there live the blind <br></br>texts. Separated they live in Bookmarksgrove right at  <br></br>the coast of the Semantics, a large language ocean.</p>
              <button className=' bg-secondary w-[144px] h-[45px] items-center rounded-sm text-white'>View Tours</button>
            </div>
          </div>
          <div className="  w-[full] bg-[#F7F7F7] h-[300px] ">
            <div className=" p-20 flex justify-around space-x-7 ">
              {logo_Card.map((data, index) => {
                return <LogoCard key={index} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[750px] w-full t-[3584px]  bg-[#F6F8FA] bg-[url(./assets/second_map.svg)] parent p-30">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <p className='font-semibold text-secondary'>Car Hiring Services</p>
              <p className='font-bold text-[50px] font-first text-bush'>Providing Realiable Car <br></br> Rental Services</p>
              <p className='pt-7 text-subPrimary'>Enhance your driving experience with the right rental to <br></br> suit your transportation needs. With a wide range of <br></br>vehicle models and sizes, our vehicles are reliable <br></br> and in good condition.</p>
            </div>
            <div className="relative">
              <img src={assets.bg_style} className="absolute" />
              <img src={assets.Image} className=" absolute" />
            </div>
          </div>
          <div className='flex space-x-7 pt-10 pb-10'>
          <div className='flex items-center space-x-5 '>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H31.0172L44.8027 13.7854V44.8027H0V0Z" fill="#C25B1D"/>
              <g clip-path="url(#clip0_251_2815)">
              <path d="M22.4017 17.0164L23.6496 19.6752L26.4404 20.102L24.421 22.1711L24.8976 25.0938L22.4017 23.7139L19.9057 25.0938L20.3823 22.1711L18.363 20.102L21.1537 19.6752L22.4017 17.0164ZM22.4017 15.6702C21.8793 15.6702 21.4054 15.9717 21.1833 16.4443L20.241 18.4528L18.1597 18.7705C17.6602 18.8473 17.2469 19.196 17.0867 19.6739C16.9265 20.1518 17.0477 20.6808 17.3991 21.0416L18.9445 22.6248L18.577 24.8771C18.4935 25.3859 18.7089 25.8975 19.1303 26.195C19.3619 26.3579 19.6338 26.44 19.9057 26.44C20.1292 26.44 20.354 26.3848 20.5573 26.2718L22.4017 25.2527L24.246 26.2718C24.4493 26.3848 24.6741 26.44 24.8976 26.44C25.1695 26.44 25.4415 26.3579 25.673 26.195C26.0944 25.8975 26.3098 25.3859 26.2263 24.8771L25.8588 22.6248L27.4043 21.0416C27.757 20.6808 27.8781 20.1531 27.7179 19.6739C27.5577 19.1946 27.1431 18.8459 26.645 18.7705L24.5637 18.4528L23.6213 16.4443C23.3992 15.9717 22.924 15.6702 22.4017 15.6702Z" fill="#FDF7ED"/>
              <path d="M22.4011 12.9777L29.1323 15.3336V23.1795C29.1323 24.9255 28.3932 26.5814 27.117 27.6988L22.4011 31.825L17.6853 27.6988C16.409 26.5814 15.67 24.9255 15.67 23.1795V15.3336L22.4011 12.9777ZM22.4011 11.6315C22.2504 11.6315 22.1009 11.657 21.9569 11.7069L15.2257 14.0628C14.6859 14.2526 14.3237 14.7615 14.3237 15.3336V23.1795C14.3237 25.3186 15.2257 27.3353 16.7995 28.7125L21.5153 32.8387C21.7684 33.0608 22.0848 33.1712 22.4011 33.1712C22.7175 33.1712 23.0339 33.0608 23.2883 32.8387L28.0042 28.7125C29.5766 27.3353 30.4785 25.3186 30.4785 23.1795V15.3336C30.4785 14.7615 30.1164 14.2526 29.5766 14.0628L22.8454 11.7069C22.7013 11.657 22.5519 11.6315 22.4011 11.6315Z" fill="#FDF7ED"/>
              </g>
              <defs>
              <clipPath id="clip0_251_2815">
              <rect width="21.5397" height="21.5397" fill="white" transform="translate(11.6313 11.6315)"/>
              </clipPath>
              </defs>
              </svg>
              <p className='font-bold font-first text-subSecondary'>SAFE & TRUSTED</p>
          </div>
           <div className='flex items-center space-x-5'>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.198242 0H31.2155L45.0009 13.7854V44.8027H0.198242V0Z" fill="#1798A3"/>
              <g clip-path="url(#clip0_251_2820)">
              <path d="M31.21 14.3239H22.0744L17.9078 11.824C17.6951 11.6961 17.4555 11.6315 17.2145 11.6315C17.022 11.6315 16.8295 11.6732 16.6505 11.7553C16.2466 11.9424 15.9598 12.3167 15.8871 12.7556L15.626 14.3239H14.5221C13.0345 14.3239 11.8296 15.5288 11.8296 17.0164V31.825C11.8296 32.5681 12.4327 33.1712 13.1758 33.1712H32.0231C32.7662 33.1712 33.3693 32.5681 33.3693 31.825V16.4833C33.3693 15.2905 32.4027 14.3239 31.21 14.3239ZM17.2145 12.9777L26.1899 18.3626H16.3166L17.2145 12.9777ZM14.0051 15.7752C14.164 15.7079 14.339 15.6702 14.5221 15.6702H15.4011L14.9529 18.3626H14.5221C13.7803 18.3626 13.1758 17.7582 13.1758 17.0164C13.1758 16.4577 13.5191 15.9785 14.0051 15.7752ZM32.0231 27.7863H28.6575C27.5428 27.7863 26.6382 26.8816 26.6382 25.7669C26.6382 24.6522 27.5428 23.7476 28.6575 23.7476H32.0231V27.7863ZM32.0231 22.4013H28.6575C26.8024 22.4013 25.2919 23.9118 25.2919 25.7669C25.2919 27.622 26.8024 29.1325 28.6575 29.1325H32.0231V30.4787V31.825H13.1758V19.336C13.573 19.5662 14.0293 19.7089 14.5221 19.7089H14.728H32.0231V22.4013ZM32.0231 18.3492V18.3626H28.8056L24.3186 15.6702H31.21C31.6583 15.6702 32.0231 16.035 32.0231 16.4833V18.3492Z" fill="#EEFDFB"/>
              <path d="M28.6575 26.44C29.0292 26.44 29.3306 26.1387 29.3306 25.7669C29.3306 25.3952 29.0292 25.0938 28.6575 25.0938C28.2857 25.0938 27.9844 25.3952 27.9844 25.7669C27.9844 26.1387 28.2857 26.44 28.6575 26.44Z" fill="#EEFDFB"/>
              </g>
              <defs>
              <clipPath id="clip0_251_2820">
              <rect width="21.5397" height="21.5397" fill="white" transform="translate(11.8296 11.6315)"/>
              </clipPath>
              </defs>
              </svg>

              <p className='font-bold font-first text-subtertiary'>AFFORDABLE PRICE</p>
          </div>
          </div>
          <button className='bg-secondary w-[144px] h-[45px] rounded-sm text-white'>Rent a vehicle</button>
        </div>
      </div>
      <div className=" bg-[#F6F8FA] w-full h-[1067px]  ">
        <div className=" flex justify-between ">
          <div className='pl-5'>
          <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M141.441 152.61V154.479H152.162V152.61H141.441ZM145.803 148.045V159.432H147.79V148.045H145.803Z" fill="#E5E5E5"/>
          <path d="M106.441 117.61V119.479H117.162V117.61H106.441ZM110.803 113.045V124.432H112.79V113.045H110.803Z" fill="#E5E5E5"/>
          <path d="M71.4414 12.6104V14.4795H82.1621V12.6104H71.4414ZM75.8027 8.04492V19.4316H77.79V8.04492H75.8027Z" fill="#E5E5E5"/>
          <path d="M71.4414 47.6104V49.4795H82.1621V47.6104H71.4414ZM75.8027 43.0449V54.4316H77.79V43.0449H75.8027Z" fill="#E5E5E5"/>
          <path d="M71.4414 82.6104V84.4795H82.1621V82.6104H71.4414ZM75.8027 78.0449V89.4316H77.79V78.0449H75.8027Z" fill="#6246E5"/>
          <path d="M71.4414 117.61V119.479H82.1621V117.61H71.4414ZM75.8027 113.045V124.432H77.79V113.045H75.8027Z" fill="#E5E5E5"/>
          <path d="M71.4414 152.61V154.479H82.1621V152.61H71.4414ZM75.8027 148.045V159.432H77.79V148.045H75.8027Z" fill="#E5E5E5"/>
          <path d="M36.4414 12.6104V14.4795H47.1621V12.6104H36.4414ZM40.8027 8.04492V19.4316H42.79V8.04492H40.8027Z" fill="#E5E5E5"/>
          <path d="M36.4414 47.6104V49.4795H47.1621V47.6104H36.4414ZM40.8027 43.0449V54.4316H42.79V43.0449H40.8027Z" fill="#E5E5E5"/>
          <path d="M36.4414 82.6104V84.4795H47.1621V82.6104H36.4414ZM40.8027 78.0449V89.4316H42.79V78.0449H40.8027Z" fill="#E5E5E5"/>
          <path d="M36.4414 117.61V119.479H47.1621V117.61H36.4414ZM40.8027 113.045V124.432H42.79V113.045H40.8027Z" fill="#E5E5E5"/>
          <path d="M36.4414 152.61V154.479H47.1621V152.61H36.4414ZM40.8027 148.045V159.432H42.79V148.045H40.8027Z" fill="#E5E5E5"/>
          <path d="M1.44141 12.6104V14.4795H12.1621V12.6104H1.44141ZM5.80273 8.04492V19.4316H7.79004V8.04492H5.80273Z" fill="#FF7152"/>
          <path d="M1.44141 47.6104V49.4795H12.1621V47.6104H1.44141ZM5.80273 43.0449V54.4316H7.79004V43.0449H5.80273Z" fill="#E5E5E5"/>
          <path d="M1.44141 82.6104V84.4795H12.1621V82.6104H1.44141ZM5.80273 78.0449V89.4316H7.79004V78.0449H5.80273Z" fill="#E5E5E5"/>
          <path d="M1.44141 117.61V119.479H12.1621V117.61H1.44141ZM5.80273 113.045V124.432H7.79004V113.045H5.80273Z" fill="#E5E5E5"/>
          <path d="M1.44141 152.61V154.479H12.1621V152.61H1.44141ZM5.80273 148.045V159.432H7.79004V148.045H5.80273Z" fill="#E5E5E5"/>
          </svg>
          </div>
          <div className='pt-50 pr-5'>
          <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.19727 152.61H11.5586V154.49H7.19727V159.432H5.19922V154.49H0.837891V152.61H5.19922V148.045H7.19727V152.61Z" fill="#E5E5E5"/>
          <path d="M42.1973 117.61H46.5586V119.49H42.1973V124.432H40.1992V119.49H35.8379V117.61H40.1992V113.045H42.1973V117.61Z" fill="#E5E5E5"/>
          <path d="M77.1973 12.6104H81.5586V14.4902H77.1973V19.4316H75.1992V14.4902H70.8379V12.6104H75.1992V8.04492H77.1973V12.6104Z" fill="#E5E5E5"/>
          <path d="M77.1973 47.6104H81.5586V49.4902H77.1973V54.4316H75.1992V49.4902H70.8379V47.6104H75.1992V43.0449H77.1973V47.6104Z" fill="#E5E5E5"/>
          <path d="M77.1973 82.6104H81.5586V84.4902H77.1973V89.4316H75.1992V84.4902H70.8379V82.6104H75.1992V78.0449H77.1973V82.6104Z" fill="#6246E5"/>
          <path d="M77.1973 117.61H81.5586V119.49H77.1973V124.432H75.1992V119.49H70.8379V117.61H75.1992V113.045H77.1973V117.61Z" fill="#E5E5E5"/>
          <path d="M77.1973 152.61H81.5586V154.49H77.1973V159.432H75.1992V154.49H70.8379V152.61H75.1992V148.045H77.1973V152.61Z" fill="#E5E5E5"/>
          <path d="M112.197 12.6104H116.559V14.4902H112.197V19.4316H110.199V14.4902H105.838V12.6104H110.199V8.04492H112.197V12.6104Z" fill="#E5E5E5"/>
          <path d="M112.197 47.6104H116.559V49.4902H112.197V54.4316H110.199V49.4902H105.838V47.6104H110.199V43.0449H112.197V47.6104Z" fill="#E5E5E5"/>
          <path d="M112.197 82.6104H116.559V84.4902H112.197V89.4316H110.199V84.4902H105.838V82.6104H110.199V78.0449H112.197V82.6104Z" fill="#E5E5E5"/>
          <path d="M112.197 117.61H116.559V119.49H112.197V124.432H110.199V119.49H105.838V117.61H110.199V113.045H112.197V117.61Z" fill="#E5E5E5"/>
          <path d="M112.197 152.61H116.559V154.49H112.197V159.432H110.199V154.49H105.838V152.61H110.199V148.045H112.197V152.61Z" fill="#E5E5E5"/>
          <path d="M147.197 12.6104H151.559V14.4902H147.197V19.4316H145.199V14.4902H140.838V12.6104H145.199V8.04492H147.197V12.6104Z" fill="#FF7152"/>
          <path d="M147.197 47.6104H151.559V49.4902H147.197V54.4316H145.199V49.4902H140.838V47.6104H145.199V43.0449H147.197V47.6104Z" fill="#E5E5E5"/>
          <path d="M147.197 82.6104H151.559V84.4902H147.197V89.4316H145.199V84.4902H140.838V82.6104H145.199V78.0449H147.197V82.6104Z" fill="#E5E5E5"/>
          <path d="M147.197 117.61H151.559V119.49H147.197V124.432H145.199V119.49H140.838V117.61H145.199V113.045H147.197V117.61Z" fill="#E5E5E5"/>
          <path d="M147.197 152.61H151.559V154.49H147.197V159.432H145.199V154.49H140.838V152.61H145.199V148.045H147.197V152.61Z" fill="#E5E5E5"/>
          </svg>
          </div>

        </div>
        <div className="  flex w-full items-center -mt-75">
          <div className=" container bg-[url(./assets/bg_last.svg)] w-[1275px] h-[247px] mx-auto">
            <div className=" flex items-center  w-[630px] h-[70px]  bg-[#F6F8FA] mx-auto mt-38 flex justify-between">
              <input value="Email address" className='pl-7'/>
                <button className='bg-[#B89146] h-[70px] w-[140px] '>Subscribe</button>
            </div>

            <div className="container w-full  ">
              <div className="justify-items-center mx-auto pt-20">
                <h1 className='text-bush font-extrabold font-first text-[50px]'>Our Clients Say!</h1>
                <p className='text-center text-subPrimary'> Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor <br></br> ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed <br></br> rebum vero dolor duo. </p>
                <div className="flex pt-10 justify-items-center ">
                  <div className="z-40 border   border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]">
                    05
                  </div>
                  <div className="z-30 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]">
                    04
                  </div>
                  <div className="z-20 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]">
                    03
                  </div>
                  <div className="z-10  border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]">
                    02
                  </div>
                  <div className="z-0 border border-[#F0D097] border-[3.5px] rounded-full w-[70px] h-[70px]">
                    01
                  </div>
                </div>

                <div className=" flex gap-[10px] pt-20 gap-[25px] flex justify-items-center ">
                  <div onClick={handlePrev} className="cursor-pointer my-auto ">
        <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="70" height="70" rx="35" fill="#E49D42"/>
          <path d="M30.499 31.4971L26.5 35.4991L30.5 39.5001M39.5 35.5001H26.5" stroke="#F0F4FD" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Testimonial Cards */}
      <div className="flex gap-4">
        {testimonials.slice(startIndex, startIndex + 2).map((data, index) => (
          <Client_Card key={index} data={data} />
        ))}
      </div>

      {/* Right Arrow */}
      <div onClick={handleNext} className="cursor-pointer my-auto">
        <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="70.5" width="70" height="70" rx="35" transform="rotate(-180 70 70.5)" fill="#E49D42"/>
          <path d="M39.501 39.5029L43.5 35.5009L39.5 31.4999M30.5 35.4999H43.5" stroke="#F0F4FD" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> 
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
}
