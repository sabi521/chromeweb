import React from 'react'

const About = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">About Us
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                    we install and fit all types of doors and windows. we are  are private fitter expert in fitting and installation of all types of doors and windows . 
                    we provide services of replacement of doors and windows including lock repairs and replacement. 
                    we are specializing in installation of double  glazing and uPVC products, including windows, doors,
                     and roofline solutions. we  offer a variety of window styles such as casement, sash, tilt and turn, bay, and French window
                </p>

               
            </div>

            <div className="relative">
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
            </div>

        </div>
    </div>
</section>
  )
}

export default About
