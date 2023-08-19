export default function GoFundMe(props) {
  return (
    <>
      <section
        className={`w-full h-[600px] bg-cover bg-center bg-[url('/wallpaper.jpg')]`}
      >
        <div className='flex w-full h-full justify-center items-center flex-col gap-6'>
          <h1 className='text-center leading-tight'>
            Your home
            <br />
            for help
          </h1>
          <button className='flex shadow-xl gap-3 items-center py-4 px-6 bg-white rounded-full font-bold'>
            <img src='/start-button-icon.svg' width='20px' /> Start a
            GoFundMe
          </button>
        </div>
      </section>
      <section className='inner-container'>
        <h5 className='text-light font-bold'>What to expect</h5>
        <h2 className='mt-4 mb-20'>
          Fundraising on GoFundMe
          <br />
          takes just a few minutes
        </h2>
        <div className='grid grid-cols-3 mb-10'>
          {[
            {
              id: 1,
              header: 'Start with the basics',
              details: 'Kick things off with your name and location.'
            },
            {
              id: 2,
              header: 'Tell us your story',
              details: "We'll guide you with tips along the way."
            },
            {
              id: 3,
              header: 'Share with friends and family',
              details: 'People out there want to help you.'
            }
          ].map((data) => (
            <div className='flex flex-col gap-2'>
              <div className='mb-4'>
                <div className='flex bg-green-600 rounded-full w-10 h-10 items-center justify-center text-white font-bold text-xl'>
                  {data.id}
                </div>
              </div>
              <h4>{data.header}</h4>
              <p className='text-light'>{data.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='inner-container pb-[100px]'>
        <h5 className='text-light font-bold'>Where you can help</h5>
        <h2 className='font-semibold mt-4 mb-10 text-4xl'>Featured topics</h2>
        <a href='#' className='grid grid-cols-2 mb-10 h-full w-full'>
          <div
            className={`w-full py-4 px-4 h-[300px] bg-cover bg-center bg-[url('/homepage-banner.jpg')]`}
          >
            <span className='bg-[var(--lighter-gray)] text-[var(--gray)] rounded-full px-2 py-1 text-sm font-semibold'>
              Urgent cause
            </span>
          </div>
          <div className='flex flex-col justify-between py-10 px-4'>
            <div className='flex flex-col gap-3'>
              <h3 className='text-black'>Maui wildfires: how to help</h3>
              <p className='text-[var(--light-gray)]'>
                Donate to verified fundraisers to help the individuals and
                families affected in Maui recover. Give your support today.
              </p>
            </div>
            <div className='text-black font-semibold text-sm'>
              Donate now
              <span className='text-xl ml-2 text-[var(--light-gray)]'>›</span>
            </div>
          </div>
        </a>
      </section>
      <section className='h-screen w-full bg-green-600 flex items-center justify-center'>
        <div className='inner-container text-white flex flex-col gap-5 px-20'>
          <h4 className='flex gap-2 items-center font-bold'>
            <img className='mt-1.5' src='/trust-and-safty-icon.svg' />
            Trust & Safety
          </h4>
          <h2 className='font-bold'>We have your back.</h2>
          <h2>
            With a global team dedicated to trust and safety, we’ve successfully
            managed fundraisers worldwide for more than a decade. Don’t worry
            about a thing, we’ve got you covered.
          </h2>
          <small className='mt-5 text-[var(--gray)] font-bold'>
            Explore Trust & Safety<span className='text-xl ml-2'>›</span>
          </small>
        </div>
      </section>
      <section className='inner-container flex my-[60px]'>
        <div className='w-44 flex flex-col justify-center mr-24 gap-3'>
          <div className='text-light font-bold'>Make your impact</div>
          <h3>Fundraise for...</h3>
        </div>
        <div className='w-full h-[400px] grid grid-cols-3 gap-6'>
          {[
            {
              title: 'Yourself',
              imgUrl: 'https://d25oniaj7o2jcw.cloudfront.net/start-yourself.png'
            },
            {
              title: 'Friends & Family',
              imgUrl:
                'https://d25oniaj7o2jcw.cloudfront.net/start-friends-family.png'
            },
            {
              title: 'Charity',
              imgUrl: 'https://d25oniaj7o2jcw.cloudfront.net/start-charity.png'
            }
          ].map((data) => (
            <a className='link-normal' href='#'>
              <div className='border-2 h-full border-green-500 flex flex-col items-center rounded-xl justify-center gap-2'>
                <img className='h-48 mt-10' src={data.imgUrl} />
                <h4>{data.title}</h4>
                <img className='my-10' src='/arrow-desktop.svg' />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className='inner-container flex justify-center'>
        <div className='flex flex-col justify-center items-center w-[600px] text-center gap-8 mr-16'>
          <h2 className='text-4xl'>Ready to get started? Join thousands of others today.</h2>
          <div className='grid grid-cols-2 gap-4 w-280px'>
            <button className='bg-green-600 py-4 px-12 rounded-full'>Start a GoFundMe</button>
            <button className='bg-green-900 py-4 px-12 rounded-full'>How it works</button>
          </div>
        </div>
        <div className='h-[360px]'>
          <img className='h-full' src='https://d25oniaj7o2jcw.cloudfront.net/footer-flower-cta.png' />
        </div>
      </section>
    </>
  );
}
