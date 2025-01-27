import AddResume from '@/components/AddResume';
import React from 'react';

export default function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating your Resume</p>
      <div>
        <AddResume />
      </div>
    </div>
  );

};
