export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female",
    isDropDown: true,
    dropDownData: [
      {
        label: "Dresses",
        href: "/female/dresses",
        isDropDown:false
      },
      {
        label: "T-Shirts",
        href: "/female/t-shirts",
        isDropDown:false
      },
      {
        label: "Pents",
        href: "/female/pents",
        isDropDown:false
      },
      {
        label: "jackets",
        href: "/female/jackets",
        isDropDown:false
      },
      {
        label: "Sweater",
        href: "/female/sweater",
        isDropDown:false
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: true,
    dropDownData: [
      {
        label: "Sweaters",
        href: "/male/sweaters",
        isDropDown:false
      },
      {
        label: "jackets",
        href: "/male/jackets",
        isDropDown:false
      },
    ],
  },
  {
    label: "kids",
    href: "/kids",
    isDropDown: false,
  },
  {
    label: "All Products",
    href: "/allproducts",
    isDropDown: false,
  },
];
