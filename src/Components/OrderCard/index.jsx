import { XCircleIcon } from "@heroicons/react/24/solid";

function OrderCard(props) {
  const { id, title, imagesUrl, price, handleDelete } = props;
  let renderXCircleIcon;
  if (handleDelete) {
    renderXCircleIcon = (
      <XCircleIcon
        onClick={() => handleDelete(id)}
        className="h-6 w-6 text-black-500 cursor-pointer"
      />
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <figure className="w-20 h-20">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={imagesUrl}
              alt={title}
            />
          </figure>
          <p className="text-sm font-light ">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p
            className="
          text-lg font-medium"
          >
            {price}
          </p>
          {renderXCircleIcon}
        </div>
      </div>
    </>
  );
}
export default OrderCard;
