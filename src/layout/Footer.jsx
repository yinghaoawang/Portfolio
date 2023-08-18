const TopFooter = () => {
  return (
    <section className='inner-container mx-auto'>
      <div className='w-full pb-4 bg-[var(--footer-bg)] text-[var(--footer-text)] grid grid-cols-4'>
        <div>
          <a href='/'>
            <img src='/public/logo.svg' />
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold'>Fundraise for</span>
          {[
            { title: 'Medical' },
            { title: 'Emergency' },
            { title: 'Memorial' },
            { title: 'Education' },
            { title: 'Nonprofit' },
            { title: 'Support COVID-19 fundraisers' },
            { title: 'Crisis Relief' },
          ].map((data) => (
            <a href='#' className='link-normal text-light'>{data.title}</a>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold'>Learn more</span>
          {[
            { title: 'How GoFundMe Works' },
            { title: 'Why GoFundMe' },
            { title: 'Common Questions' },
            { title: 'Success Stories' },
            { title: 'Supported Countries' },
            { title: 'Charity Fundraising' },
            { title: 'Pricing' },
          ].map((data) => (
            <a href='#' className='link-normal text-light'>{data.title}</a>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold'>Resources</span>
          {[
            { title: 'Help Center' },
            { title: 'Blog' },
            { title: 'GoFundMe Stories' },
            { title: 'Press Center' },
            { title: 'Careers' },
            { title: 'About' },
            { title: 'More Resources' },
          ].map((data) => (
            <a href='#' className='link-normal text-light'>{data.title}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='text-center pb-4 bg-[var(--footer-bg)] text-[var(--footer-text)]'>
      ©{currentYear} Yinghao Wang
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <hr className='py-4 border-t-[var(--lighter-gray)]' />
      <TopFooter />
      <hr className='py-4 border-t-[var(--lighter-gray)]' />
      <BottomFooter />
    </>
  );
}
