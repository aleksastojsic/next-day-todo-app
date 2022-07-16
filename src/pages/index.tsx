import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ThinBackend } from 'thin-backend-react';

const Home: NextPage = () => {
  return (
    <ThinBackend>
      <Head>
        <title>Next ToDo App</title>
        <meta name='description' content='Create ToDo list and manage it' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-screen h-screen flex flex-col justify-center items-center p-4'>
        <h2 className='text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700'>
          <span className='text-indigo-300'>Next</span> Day
        </h2>
        <p className='text-2xl text-gray-700'>
          Crate List of Tasks and Get Stuff Done
        </p>
        <div className='grid grid-cols-1 grid-rows-3 lg:grid-rows-1 md:grid-rows-1 lg:grid-cols-3 md:grid-cols-3 gap-3 mt-3 pt-3 w-full lg:w-2/3 md:w-full'>
          <div className='hover:scale-105 duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6'>
            <h2 className='text-lg text-gray-700 font-semibold'>ToDo List</h2>
            <p className='text-sm text-gray-600'>
              Create a list of tasks for the day and get them done. You can add
              tasks, delete tasks, and mark tasks as done.
            </p>
            <a
              className='text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3'
              href='https://nextjs.org/'
              target='_blank'
              rel='noreferrer'
            >
              Read about making good habbits
            </a>
          </div>
          <div className='hover:scale-105 duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6'>
            <h2 className='text-lg text-gray-700 font-semibold'>Pomodoro</h2>
            <p className='text-sm text-gray-600'>
              A simple pomodoro teqnique used on every task in the List. Great
              for getting things done. Manage your time better.
            </p>
            <a
              className='text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3'
              href='https://www.typescriptlang.org/'
              target='_blank'
              rel='noreferrer'
            >
              Read about Pomodoro technique
            </a>
          </div>
          <div className='flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6'>
            <h2 className='text-lg text-gray-700 font-semibold'>
              Start Your Day Here
            </h2>
            <p className='text-sm text-gray-600'>
              Sign In to your account or create a new one.
            </p>
            <Link href='/todos'>
              <button className='bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full ml-2 mt-3'>
                Start Next Day
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ThinBackend>
  );
};

export default Home;
