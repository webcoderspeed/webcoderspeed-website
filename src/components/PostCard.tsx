import { IPost } from '@/interfaces/post';
import Image from 'next/image';
import React from 'react';

const PostCard = ({ title, description, author, createdAt, image }: IPost) => {
  return (
    <div className='flex flex-col sm:max-h-80 sm:flex-row bg-white shadow-sm rounded-sm overflow-hidden'>
      {/* Image on the left side */}
      <div className='relative w-full sm:w-1/2'>
        <Image
          className='object-cover w-full h-full'
          src={image}
          alt={title}
          width={600}
          height={400}
        />
        <div className='absolute inset-0 bg-black opacity-40 hover:opacity-20 transition duration-200'></div>
      </div>
      <div className='flex flex-col sm:w-1/2 p-4'>
        {/* Title */}
        <h2 className='text-3xl font-bold mb-2 text-gray-900'>{title}</h2>
        {/* Short description */}
        <p className='text-gray-700 mb-4'>{description}</p>
        {/* Author details */}
        <div className='flex items-center mb-4'>
          <Image
            className='w-12 h-12 rounded-full mr-2'
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
          />
          <div>
            <p className='text-gray-900 font-bold'>{author.name}</p>
            <p className='text-gray-600'>{createdAt}</p>
          </div>
        </div>
        {/* Read more button */}
        <a
          href='#'
          className='bg-blue-500 text-white py-2 px-4 rounded-sm inline-block text-center hover:bg-blue-600 transition duration-200'
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default PostCard;
