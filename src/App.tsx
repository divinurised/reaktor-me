import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { FooterMenu } from './components/FooterMenu';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { SouthPole } from './components/SouthPole';
import ScrollObserver from './contexts/ScrollContext';

function App() {
  return (
    <ScrollObserver>
      <Header />
      <Hero />
      <Main />
      <section className="w-full h-full pl-[40rem] pr-20 py-36">
        <h1 className="text-5xl font-medium leading-[70px] mb-8">
          We make future products and services, and help our clients adapt and
          remain ahead in an increasingly complex world.
        </h1>
        <a
          href="/"
          className="hover:text-orange-100 text-gray-100 transition-colors"
        >
          <h2 className=" text-2xl mb-8">See all work</h2>
        </a>
      </section>
      <Clients />
      <Form />
      <SouthPole />
      <FooterMenu />
      <Footer />
    </ScrollObserver>
  );
}

export default App;
