import { Outlet } from 'react-router-dom';
import Topbar from '../layout/Topbar';
import Footer from '../layout/Footer';

export default function Root() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
}
