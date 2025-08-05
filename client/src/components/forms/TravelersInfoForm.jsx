export default function TravelersInfoForm({ goToNextStep }) {
  return (
    <form className="w-[805px] h-[1048px] bg-[#FFFFFF] absolute top-[100px] left-[82px]">
      <div className="w-full h[48px]">
        <h2>Traveller Details</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 0.5C8.74781 0.5 0 9.24781 0 20C0 30.7522 8.74781 39.5 19.5 39.5C30.2522 39.5 39 30.7522 39 20C39 9.24781 30.2522 0.5 19.5 0.5ZM14.7919 11.4519C15.9797 10.1928 17.6513 9.5 19.5 9.5C21.3487 9.5 23.0053 10.1975 24.1978 11.4631C25.4062 12.7456 25.9941 14.4687 25.8553 16.3212C25.5778 20 22.7278 23 19.5 23C16.2722 23 13.4166 20 13.1447 16.3203C13.0069 14.4528 13.5938 12.7241 14.7919 11.4519ZM19.5 36.5C17.2973 36.5014 15.1168 36.0605 13.0877 35.2034C11.0586 34.3464 9.22222 33.0906 7.6875 31.5106C8.56644 30.2571 9.68638 29.1914 10.9819 28.3756C13.3716 26.8438 16.3959 26 19.5 26C22.6041 26 25.6284 26.8438 28.0153 28.3756C29.3118 29.1911 30.4327 30.2569 31.3125 31.5106C29.7779 33.0908 27.9416 34.3468 25.9125 35.2038C23.8833 36.0609 21.7027 36.5017 19.5 36.5Z"
                fill="#ADF4F3"
              />
            </svg>
            <h2>Adults</h2>
          </div>
          <h2>0/1 added</h2>
        </div>
        <div className="w-[760px] h-[48px] bg-[#F5F5F5] mx-auto flex items-center pl-4">
          <p className="">
            Important: Enter name as mentioned on your passport or Government
            approved IDs.
          </p>
        </div>
        <div className="border border-subPrimary h-[699px] w-[761px]">
          <label class="inline-flex items-center border-b w-[760px] h-[50px]">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
            />
            <span class="ml-2 text-gray-700">Adult (1)</span>
          </label>
          <label class="block w-[224px] h-[73px]">
            <span class="text-gray-700">Title</span>
            <select
              required
              class="mt-2  w-[224px] h-[48px] border border-gray-300 bg-white text-gray-700 invalid:border-red-500"
            >
              <option value="" selected>
                Select an option
              </option>
              <option value="">Mr</option>
              <option value="">Mrs</option>
            </select>
          </label>

          <div className="inline-flex">
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-col">
                <label
                  for="firstName"
                  class="mb-1 text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  class="w-48  px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="middleName"
                  class="mb-1 text-sm font-medium text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Doe"
                  class="w-48 px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="lastName"
                  class="mb-1 text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Smith"
                  class="w-48 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={goToNextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </form>
  );
}
