import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px]max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything You want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          neque aliquid hic magnam illum. Quisquam rem quia numquam alias eos,
          temporibus laboriosam esse impedit assumenda modi voluptas in corporis
          ut tenetur nobis repudiandae accusamus ex quaerat laborum. A, neque ab
          nemo quo numquam corporis dolorem laudantium ut tempora at, provident
          dolorum impedit natus consequuntur dolor fuga quas quaerat delectus
          fugit recusandae. Ratione non reprehenderit earum quasi at autem vel
          quod modi eius ab dolore iste ducimus doloribus, sapiente obcaecati
          nam ipsum accusamus nulla nihil sequi quam? Voluptatibus consequuntur
          quisquam laborum quo! Odio fugit quae beatae at dolor voluptatem
          ducimus quidem.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
