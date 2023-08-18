import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
("@heroicons/react/24/solid");

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;

  return (
    <>
      <div className="flex justify-between items-center border rounded-lg w-80 p-4 border-black mb-4 font-medium  ">
        <div className="flex justify-between w-full">
          <p className=" flex flex-col">
            <span className="font-light">01.02.23</span>
            <span className="font-light">{totalProducts} Articles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-2xl ">${totalPrice}</span>
            <ChevronDoubleRightIcon className="h-6 w-6 text-black-500 cursor-pointer " />
          </p>
        </div>
      </div>
    </>
  );
}

export default OrdersCard;
