import { Button } from '../Button';

export const Hero = () => {
  return (
    <>
      <section className="w-full h-full bg-black pl-[40rem] pr-20 py-36">
        <h1 className="text-white text-[3.2rem] font-medium leading-[70px] mb-16">
          A strategy, design, and technology partner for forward-thinking
          companies and societies.
        </h1>
        <h2 className="text-white text-3xl mb-8 font-serif">
          Consultancy and agency services, built on exceptional technological
          competence.
        </h2>
        <Button className="text-white">Get in touch</Button>
      </section>
    </>
  );
};
