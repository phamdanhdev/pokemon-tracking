import React from "react";
import "./style.scss";
import { Badge, Avatar } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="_navbar">
      <Link to="/">
        <div>
          <h1>Pokemon Tracking</h1>
        </div>
      </Link>
      <div className="_favorite">
        <Link to="/favorites">
          <Badge count={0} showZero color="#ffffff">
            <Avatar
              style={{ backgroundColor: "#a500a5" }}
              icon={<HeartOutlined />}
            />
          </Badge>
        </Link>
      </div>
    </div>
  );
}
