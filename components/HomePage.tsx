const HomePage = () => {
  return (

    <section className="relative min-h-[300px] flex flex-col items-center justify-center text-center px-4 sm:px-6  text-gray-900 dark:text-gray-100">

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
        برکه
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mb-6 sm:mb-8">
        محلی برای معرفی بهترین ها در شهر زنجان
      </p>

      <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white rounded-xl text-base sm:text-lg hover:bg-primary-700 transition dark:bg-primary-500 dark:hover:bg-primary-600">
        شروع جستجو
      </button>
      <div className="w-full h-40 bg-primary-500 rounded-md my-20">   </div>

    </section>

  );
};

export default HomePage;
