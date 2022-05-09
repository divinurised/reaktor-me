import { clientLogos } from '../../utils/clientLogos';

export const Clients = () => {
  return (
    <section className="p-16">
      <h1 className="text-[28px] mb-24">Selected clients</h1>
      <div className="grid grid-cols-4">
        {clientLogos.map(logo => (
          <div className="mb-16 flex" key={logo?.image}>
            <img
              src={logo?.image}
              alt=""
              className="mx-auto object-none select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
