import { assets } from "../assets/assets";
import Booking_Card from "../components/Booking_Card";
import Footer from "../components/Footer";
import GridLayout from "../components/GridLayout";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Booking_Page() {
  const onChange = (event) => {
    console.log("====================================");
    console.log(event);
    console.log("====================================");
  };

  const book_Section = [
    {
      logo: "../qatar.svg",
      svgtakeoff: "../",
      svglanding: " ",
      Depart: "Depart",
      Arrive: "Arrive",
      dateto: "12/03/2025",
      datefrom: "12/03/2025",
      timeto: "7:34pm",
      timefrom: "2:45pm",
      details: "Flight Details",
    },
    {
      logo: "../flydubai (2).svg",
      svgtakeoff: "../",
      svglanding: " ",
      Depart: "Depart",
      Arrive: "Arrive",
      dateto: "",
      datefrom: "",
      timeto: "",
      timefrom: "",
      details: "Depart",
    },
    {
      logo: "../emirates.svg",
      svgtakeoff: "../",
      svglanding: " ",
      Depart: "Depart",
      Arrive: "Arrive",
      dateto: "",
      datefrom: "",
      timeto: "",
      timefrom: "",
      details: "Flight Details",
    },
  ];

  return (
    <div>
      <Header />
      <div className=" w-full h-[300px] content-center pt-10 bg-[#1D636D] parent">
        <div className="w-[581px] h-[59px] rounded-tr-[50px] rounded-tl-[50px]  bg-[#FFFFFF] -mt-15 ml-9 opacity-70 flex space-x-3">
          <div className="p-5 text-black space-x-1.5">
            <svg
              className="w-5 h-4 inline-block "
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.63033 7.16889L4.57133 0.804091L6.30923 0.337891L12.5651 6.11589L17.3009 4.84689C17.6468 4.75428 18.0153 4.80285 18.3253 4.98193C18.6354 5.16101 18.8616 5.45592 18.9542 5.80179C19.0468 6.14766 18.9983 6.51615 18.8192 6.82621C18.6401 7.13626 18.3452 7.36248 17.9993 7.45509L4.52453 11.0641L3.82613 8.45589L4.04303 8.39739L6.26333 10.5979L3.89993 11.2315C3.70613 11.2835 3.50052 11.2692 3.31577 11.1909C3.13102 11.1126 2.97772 10.9749 2.88023 10.7995L0.519531 6.54609L1.82363 6.19689L4.04303 8.39739L8.63033 7.16799V7.16889ZM2.80013 13.8001H17.2001V15.6001H2.80013V13.8001Z"
                fill="#F0F4FD"
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
        <div className=" container flex items-center  mx-auto w-full relative">
          <div className="w-[1248px] h-[150px] t-[750] left-[82px] bg-[#F0F4FD] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] ">
            <form className="text-black space-x-4 pt-4 pl-5  flex items-center">
              <input
                type="radio"
                id="contactChoice1"
                name="flightType"
                value="oneWay"
              />
              <label for="contactChoice1">One way</label>
              <input
                type="radio"
                id="contactChoice2"
                name="flightType"
                value="roundTrip"
              />
              <label for="contactChoice2">Round way</label>
              <input
                type="radio"
                id="contactChoice3"
                name="flightType"
                value="multiCity"
              />
              <label for="contactChoice3">Multi city</label>
              <div className="w-[181px] h-[31px] flex  border rounded-lg">
                <img src={assets.vector_eco} className="p-1.5" alt="" />
                <select name="classType">
                  <option value="economy">Economy</option>
                  <option value="firstClass">First Class</option>
                  <option value="businessClass">Business Class</option>
                </select>
              </div>
            </form>
            <div className="grid grid-cols-5 h-[64px] gap- mx-5">
              {/* <div className="flex justify-between"> */}
              <div className="pl-4 pt-2">
                <div className="flex gap-2">
                  <img src={assets.flight_takeoff} />
                  <span className="text-black">FROM</span>
                </div>
              </div>

              <div className="mx-2">
                <img src={assets.direction} alt="" />
              </div>

              <div className="pl- pt-2">
                <div className="flex gap-2">
                  <img src={assets.flight_takeoff} />

                  <span className="text-black">To</span>
                </div>
              </div>
              {/* </div>/ */}
              {/* <div className="text-white pt-2 -ml-45">
                          <h1 className="flex gap-2">
                            <img src={assets.flight_takeoff} />
                            TO
                          </h1>
                        </div> */}
              <div className="text-black pt-2  mx- flex">
                <div className="flex-none pl-2 ">
                  <img src={assets.solar_calender} />
                </div>
                <h3 className="pl-2">
                  Departure
                  <h6 className="cursor-pointer hover:text-gray-300"></h6>
                </h3>
              </div>
              <div className="text-black pt-2 pl-15 -ml- flex">
                <div className="flex-none ">
                  <img src={assets.people} />
                </div>
                <h3 className="pl-2">
                  Traveler
                  <h6 className="cursor-pointer hover:text-gray-300"></h6>
                </h3>
              </div>

              {/* Search icon */}
              <div className="rounded-full h-[70px] w-[70px] bg-[#E49D42] items-center p-6 absolute right-0">
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
        </div>
      </div>

      <div className="bg-[#F0F4FD] space-x-8  p-10 mx-auto pt-7 w-full ">
        <div className="container w-[2142.47px] h-[1142.09] rotate-[-16.39degs] relative">
          <img src={assets.bookingBackground} />
          <div className="absolute top-[0px] flex space-x-7">
            <div className="w-[375px] h-[1064px] left-[83px]  -top-[0px] px-6 py-6 container space-y-8 pt-8 pb-8 bg-white">
              <div className="w-[300px] h-[324px] bg-white mx-auto border">
                <div class=" p-7 space-y-5 ">
                  <div>Sort By</div>
                  <div className="pt-2">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:fire-bush-400 dark:focus:fire-bush-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-radio"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Recommended
                    </label>
                  </div>
                  <div>
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-2-radio"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cheapest
                    </label>
                  </div>
                  <div class=" ">
                    <input
                      checked
                      id="inline-checked-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-checked-radio"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Fastest
                    </label>
                  </div>
                  <div className="w-[251px] h-[60px] bg-[#B89146] flex justify-center text-white ">
                    <button className="flex flex justify items-center gap-2">
                      FARE CALENDER
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 3.9001H20.1C20.3387 3.9001 20.5676 3.99492 20.7364 4.1637C20.9052 4.33248 21 4.5614 21 4.8001V19.2001C21 19.4388 20.9052 19.6677 20.7364 19.8365C20.5676 20.0053 20.3387 20.1001 20.1 20.1001H3.9C3.66131 20.1001 3.43239 20.0053 3.2636 19.8365C3.09482 19.6677 3 19.4388 3 19.2001V4.8001C3 4.5614 3.09482 4.33248 3.2636 4.1637C3.43239 3.99492 3.66131 3.9001 3.9 3.9001H7.5V2.1001H9.3V3.9001H14.7V2.1001H16.5V3.9001ZM4.8 9.3001V18.3001H19.2V9.3001H4.8ZM6.6 11.1001H8.4V12.9001H6.6V11.1001ZM11.1 11.1001H12.9V12.9001H11.1V11.1001ZM15.6 11.1001H17.4V12.9001H15.6V11.1001Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[326px] bg-white border mx-auto">
                <div className="container p-7">
                  <p>Essentials</p>
                </div>
                <div className=" mx-auto flex-col flex items-center space-y-2">
                  <select className=" border w-[240px] h-[60px]">
                    <option>Stops</option>
                  </select>
                  <select className="border w-[240px] h-[60px]">
                    <option>Airlines</option>
                  </select>
                  <select className="border w-[240px] h-[60px]">
                    <option>Baggages</option>
                  </select>
                </div>
              </div>
              <div className="w-[300px] h-[284px] bg-white mx-auto border">
                <div className="p-7 flex justify-between">
                  Time
                  <h6 className="text-sm">Reset</h6>
                </div>
                <div className="flex justify-center">
                  <div className="w-[262.3px] h-[31.99px] rounded-4xl bg-[#EAECF0] flex ">
                    <button className="bg-[#F0F4FD] w-[131.15px] h-[31.99px] rounded-4xl">
                      Departure
                    </button>
                    <button className="bg-[#D3FAF8] w-[131.15px] h-[31.99px] rounded-4xl">
                      Arrival
                    </button>
                  </div>
                </div>
                <div className="pt-4 flex p-7">From Lagos</div>
                <div className="w-[234px] h-[8px] mx-auto">
                  <Slider />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-[100px] bg-red-500"></div>
              <div className="w-full  border-[1px]">
                <GridLayout />
              </div>
              <div className="flex  w-[846px] h-[54px] border-b">
                <div className="flex space-x-5 ">
                  <div class="flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Refundable
                    </label>
                  </div>
                  <div class="flex items-center ">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Non Refundable
                    </label>
                  </div>
                </div>
              </div>

              {book_Section.map((data, index) => {
                return <Booking_Card key={index} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] content-buttom bg-[#F6F8FA] pt-20">
        <div className=" container flex items-center  mx-auto ">
          <div className=" bg-[url(./assets/bg_last.svg)] w-full h-[247px]"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
