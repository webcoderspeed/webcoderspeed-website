import { IPost } from '@/interfaces/post';
import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

const PostCard = ({
  title,
  description,
  author,
  createdAt,
  image,
  categories,
}: IPost) => {
  return (
    <figure className='rounded-lg shadow-sm md:flex relative max-w-5xl my-8 border-2'>
      <span className='absolute -top-8 -right-2 md:-left-8 md:-top-8 bg-violet-500 p-4 w-20 rounded-lg flex items-center justify-center flex-col text-white'>
        <p>{dayjs(createdAt).format('D')}</p>
        <p className='uppercase font-bold text-xl'>
          {dayjs(createdAt).format('MMM')}
        </p>
      </span>
      <Image
        className='mx-auto rounded-t-lg md:rounded-none md:rounded-l-lg object-cover max-h-96 w-full'
        src={image}
        alt={title}
        loading='lazy'
        width={800}
        height={800}
      />
      <div className='p-4 space-y-4'>
        <h3 className='text-gray-800 font-bold text-lg'>{title}</h3>
        <blockquote>
          <p className='text-md font-medium text-gray-600'>
            {description?.substring(0, 265) + '...'}
          </p>
        </blockquote>
        <div className='flex space-x-2'>
          {categories?.map((category) => (
            <button
              key={category}
              className={`rounded-md bg-violet-600 px-2 py-1 text-white uppercase text-xs`}
            >
              {category}
            </button>
          ))}
        </div>
        <figcaption className='font-medium flex justify-between'>
          <div className='flex items-center gap-1'>
            <Image
              className='rounded-lg object-cover h-10 w-10'
              src={author.avatar}
              alt={author.name}
              loading='lazy'
              width={800}
              height={60}
            />
            <div>
              <p className='text-base text-gray-600'>{author.name}</p>
              <p className='text-sm text-gray-800'>
                {dayjs(createdAt).format('MMMM D, YYYY')}
              </p>
            </div>
          </div>
          <button className='rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-800'>
            Read more
          </button>
        </figcaption>
      </div>
    </figure>
  );
};

export default PostCard;
