import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [cities, setCities] = useState<
    { name: string; country: string; temperature: number }[]
  >([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!country || !city || !temperature) {
      return;
    }
    const newCity = [
      {
        name: city,
        country,
        temperature: Number(temperature),
      },
    ];

    setCities((currentCities) => [...currentCities, ...newCity]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-light-blue bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg"
    >
      <div className="flex flex-col mb-4">
        <label htmlFor="country" className="mb-1">
          Country
        </label>
        <input
          id="country"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setCountry(e.currentTarget.value)
          }
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="city" className="mb-1">
          City
        </label>
        <input
          id="city"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setCity(e.currentTarget.value)
          }
        />
      </div>
      <div>
        <label className="mb-1" htmlFor="temperature">
          Temperature
        </label>
        <input
          id="temperature"
          type="number"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setTemperature(e.currentTarget.value)
          }
        />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary mt-5" type="submit">
          Add city
        </button>
      </div>
      {cities.map((city, index) => (
        <p key={index}>{city.name}</p>
      ))}
    </form>
  );
};

export default Form;
