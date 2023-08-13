export default function Topbar() {
  return (
    <div className='topbar absolute w-full flex justify-center'>
      <nav className='grid grid-cols-3 max-w-[1000px] w-full bg-[var(--topbar-bg)] text-[var(--topbar-text)] px-6 py-4 mt-6 rounded-full'>
        <div className='flex items-center'>
          <h1>Yinghao Wang</h1>
        </div>
        <div className='flex items-center justify-center'>
          <a href='/'>
            <img src='/public/logo.svg' />
          </a>
        </div>
        <ul className='flex items-center justify-end gap-4'>
          <li>
            <a href='go-fund-me'>GoFundMe</a>
          </li>
          <li>
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
