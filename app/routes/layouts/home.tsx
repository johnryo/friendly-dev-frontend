import { Outlet } from 'react-router';
import Hero from '~/components/Hero';

const Layout = () => {
  return (
    <>
      <Hero name='John' />
      <section className='max-w-6xl mx-auto px-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
