import React from 'react';
import Marquee from 'react-fast-marquee';
 export const MovingCardLeft = () => {
  const testimonials = [
    {
      quote: "A gripping tale of courage and redemption that will leave you breathless. A triumph of storytelling.",
      name: "Khaled Hosseini",
      title: "The Kite Runner",
    },
    {
      quote: "Brilliantly written and deeply moving. This book will stay with you long after you've finished it.",
      name: "Toni Morrison",
      title: "Beloved",
    },
    {
      quote: "An epic saga of love, war, and destiny. A timeless classic that deserves a place on every bookshelf.",
      name: "Homer",
      title: "The Iliad",
    },
    {
      quote: "A rich tapestry of imagination and adventure. Prepare to be transported to a world beyond your wildest dreams.",
      name: "C.S. Lewis",
      title: "The Chronicles of Narnia",
    },
    {
      quote: "A thought-provoking exploration of society and humanity. A true literary gem.",
      name: "George Orwell",
      title: "1984",
    },
  ];

  return (
   
    <Marquee gradient="true" gradientColor='black' className=''>
      {testimonials.map((testimonial, index) => (
        <div key={index} className='text-white flex flex-col justify-between  h-32 p-2 px-4 max-w-sm rounded-lg bg-white/5 border-white/20 border mx-4'>
          <p>{testimonial.quote}</p>
          <p>- {testimonial.name}, {testimonial.title}</p>
        </div>
      ))}
    </Marquee>

  );
};


