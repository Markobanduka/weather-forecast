const Form = () => {
  return (
    <form className=" bg-light-blue bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <div className="flex flex-col mb-4">
        <label htmlFor="city" className="mb-1">
          City
        </label>
        <input
          id="city"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="country" className="mb-1">
          Country
        </label>
        <input
          id="country"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
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
        />
      </div>
    </form>
  );
};

export default Form;
