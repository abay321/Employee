import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SideNav } from "./SideNav";
import { PageContent } from "./page-content/PageContent";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "../App.css";

const Dashboard = () => {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);
  return (
    <Layout className="layout-page-container">
      <Sider
        className="sider-container"
        trigger={null}
        // collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <img src="./logo192.png" alt="logo" />
        </div>
        <div className="menu-container">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            selectedKeys={selectedKeys}
            onClick={(item) => {
              navigate(item.key);
              setSelectedKeys(item.key);
            }}
            items={SideNav.map((data) => {
              return {
                key: data.key,
                label: data.label,
                icon: data.icon,
              };
            })}
          />
        </div>
      </Sider>
      <Layout className="layout-header-content-container">
        <Header className="Header">
          <div className="trigger-icon-container">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger-icon",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
        </Header>
        <Content className="content-container">
          <PageContent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
