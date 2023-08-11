export default function Topbar() {
  return (
    <nav className='flex justify-between bg-[var(--topbar-bg)] text-[var(--topbar-text)] p-4'>
      <h1>Yinghao Wang</h1>
      <ul className='flex gap-4'>
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
  );
}
