export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='text-center p-4 bg-[var(--footer-bg)] text-[var(--footer-text)]'>
      ©{currentYear} Yinghao Wang
    </div>
  );
}
