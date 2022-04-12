export const SouthPole = () => {
  return (
    <section className="w-full border-b-2 border-gray-150 bg-white py-32">
      <div className="p-16 flex items-center gap-16">
        <img
          src="https://www.reaktor.com/wp-content/uploads/2021/02/CNC_label_CMYK-430x0-c-default.webp"
          alt=""
        />
        <p className="text-sm text-gray-150 max-w-2xl">
          We’re not a non-profit organisation, but we are active citizens. As
          part of the process of continuously improving our responsibility, we
          collaborated with{' '}
          <a href="/" className="text-blue-700 underline">
            {' '}
            Southpole{' '}
          </a>
          to calculate, reduce and compensate the greenhouse gas emissions of
          our operations to become completely carbon neutral. Read more about
          what we do to treasure sustainability, diversity, and accountability
          at{' '}
          <a href="/" className="text-blue-700 underline">
            reaktor.com/companyyoukeep
          </a>
          .
        </p>
      </div>
    </section>
  );
};
