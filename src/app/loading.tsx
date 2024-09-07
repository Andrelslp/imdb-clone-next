import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image src='spinner.svg' alt='loading...' width={208} height={208} />
    </div>
  );
}