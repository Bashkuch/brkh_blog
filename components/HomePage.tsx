const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">

      {/* Background behind content (scrolls normally) */}
      <div
        className="absolute top-0 left-0 right-0 w-full h-full z-[-1] bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/static/images/zanjan-bg.png')" }}
      />


      {/* Page Content */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4">برکه</h1>
      <p className="text-xl text-gray-700 mb-6">
        راهنمای جامع و دقیق بهترین مکان‌های دیدنی، تاریخی، فرهنگی و تفریحی شهر زنجان
      </p>

      <div className="max-w-3xl text-right text-gray-800 leading-8 space-y-4">
        <p>
          وب‌سایت <strong>برکه</strong> به معرفی کامل و جامع جاذبه‌های گردشگری شهر زنجان می‌پردازد. از مکان‌های تاریخی مثل رختشوی‌خانه و موزه مردان نمکی، تا جاذبه‌های طبیعی مانند غار کتله‌خور و رودخانه قزل‌اوزن، همه در این سایت معرفی شده‌اند.
        </p>
        <p>
          اگر به دنبال مکان‌هایی برای تفریح، عکاسی، یا گذراندن وقت با خانواده و دوستان در زنجان هستید، <strong>برکه</strong> بهترین انتخاب برای شماست.
        </p>
        <p>
          اطلاعات موجود در سایت شامل موقعیت مکانی، ساعت بازدید، هزینه ورود، تاریخچه و تصاویر مکان‌هاست تا بتوانید با آگاهی کامل برنامه‌ریزی کنید.
        </p>
        <p>
          ما در <strong>برکه</strong> سعی کرده‌ایم با بهره‌گیری از منابع معتبر و تجربیات کاربران، بهترین و دقیق‌ترین اطلاعات را در اختیار شما قرار دهیم.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
