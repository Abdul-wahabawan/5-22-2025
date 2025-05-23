'use client';

import Image from 'next/image';
import hero1 from './img/hero-img.jpg';

const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="#FACC15" 
    stroke="#FACC15" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const logoUrls = [
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d11167e2286ebbed16e48_client-1.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1116c8e2eafbfd177494_client-2.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d111607a0c9b277ebd41c_client-3.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d111681f8d429f5a037f3_client-4.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1115e481ef1deccd48bb_client-8.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1116b03c41aaaab79d06_client-7.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d11167e2286ebbed16e48_client-1.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1116c8e2eafbfd177494_client-2.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d111607a0c9b277ebd41c_client-3.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d111681f8d429f5a037f3_client-4.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1115e481ef1deccd48bb_client-8.svg',
  'https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654d1116b03c41aaaab79d06_client-7.svg',
];


function UserTestimonial() {
  return (
    // hero-start

    <div className="flex items-center p-3 rounded-lg flex-col md:flex-row lg:flex-row xl:flex-row ">
      {/* User Profile Images */}
      <div className="flex -space-x-3 mr-3">
        <img 
          src="https://randomuser.me/api/portraits/women/65.jpg" 
          alt="User profile" 
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="User profile" 
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
        <img 
          src="https://randomuser.me/api/portraits/men/47.jpg" 
          alt="User profile" 
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
        <img 
          src="https://randomuser.me/api/portraits/women/32.jpg" 
          alt="User profile" 
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      </div>

      <div className="flex flex-col">
        {/* Star Rating */}
        <div className="rating flex items-center space-x-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        {/* Text */}
        <div className="text-gray-500 text-sm font-medium">
          Trusted by 1 Million users
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
        <div className='flex flex-col items-center'>

        {/* // hero-start */}

        <div
          class="main-hero p-5 md:p-0 lg:pb-0 md:pt-10 lg:pt-20 lx:pt-20 mb-0 h-[600px] md:h-[1050px] lg:h-[1050px] lx:h-[1050px] mx-auto mr-7 ml-7 max-w-[1800px] mt-0 border-2 rounded-[2rem] overflow-hidden bg-no-repeat object-cover bg-bottom bg-left text-center flex flex-col items-center justify-center"
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/654ceda5362fc31b3855a77d_home-hero-p-2000.webp')",
          }} >
            <button class='px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-2xl border border-gray-200 mb-0 md:mb-5 lg:mb-5 xl:mb-5'>New Version 3.0</button>
            <h2 class=" text-black text-3xl md:text-7xl lg:text-7xl xl:text-7xl px-4 py-2">Your Health Center. <br/> All In One App.</h2>
            <p class="text-xl md:text-2xl  text-[#85898F] text-center w-[330px] md:w-[500px]">Your Journey to Optimal Living Starts Here: Explore Our Integrated Health Hub.</p>
            <div class="buttons flex flex-col items-center mt-8">
            <div class="flex gap-4">
            <button class="px-6 py-3 bg-black text-white text-sm rounded-3xl hover:bg-gray-400 transition-colors">Get Started</button>
            <button class="px-6 py-3 bg-white text-black text-sm rounded-3xl hover:bg-gray-50 transition-colors">Features
            </button>
            </div>
            <UserTestimonial />
            
            <div class=" mt-5 w-[300px] h-[420] md:w-[1300px] md:h-[420] lg:w-[1300px] lg:h-[420] xl:w-[1300px] xl:h-[420] rounded-xl flex justify-center  mb-0 md:-mb-[87px]"> 
              <Image src={hero1} alt="Teamwork" classe="object-cover flex   " />
            </div>
          </div>      
        </div>
            {/* // hero-end */}

        <div className="relative overflow-hidden bg-white py-16 w-full max-w-[1300px] mx-auto">
          <div className="scroll-track flex gap-16 animate-scrollLeft items-center">
            {[...logoUrls, ...logoUrls].map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Logo ${index + 1}`}
                className="h-7 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
                {/* // Features-start */}


   <div className="main-Features">
      <div className="Features-data flex flex-col items-center justify-center text-center">
        <button className="text-black border-2 px-2 w-20 py-0.5 text-sm rounded-3xl bg-gray-100 border-gray-200 m-4 lg:m-7 xl:m-7 md:m-7 ">
          Features
        </button>
        <h2 className="text-black text-4xl md:text-6xl lg:text-6xl xl:text-6xl w-[270px] md:w-full  lg:w-full xl:w-full ">
          Precision for Healthy Living
        </h2>
        <p class="text-gray-400 text-xl w-120 md:w-[620px] m-4 lg:m-7 xl:m-7 md:m-7 ">Explore our app's precision features. From sleep to mindfulness, experience comprehensive well-being at its finest.</p>
      </div>
      <div className="Features-boxes flex flex-col items-center">
        <div className="Features-box flex flex-col md:flex-row lg:flex-row xl:md:flex-row justify-center gap-7">
          <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  ">
            <img
              src="https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548b29c25f97ae612531edc_features-02-p-500.webp"
              className="w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  object-cover "
              alt=""
            />
          </div>
          <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  p-10 flex flex-col justify-between bg-[#FBFAF9] border-[#EBEAE9]">
            <h2 className="text-black text-3xl w-10">Sleep Tracking</h2>
            <p className=" text-gray-500  ">
              Unlock deep insights into your sleep patterns, optimize rest, and wake
              up revitalized every morning.
            </p>
            <a href="#" className="underline text-black">
              More Information
            </a>
          </div>
          <div className="Features-box  Features-box rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  ">
            <img 
              src="https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548b29c1bce5d5e4df2a81d_features-04-p-500.webp"
              className="imgbox"
              alt=""
            />
          </div>
          <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  p-10 flex flex-col justify-between bg-[#18212d] border-[#EBEAE9]">
                    <h2 class="text-3xl w-10 text-white">Activity Tracking</h2>
            <p class=" text-gray-100  ">Seamlessly monitor your activity, set goals, and achieve new heights with personalized tracking and insights.</p>
            <a href="#"class='underline text-white'>More Information</a>
          </div>
        </div>
      </div>

        <div className="Features-data flex flex-col items-center justify-center text-center">  
      </div>
      <div className="Features-boxes flex flex-col items-center">
        <div className="Features-box flex flex-col md:flex-row lg:flex-row xl:md:flex-row justify-center gap-7 mt-10">
        
          <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  p-10 flex flex-col justify-between bg-[#6B818C] border-[#EBEAE9] text-white" >
            <h2 className="text-3xl w-10 text-white">Mindfulness Training</h2>
            <p className=" text-gray-200 ">
              Elevate your mind with guided meditation sessions, fostering tranquility and focus for a balanced life.

            </p>
            <a href="#" className="underline">
              More Information
            </a>
          </div>
          <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  ">
            <img
              src="https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548b2ddd619ee53a9375e4c_features-07-p-500.webp"
              className="w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  object-cover "
              alt=""
            />
          </div>
          
          <div className="Features-box Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px] p-10 flex flex-col justify-between bg-[#FBFAF9] border-[#EBEAE9]">
          <h2 class="text-black text-3xl w-10">Health Benefits </h2>
            <p class=" text-gray-500  ">Explore personalized insights, tips, and trends, unlocking the path to holistic well-being and optimal health.</p>
            <a href="#"class='text-black underline'>More Information</a>
          </div>

          <div className="Features-box  Features-box rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[428px] lg:w-[322px] lg:h-[428px] xl:w-[322px] xl:h-[428px]  ">
            <img 
              src="https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548b29c90524ea02e960626_features-06-p-500.webp"
              className="imgbox"
              alt=""
            />
          </div>
        </div>
        
      </div>   
    </div>
                {/* // Features-end */}
              <div class="Features-data flex flex-col items-start justify-evenly  md:flex-row m-15 md:m-10 md:mt-20 p-12 md:p-0 lg:p-0 lx:p-0">
            <div class="Features-data1 " >
            <button class="text-black bg-gray-200 py-0.5 px-2 border-2 rounded-3xl w-28 mb-4 sm:mt-10 md:mt-0">Our Mission</button>
            <p  class="text-black text-4xl md:text-5xl w-[300px] md:w-[500px]">  Empowering Wellness Journeys Daily
          </p>
          </div>
            <div class="Features-data2 w-[315px] md:w-[600px]">
              <p class="text-black text-xl mt-5 ">Our mission is to inspire healthier, happier lives by providing innovative tools and insights that empower individuals to take charge of their well-being.</p>
              <p class="text-xl text-gray-500 mt-5 w-[315px] md:w-[600px]">We believe in the transformative power of personalized health experiences, guiding each person on a unique journey toward optimal living. Through cutting-edge technology and a commitment to user-centric design, we aim to make wellness accessible, enjoyable, and sustainable.</p>
              <p class="text-xl text-gray-500 mt-5 w-[315px] md:w-[600px]">Join us in reshaping the narrative of health, where every individual has the knowledge and support to thrive. Together, let's redefine well-being and create a world where everyone can live their best life.</p>
          </div>
          </div>
            {/* // box-end */}

             <div className="container mx-auto px-4 py-8">
  <div className="flex justify-center gap-6 lg:gap-10 flex-col lg:flex-row items-center lg:items-start">
    {/* Testimonial Section */}
    <div
      className="w-full max-w-[581px] h-[500px] lg:h-[620px] rounded-3xl bg-cover bg-center bg-no-repeat flex items-end lg:items-end justify-center lg:justify-start p-4 lg:pt-80 lg:pl-10 lg:pb-10"
      style={{
        backgroundImage:
          'url("https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c4a99d6bcea25755f4b7_home-process-p-1080.webp")'
      }}
    >
      <div className="border-2 border-white/20 h-auto lg:h-[240px] w-full max-w-[500px] rounded-3xl p-6 lg:p-3 backdrop-blur-xl bg-white/10">
        <p className="text-white text-2xl lg:text-3xl font-serif mb-2">,,</p>
        <h2 className="text-white text-xl lg:text-3xl leading-tight mb-4">
          Halsa guides my well-being. A game-changer in my daily life.
        </h2>
        <div className="flex items-center gap-3 pt-3">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc00f70c899737c86c_person-06.webp"
              className="w-12 h-12 lg:w-[50px] lg:h-[50px] border-2 border-white rounded-full object-cover"
              alt="Emma Thompson"
            />
          </div>
          <div className="pl-3">
            <div className="text-yellow-400 text-sm lg:text-base mb-1">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-white text-sm lg:text-base font-medium">
              Emma Thompson
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Steps Section */}
    <div className="w-full max-w-[600px] border-2 border-gray-200 rounded-3xl bg-[#FBFAF9] overflow-hidden">
      <div className="h-[500px] lg:h-[600px] overflow-y-scroll p-6 lg:p-16 lg:pt-20">
        <button className="text-black border-2 text-sm px-3 py-1.5 bg-white border-gray-100 rounded-2xl font-medium">
          Our Process
        </button>
        <h2 className="text-3xl lg:text-6xl text-[#18212D] mt-4 lg:mt-3 leading-tight">
          5 Easy Steps <br className="hidden lg:block" />
          <span className="lg:hidden"> </span>To Get Started
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl mt-4 lg:mt-3 leading-relaxed">
          Simple guide for a transformative journey — follow 5 easy steps to
          begin.
        </p>
        {/* Step 1 */}
        <div className="bg-white border-2 border-gray-200 p-6 lg:p-10 rounded-3xl mt-6 lg:mt-10">
          <button className="text-black border-2 text-sm px-3 py-1.5 bg-white border-gray-100 rounded-2xl font-medium">
            Step 1
          </button>
          <h3 className="text-2xl lg:text-3xl text-[#18212D] mt-3 ">
            Download the App
          </h3>
          <p className="text-lg lg:text-xl mt-3 text-gray-500 leading-relaxed">
            Begin your wellness journey by downloading our app from your
            device's app store. Install it and prepare for a transformative
            experience.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-white border-2 border-gray-200 p-6 lg:p-10 rounded-3xl mt-4 lg:mt-5">
          <button className="text-black border-2 text-sm px-3 py-1.5 bg-[#FBFAF9] border-gray-100 rounded-2xl font-medium">
            Step 2
          </button>
          <h3 className="text-2xl lg:text-3xl text-[#18212D] mt-3 ">
            Create Your Profile
          </h3>
          <p className="text-lg lg:text-xl mt-3 text-gray-500 leading-relaxed">
            Personalize your experience by creating a profile. Input essential
            details, and let us tailor the app to your unique well-being goals.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-white border-2 border-gray-200 p-6 lg:p-10 rounded-3xl mt-4 lg:mt-5">
          <button className="text-black border-2 text-sm px-3 py-1.5 bg-[#FBFAF9] border-gray-100 rounded-2xl font-medium">
            Step 3
          </button>
          <h3 className="text-2xl lg:text-3xl text-[#18212D] mt-3 ">
            Set Personal Goals
          </h3>
          <p className="text-lg lg:text-xl mt-3 text-gray-500 leading-relaxed">
            Establish personal goals for sleep, activity, and mindfulness.
            Define the milestones that will guide your journey toward a
            healthier and happier you.
          </p>
        </div>
        {/* Step 4 */}
        <div className="bg-white border-2 border-gray-200 p-6 lg:p-10 rounded-3xl mt-4 lg:mt-5">
          <button className="text-black border-2 text-sm px-3 py-1.5 bg-[#FBFAF9] border-gray-100 rounded-2xl font-medium">
            Step 4
          </button>
          <h3 className="text-2xl lg:text-3xl text-[#18212D] mt-3 ">
            Track, Analyze, Thrive
          </h3>
          <p className="text-lg lg:text-xl mt-3 text-gray-500 leading-relaxed">
            Start tracking your daily habits. Analyze the insights our app
            provides, and use them to make informed decisions as you embark on
            the path to thriving well-being.
          </p>
        </div>
        {/* Step 5 */}
        <div className="bg-white border-2 border-gray-200 p-6 lg:p-10 rounded-3xl mt-4 lg:mt-5 mb-6 lg:mb-10">
          <button className="text-black border-2 text-sm px-3 py-1.5 bg-[#FBFAF9] border-gray-100 rounded-2xl font-medium">
            Step 5
          </button>
          <h3 className="text-2xl lg:text-3xl text-[#18212D] mt-3 ">
            Join the Community
          </h3>
          <p className="text-lg lg:text-xl mt-3 text-gray-500 leading-relaxed">
            Connect, share, and thrive—join our vibrant wellness community.
            Experience the transformative power of collective well-being.
          </p>
          <button className="bg-[#FBFAF9] border-2 rounded-3xl px-4 py-2 mt-4 border-gray-100 hover:bg-gray-100 transition-colors font-medium">
            Go To Community
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


               {/* // card-start */}
              <div className="flex flex-wrap justify-center gap-5 px-4 mt-10 mb-10">
              {/* Box 1 */}
              <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[490px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] border-2 bg-amber-200 flex justify-center pt-60 md:pt-60"
               style={{
            backgroundImage:
            "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c2b4ab9a929dbb627183_testimonial-04-p-500.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
                 }}>
                <div className="backdrop-blur-xl w-[250px] h-[170px] p-5 rounded-3xl">
                  <p className="text-white text-2xl">A must-have for a healthier life!</p>
                  <div className="flex pt-3">
                    <div>
                      <img
                        src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc65fc72f3266d44c7_person-07.webp"
                        className="w-[50px] border-2 border-white rounded-3xl"
                        alt=""
                      />
                    </div>
                    <div className="pl-3">
                      <div className="star">⭐⭐⭐⭐⭐</div>
                      <div className="text-white">Ryan Carter</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Box 2 */}
              <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] p-10 flex flex-col justify-between bg-[#FBFAF9] border-[#EBEAE9]">
                <h2 className="text-black text-4xl md:text-5xl">1 Million</h2>
                <div>
                  <a href="#" className="text-black text-2xl">
                    Members
                  </a>
                  <p className="text-gray-500">
                    Join our thriving community of 1 million members prioritizing
                    well-being, making positive lifestyle changes together for a healthier
                    future.
                  </p>
                </div>
              </div>
              {/* Box 3 */}
              <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[490px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] border-2 bg-amber-200 flex justify-center pt-60 md:pt-60
              "
               style={{
             backgroundImage:
            "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c2b4a9c17755be31cd23_testimonial-02-p-500.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat' 
                }}>
                <div className="backdrop-blur-xl w-[250px] h-[180px] p-5 rounded-3xl">
                  <p className="text-white text-2xl">
                    Grateful for this transformative journey.
                  </p>
                  <div className="flex pt-3">
                    <div>
                      <img
                        src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc7f5c3d09102332a7_person-04.webp"
                        className="w-[50px] border-2 border-white rounded-3xl"
                        alt=""
                      />
                    </div>
                    <div className="pl-3">
                      <div className="star">⭐⭐⭐⭐⭐</div>
                      <div className="text-white">Emily Johnson</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Box 4 */}
              <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[390px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] border-2 bg-amber-200 flex justify-center pt-60 md:pt-60"
               style={{
              backgroundImage:
             "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c2b42b48519ef1c84654_testimonial-03-p-500.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat' 
                }}>
                <div className="backdrop-blur-xl w-[250px] h-[170px] p-5 rounded-3xl">
                  <p className="text-white text-2xl">Halsa Navigates My Holistic Health!</p>
                  <div className="flex pt-3">
                    <div>
                      <img
                        src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc987de3b9f90d3372_person-03.webp"
                        className="w-[50px] border-2 border-white rounded-3xl"
                        alt=""
                      />
                    </div>
                    <div className="pl-3">
                      <div className="star">⭐⭐⭐⭐⭐</div>
                      <div className="text-white">Alex Rodriguez</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 px-4 mt-10 mb-10">
  {/* Box 2 */}
            <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] p-10 flex flex-col justify-between bg-[#FBFAF9] border-[#EBEAE9]">
              <h2 className="text-black text-4xl md:text-5xl">100%</h2>
              <div>
                <a href="#" className="text-black text-2xl">
                  Better Sleep
                </a>
                <p className="text-gray-500">
                  Experience the joy of 100% good sleep with our app's personalized
                  insights, tools, and support for optimal restfulness nightly.
                </p>
              </div>
            </div>
            {/* Box 1 */}
            <div className="Features-box rounded-2xl overflow-hidden w-[362px] h-[400px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] border-2 bg-amber-200 flex justify-center pt-40 md:pt-60"
             style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c2b66be433c6e25d7c30_testimonial-07-p-500.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
                 }}>
              <div className="backdrop-blur-xl w-[250px] h-[190px] p-5 rounded-3xl">
                <p className="text-white text-2xl">
                  Halsa empowers my daily health decisions.
                </p>
                <div className="flex pt-3">
                  <div>
                    <img
                      src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc36c9b5bbbc207b65_person-01.webp"
                      className="w-[50px] border-2 border-white rounded-3xl"
                      alt=""
                    />
                  </div>
                  <div className="pl-3">
                    <div className="star">⭐⭐⭐⭐⭐</div>
                    <div className="text-white">Olivia Martinez</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div class="Features-box rounded-2xl overflow-hidden w-[362px] h-[430px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] border-2 bg-amber-200 flex justify-center pt-0 md:pt-55"
             style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/6548c2b5b187b544ad716a92_testimonial-06-p-500.webp')",
                      backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
                 }}>
              <div class="backdrop-blur-xl w-[250px] h-[220px] p-5 rounded-3xl mt-[200px] md:mt-[200px]">
                <p class="text-white text-2xl">
                  Customized insights, community support!.
                </p>
                <div class="flex pt-3">
                  <div>
                    <img
                      src="https://cdn.prod.website-files.com/6544a331d4f63b5b4c8cfa4f/654b81dc8517135d7acfb838_person-05.webp"
                      class="w-[50px] border-2 border-white rounded-3xl"
                      alt=""
                    />
                  </div>
                  <div class="pl-3">
                    <div class="star">⭐⭐⭐⭐⭐</div>
                    <div class="text-white">Christina Evans</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="Features-box border-2 rounded-2xl overflow-hidden w-[362px] h-[362px] md:w-[322px] md:h-[450px] lg:w-[322px] lg:h-[450px] xl:w-[322px] xl:h-[450px] p-10 flex flex-col justify-between bg-[#18212d] border-[#EBEAE9]">
              <div>
                <h2 className="text-4xl md:text-5xl text-white">Join Our Members</h2>
                <p className="text-gray-300">
                  Join our vibrant community — empowering members to prioritize well-being
                  and make positive, lasting lifestyle changes together.
                </p>
              </div>
              <a
                href="#"
                className="text-black text-xl border-2 px-[85px] py-[5px] md:px-[70px] md:py-2 bg-white rounded-3xl"
              >
                Join Now
              </a>
            </div>
          </div>



                {/* // card-end */}

               {/* // hero-start */}

    <div className='pb-20 rounded-3xl border-2'>
      <div
      class="main-hero text-center p-5 md:p-0 lg:pb-0 md:pt-10 lg:pt-20 lx:pt-20 mb-0 h-[600px] md:h-[1050px] lg:h-[1050px] lx:h-[1050px] mx-auto mr-7 ml-7 max-w-[1800px] mt-0 border-2 rounded-[2rem] overflow-hidden bg-no-repeat object-cover bg-bottom bg-left text-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/6544a331d4f63b5b4c8cfa4f/654ceda5362fc31b3855a77d_home-hero-p-2000.webp')",
      }}
    >
        <button class='px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded border border-gray-200 mb-0 md:mb-5 lg:mb-5 xl:mb-5'>Download Now</button>
            <h2 class=" text-black text-3xl md:text-7xl lg:text-7xl xl:text-7xl px-4 py-2">Your Health Center. <br/> All In One App.</h2>
            <p class="text-xl md:text-2xl  text-[#85898F] text-center w-[330px] md:w-[500px]">Your Journey to Optimal Living Starts Here: Explore Our Integrated Health Hub.</p>
      <div class="buttons flex flex-col items-center mt-8">
        <div class="flex gap-4">
          <button class="px-6 py-3 bg-black text-white text-sm rounded-3xl hover:bg-gray-400 transition-colors">Get Started</button>
          <button class="px-6 py-3 bg-white text-black text-sm rounded-3xl hover:bg-gray-50 transition-colors">Features
          </button>
        </div>
        
        <UserTestimonial />
        
        <div class="hero-img mt-5 w-[300px] h-[420] md:w-[1300px] md:h-[420] lg:w-[1300px] lg:h-[420] xl:w-[1300px] xl:h-[420]  flex justify-center    mb-0 md:-mb-[87px] "> 
          <Image src={hero1} alt="Teamwork" classe="object-cover  " />
        </div>
      </div>
            
    </div>
    </div>
        {/* // hero-end */}


    </div>
  );
}