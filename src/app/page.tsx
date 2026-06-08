import Image from "next/image";

import Img from './../../public/image.png'
import AppleStore from './../../public/apple-store.png'

export default function Home() {
  return (
    <main className="font-sans max-w-7xl mx-auto w-11/12 py-2 md:py-8">
      <div className="grid gap-4 md:grid-cols-2 items-center">
        <div>
          <h1 className="font-semibold md:text-2xl">Track what matters with Gate Drop</h1>
          <a href="https://apps.apple.com/us/app/gate-drop/id6776253294">
            <Image src={AppleStore} alt="Apple store"
              className="-ml-5 w-1/2"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <Image src={Img} alt="ActionStack screenshot"
            className="w-1/2 md:w-1/2"
          />
        </div>
      </div>
      <p className="mt-8">
        Keep your bikes and vehicles dialed in. Track maintenance, save service records, and stay on top of every repair from your phone.
      </p>
    </main>
  );
}
