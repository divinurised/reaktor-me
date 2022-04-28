import { Button } from '../Button';
import { Input } from '../Input/intex';

export const Form = () => {
  return (
    <>
      <section>
        <img
          src="https://www.reaktor.com/wp-content/uploads/2017/10/home_about1-1-1400x0-c-default.webp"
          alt=""
          className="w-full"
        />
      </section>
      <section className="w-full h-full pl-[40rem] pr-20 py-36">
        <h1 className="text-5xl font-medium leading-[70px] mb-8">
          Sign up for our newsletter
        </h1>
        <h2 className="text-2xl mb-8 font-serif font-light">
          Get the latest from us in tech, business, design – and
          <br /> why not life.
        </h2>
        <Input label="First Name" required />
        <Input label="Last Name" required />
        <Input label="Email" required />
        <div>
          <input type="checkbox" id="first" className="rounded" />
          <label htmlFor="first" className="ml-5 text-gray-150 leading-7">
            Subscribe to our monthly newsletter with articles, posts, and ideas
            from us and other great sources we like. *
          </label>
        </div>
        <div>
          <input type="checkbox" id="first" className="rounded" />
          <label htmlFor="first" className="ml-5 text-gray-150 leading-7">
            Subscribe to our newsletter for software developers. Each one is
            curated by one of Reaktor's experts.
          </label>
        </div>
        <p className="text-black text-sm my-4">
          By submitting this form, you agree with our{' '}
          <a href="/" className="text-orange-100 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <Button className="text-orange-100 hover:text-white">Submit</Button>
      </section>
    </>
  );
};
