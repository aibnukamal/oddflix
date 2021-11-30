import { useState, useMemo, CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Layout, Button, Tooltip } from "antd";
import {
  HomeFilled,
  HeartFilled,
  YoutubeFilled,
  SearchOutlined,
} from "@ant-design/icons";

import style from "./Sider.module.css";

interface MenuInterface {
  icon: ReactNode;
  title: string;
  link: string;
}

const menu: MenuInterface[] = [
  {
    icon: <HomeFilled />,
    title: "Discover",
    link: "/",
  },
  {
    icon: <SearchOutlined />,
    title: "Search Movie",
    link: "/search",
  },
  {
    icon: <HeartFilled />,
    title: "My Favorites",
    link: "/favorites",
  },
];

const Sider = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const collapsedStyle: CSSProperties = useMemo(
    () => ({
      width: collapsed ? "80px" : "200px",
      textAlign: collapsed ? "center" : "left",
    }),
    [collapsed]
  );

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div
        style={{ position: "fixed", display: "flex", flexDirection: "column" }}
      >
        <Link href="/">
          <Button className={style.logo} style={collapsedStyle}>
            <YoutubeFilled /> {!collapsed ? "OddFlix" : ""}
          </Button>
        </Link>

        {menu.map((item, index) => (
          <Link key={index} href={item.link}>
            <Button className={style.menu} style={collapsedStyle}>
              {collapsed ? (
                <Tooltip placement="right" title={item.title} color="blue">
                  {item.icon}
                </Tooltip>
              ) : (
                item.icon
              )}
              {!collapsed ? item.title : ""}
            </Button>
          </Link>
        ))}
      </div>
    </Sider>
  );
};

export default Sider;
