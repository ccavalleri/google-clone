import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim}`);
  }

  return (
    <form className="flex flex-col items-center mt-40">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        objectFit="cover"
        width="300"
        height="100"
      />
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-2 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 text-gray-500 mr-3" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        {' '}
        <button className="btn" onClick={search}>
          Google Search
        </button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </form>
  );
}
