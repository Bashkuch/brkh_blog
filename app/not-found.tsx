import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md text-right">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">
          متأسفیم، صفحه مورد نظر پیدا نشد.
        </p>
        <p className="mb-8">اما نگران نباشید، می‌توانید مطالب زیادی را در صفحه اصلی ما پیدا کنید.</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 hover:bg-primary-700 focus:outline-hidden dark:hover:bg-primary-500"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  )
}
