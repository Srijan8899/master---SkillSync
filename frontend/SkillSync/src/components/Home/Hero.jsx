import React from 'react'
import heroImg from '../../imageAssets/newHero.svg';
import SkillSearchBar from './SkillSearchBar';

const Hero = () => {
  return (
    <div className="flex justify-center relative" id="herosec">
      <div
        className="bg-no-repeat bg-cover bg-center h-[400px] sm:h-[600px] lg:h-[600px] xl:h-[600px] w-fit sm:w-4/5 flex flex-col justify-end relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* grey overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>

        {/* hero-main-text  */}
        <div className="mx-4 sm:mx-16 mb-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
            Learn from the best, teach the world
          </h1>
          <h2 className="text-white text-sm sm:text-base">
            SkillSync is an online learning platform offering courses taught by
            world-renowned experts. Explore a wide range of skills and get
            started today.
          </h2>
        </div>

        {/* Explore input  */}
        <div className="mx-4 sm:mx-16 mb-6 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 relative z-10">
          <SkillSearchBar />
        </div>
      </div>
    </div>
  )
}

export default Hero