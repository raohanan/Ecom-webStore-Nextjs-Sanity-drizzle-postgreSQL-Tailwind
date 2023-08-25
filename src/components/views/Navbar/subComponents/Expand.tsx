import { NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { FC, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpended, setExpended] = useState<boolean>(false);
  const [isTimeOut, setTimeOut] = useState<boolean>(false);

  function handleExpand() {
    setExpended(!isExpended);
    setTimeout(() => {
      setTimeOut(isTimeOut);
    }, 100);
  }

  return (
    <li className={`${isExpended ? "h-48" : "h-12"} list-none`}>
      <div
        onClick={handleExpand}
        className="flex hover:bg-purple-300 py-2 px-3 rounded-md duration-200 items-center"
      >
        <Link href={item.href}>{item.label}</Link>
        {item.isDropDown ? (
          <HiOutlineChevronDown
            className="mt-1 rotate-180 group-hover:rotate-0 duration-300"
            size={15}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-1 mt-2">
        {isExpended &&
          item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
            <Link
              className="px-5 hover:bg-gray-100 py-1 rounded-md duration-300"
              href={subItem.href}
            >
              {subItem.label}
            </Link>
          ))}
      </div>
    </li>
  );
};

export default Expand;
