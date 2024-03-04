import SelectDate from "../Components/SelectDate";
import UploadImage from "../Components/UploadImage";
import WebsiteFooter from "../Components/WebsiteFooter";
import WebsiteHeader from "../Components/WebsiteHeader";

const InputSizesExample = () => {
  return (
    <div>
      <WebsiteHeader />
      <div class="flex flex-col w-41  px-1 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          PUBLISH YOUR EVENT
        </div>

        <div class="p-6 mt-8">
          <form action="#">
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <p>Event Name</p>

                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="pseudo"
                  placeholder="Pseudo"
                />
              </div>
            </div>

            <div class="flex items-center gap-8">
              <p>Event Name</p>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Car</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Cycle</span>
              </label>
            </div>

            <div className="mt-5 md-20">
              <p>Choose Date</p>
              <SelectDate />
            </div>

            <label class="text-gray-700" for="time">
              <span class="ml-2 text-gray-700">Start Time</span>
              <input
                type="time"
                class="flex-1  px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </label>

            <label class="text-gray-700" for="time">
              <span class="ml-2 text-gray-700">End Time</span>
              <input
                type="time"
                class="flex-1  px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </label>

            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <p>Hosted by*</p>
                <input
                  type="text"
                  id="create-account-first-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                />
              </div>
              <div class=" relative ">
                <p>Volunteers needed ?</p>
                <input
                  type="text"
                  id="create-account-last-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <p>Where will your event take place ? *</p>

                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="pseudo"
                  placeholder="Pseudo"
                />
              </div>
            </div>

            <label class="text-gray-700" for="name">
              <p>Decription</p>

              <textarea
                class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>

            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <label class="text-gray-700" for="animals">
                  Event type
                  <select
                    id="animals"
                    class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="animals"
                  >
                    <option value="">Select an option</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                  </select>
                </label>
              </div>
              <div class=" relative ">
                <label class="text-gray-700" for="animals">
                  Event Category
                  <select
                    id="animals"
                    class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="animals"
                  >
                    <option value="">Select an option</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                  </select>
                </label>
              </div>
            </div>

            <div>
              <p>Event Images</p>
              <UploadImage />
            </div>

            <div class="flex items-center gap-8">
              <p>Tickets</p>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Paid</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Free</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Donation</span>
              </label>
            </div>

            <div class="flex flex-col mb-2">
              <h2>Publishing Detail</h2>
              <div class=" relative ">
                <p>Organizer page *</p>

                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="pseudo"
                  placeholder="Pseudo"
                />
              </div>
            </div>

            <div class="flex items-center gap-8">
              <p>Listing Type</p>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Private</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="vehicle"
                  class="w-5 h-5 text-red-600"
                />
                <span class="ml-2 text-gray-700">Public</span>
              </label>
            </div>

            <div class="flex w-full my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
};

export default InputSizesExample;
