export default function GoFundMe(props) {
  return (
    <>
      <section
        className={`w-full h-[600px] bg-cover bg-center bg-[url('/public/wallpaper.jpg')]`}
      >
        <div className='flex w-full h-full justify-center items-center flex-col gap-6'>
          <h1 className='text-6xl text-center leading-tight'>
            Your home
            <br />
            for help
          </h1>
          <button className='flex shadow-xl gap-3 items-center py-4 px-6 bg-white rounded-full font-bold'>
            <img src='/public/start-button-icon.svg' width='20px' /> Start a
            GoFundMe
          </button>
        </div>
      </section>
      <section className='inner-container pb-[100px]'>
        <h5 className='text-[var(--light-text)] font-bold'>What to expect</h5>
        <h2 className='font-semibold my-3 text-4xl'>
          Fundraising on GoFundMe
          <br />
          takes just a few minutes
        </h2>
        <div className='grid grid-cols-3'>
          {[
            {
              id: 1,
              header: 'Start with the basics',
              details: 'Kick things off with your name and location'
            },
            { id: 2, header: 'Tell us your story' },
            { id: 3, header: 'Share with friends and family' }
          ].map((data) => (
            <div className='flex flex-col gap-2'>
              <div>
                <div className='flex bg-green-600 rounded-full w-10 h-10 items-center justify-center text-white font-bold text-xl'>
                  {data.id}
                </div>
              </div>
              <h1 className='font-semibold text-xl mt-4'>{data.header}</h1>
              <p className='text-[var(--light-text)]'>{data.details}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
