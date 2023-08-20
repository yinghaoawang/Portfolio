const TopFooter = () => {
  return (
    <section className='inner-container mx-auto'>
      <div className='w-full pb-4 bg-[var(--footer-bg)] text-[var(--footer-text)] grid grid-cols-4'>
        <div>
          <a href='/'>
            <img src='/logo.svg' />
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold text-gray'>Fundraise for</span>
          {[
            { title: 'Medical' },
            { title: 'Emergency' },
            { title: 'Memorial' },
            { title: 'Education' },
            { title: 'Nonprofit' },
            { title: 'Support COVID-19 fundraisers' },
            { title: 'Crisis Relief' }
          ].map((data) => (
            <a href='#' className='link-normal text-light'>
              {data.title}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold text-gray'>Learn more</span>
          {[
            { title: 'How GoFundMe Works' },
            { title: 'Why GoFundMe' },
            { title: 'Common Questions' },
            { title: 'Success Stories' },
            { title: 'Supported Countries' },
            { title: 'Charity Fundraising' },
            { title: 'Pricing' }
          ].map((data) => (
            <a href='#' className='link-normal text-light'>
              {data.title}
            </a>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <span className='font-bold text-gray'>Resources</span>
          {[
            { title: 'Help Center' },
            { title: 'Blog' },
            { title: 'GoFundMe Stories' },
            { title: 'Press Center' },
            { title: 'Careers' },
            { title: 'About' },
            { title: 'More Resources' }
          ].map((data) => (
            <a href='#' className='link-normal text-light'>
              {data.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='inner-container mx-auto mb-8 mt-2'>
      <div className='flex pb-4 bg-[var(--footer-bg)] text-[var(--footer-text)]'>
        <div className='flex flex-col items-start gap-y-4'>
          <button className='border border-[var(--lighter-gray)] rounded-md shadow-md flex px-2 py-2'>
            <img className='my-auto object-cover w-5 h-5 rounded-full' src='/us-flag-icon.svg' />
            <span className='ml-3'>United States<span className='mx-2'>·</span>English</span>
          </button>
          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            <span className='text-gray'>©{currentYear} Yinghao Wang</span>
            {[
              { title: 'Terms' },
              { title: 'Privacy Notice' },
              { title: 'Do Not Sell My Personal Information' },
              { title: 'Legal' },
              { title: 'Accessibility Statement' }
            ].map((data) => (
              <a href='#' className='link-normal text-light'>
                {data.title}
              </a>
            ))}
          </div>
        </div>
        <div className='shrink-0 flex w-[300px]'>
          <div>Get it on google play</div>
          <div>Get it on apple store</div>
        </div>
      </div>
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
