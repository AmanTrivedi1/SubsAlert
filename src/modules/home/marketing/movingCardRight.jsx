import React from 'react';
import Marquee from 'react-fast-marquee';

export function MovingcardRight() {
  const testimonials = [
    {
      quote: "Absolutely captivating from start to finish. I was drawn into the story and couldn't put it down.",
      name: "Emily Brontë",
      title: "Wuthering Heights",
    },
    {
      quote: "An insightful and thought-provoking journey through the human psyche. A must-read for anyone interested in philosophy.",
      name: "Fyodor Dostoevsky",
      title: "Crime and Punishment",
    },
    {
      quote: "Exquisitely written, with characters that feel like old friends. A timeless classic that speaks to the heart.",
      name: "Leo Tolstoy",
      title: "Anna Karenina",
    },
    {
      quote: "A masterful blend of suspense and romance. Each page leaves you craving more. Truly unforgettable.",
      name: "Charlotte Brontë",
      title: "Jane Eyre",
    },
    {
      quote: "Immersive and enchanting, this tale whisks you away to another world. A literary gem that will stay with you long after the final chapter.",
      name: "J.R.R. Tolkien",
      title: "The Lord of the Rings",
    },
  ];

  return (
    <div className="mt-6">
      <Marquee  direction='right' gradient="true" gradientColor='black' className=''>
      {testimonials.map((testimonial, index) => (
        <div key={index} className='text-white flex flex-col justify-between  h-32 p-2 px-4 max-w-sm rounded-lg bg-white/5 border-white/20 border mx-4'>
          <p>{testimonial.quote}</p>
          <p>- {testimonial.name}, {testimonial.title}</p>
        </div>
      ))}
    </Marquee>
    </div>
  );
}
