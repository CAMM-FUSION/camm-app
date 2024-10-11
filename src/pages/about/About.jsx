import React from 'react';
import heroimg from "../../assets/team/books1.jpg"
import { PageTitle } from '../../components/PageTitle';
import { TeamCard } from "../../components/TeamCard";
import calvin from '../../assets/team/calvin.jpeg';
import Abigail from '../../assets/team/Abigail.jpeg';
import mandy from '../../assets/team/mandy.jpeg';
import mabel from '../../assets/team/mabel.jpeg';
import regina from '../../assets/team/regina.jpeg';


const teamMembers = [
  {
    name: 'Calvin',
    role: 'Back-end  ',
    description: 'Bring 5years of industry expertise in sales and entreprenuership',
    src: calvin 
  },
  {
    name: 'Abigail',
    role: 'Front-end ',
    description: 'Bring 5years of industry expertise in sales and entreprenuership',
    src:Abigail
  },
  {
    name: 'Mandy',
    role: 'Back-end ',
    description: 'Bring 5years of industry expertise in sales and entreprenuership',
    src: mandy,
  },
  {
    name: 'Mabel',
    role: 'Front-end',
    description: 'Bring 5years of industry expertise in sales and entreprenuership',
    src:mabel
  },
  {
    name: 'Regina',
    role: 'Back-end',
    description: 'Bring 5years of industry expertise in sales and entreprenuership',
    src: regina
  },
]

const About = () => {
  return (
    <>
      <section className="py-16 ml-[10%] bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content on the left */}
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              {/* <PageTitle pageName="About Us" /> */}
              { <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">About Us</h2> }
              <>
                 <p className="text-gray-600 mb-4">
            “CAMM FUSION is your all-in-one library management solution

It’s designed to streamline cataloging, borrowing, and organizing resources with ease.”

Whether you’re managing a personal collection or a large institution, CAMM FUSION fits your needs.”

The app simplifies every step of the library management process.

With a user-friendly interface and powerful features, it helps keep your library running smoothly.
              </p>
              <p className="text-gray-600 mb-6">
            <p className="text-gray-600 mb-6">
            { <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Our Mission</h2> }
            Our mission is to provide free and equal access to information, promote literacy, 
              and create a welcoming space for community engagement. We believe in the power of 
              knowledge to enrich lives, inspire creativity, and build stronger communities.
            </p>
            </p>  
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Discover More
              </button>
          </>
              {/* <section  className='container mx-auto '>
            <HeaderHero pageText="Our Team"/>
            </section> */}
            </div>

            {/* Image on the right */}
            <div className="md:w-1/2">
              <img
                src={heroimg}

                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-10 text-center'>
        <PageTitle pageName="Our Noble Team" />
        <div className='flex flex-row flex-wrap gap-10 text-center mx-auto max-w-4xl'>
        <p className="text-gray-600 mb-6">
            <p className="text-gray-600 mb-6">
            Our mission is to provide free and equal access to information, promote literacy, 
              and create a welcoming space for community engagement. We believe in the power of 
              knowledge to enrich lives, inspire creativity, and build stronger communities.
            </p>
            </p> 
          {
            teamMembers.map((member, ) => {
              // console.log("member-->", member)
              return <TeamCard
                // key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.src}
              />
            }

            )
          }

        </div>
        {/* <div>
          <TeamCard image='' name="mabel" />
          <TeamCard image='/src\assets\images' name="mabel" />
          <TeamCard image='/src\assets\images' name="mabel" />
        </div> */}
      </section>
    </>
  );
};

export default About;