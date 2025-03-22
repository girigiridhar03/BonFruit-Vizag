export const topBarNavs = (id = "") => ({
  heading1: "Orders",
  heading2: "Order Details",
  breadCrumbs: [
    {
      navName: "Dashboard",
      pathname: "/dashboard",
    },
    {
      navName: "All Orders",
      pathname: "/orders",
    },
    {
      navName: "Order Details",
      pathname: id ? `orderDetails/${id}` : "",
    },
  ],
});

export const MenuTopBarNav = (id = "") => ({
  heading1: "Add Menu",
  heading2: "Edit Menu",
  heading3: "View Menu",
  breadCrumbs: [
    {
      navName: "Dashboard",
      pathname: "/dashboard",
    },
    {
      navName: "Add Menu",
      pathname: "/addmenu",
    },
    {
      navName: "Edit Menu",
      pathname: "/editmenu",
    },
    {
      navName: "View Menu",
      pathname: "/viewmenu",
    },
  ],
});

export const conditionHeadingBasedOnRoute = () => {
  const { pathname } = window.location;

  switch (true) {
    case pathname === "/orders":
      return topBarNavs().heading1;

    case pathname.includes("/orderDetails"):
      return topBarNavs().heading2;

    case pathname === "/addmenu":
      return MenuTopBarNav().heading1;

    case pathname === "/editmenu":
      return MenuTopBarNav().heading2;

    case pathname === "/viewmenu":
      return MenuTopBarNav().heading3;

    default:
      return;
  }
};
