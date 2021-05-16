import { Menu } from "antd";
const logo = {
  float: "left",
  width: "120px",
  height: "31px",
  margin: "16px 24px 16px 0",
  fontWeight: "bold",
  color: "white",
  lineHeight: "31px",
};
export function AppHeader({ page, setPage }) {
  return (
    <>
      <div style={logo}>Live from ECI</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[page]}
        onClick={(item) => setPage(item.key)}
      >
        <Menu.Item key="1">States</Menu.Item>
        <Menu.Item key="2">Map</Menu.Item>
        <Menu.Item key="3">Favorites</Menu.Item>
        <Menu.Item key="4">Search</Menu.Item>
      </Menu>
    </>
  );
}
