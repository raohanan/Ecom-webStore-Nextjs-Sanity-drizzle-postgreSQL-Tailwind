import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import { HiOutlineChevronDown } from "react-icons/hi";
import Link from "next/link";

const MobNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100 rounded-md">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return (
          <li
            key={index}
            className="py-2 px-3 hover:bg-purple-300 rounded-md duration-200 list-none flex justify-between"
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
          </li>
        );
      })}
    </div>
  );
};

export default MobNavbar;
