import Link from "next/link";

const WaitlistWelcomePage = () => {
  return (
    <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-85 transition duration-300 ease-in-out">
      <div className="flex flex-col items-center gap-4 p-4 lg:p-6 xl:p-8">
        <h1 className="text-2xl font-bold text-white">You are on waitist</h1>
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg text-white">Please contact </div>
          <Link
            href="mailto:datlex.work@gmail.com"
            className="text-sky-700 hover:text-sky-500 hover:underline"
          >
            datlex.work@gmail.com
          </Link>
        </div>
        <p className="text-2xl font-bold text-red-500">To start onboarding !</p>
      </div>
    </div>
  );
};

export default WaitlistWelcomePage;
