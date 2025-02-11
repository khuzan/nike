import { products } from "../constants";
import { PopularProductCard } from "../components";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Popular <span className="text-coral-red">Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience the best of what we have to offer. Our most popular
          products are loved by our customers and are sure to impress you too.
        </p>
      </div>

      <div className="mt-15 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
