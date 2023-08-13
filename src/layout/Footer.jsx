export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <hr className='py-4 text-[var(--lighter-gray)]' />
      <div className='text-center pb-4 bg-[var(--footer-bg)] text-[var(--footer-text)]'>
        ©{currentYear} Yinghao Wang
      </div>
    </>
  );
}
