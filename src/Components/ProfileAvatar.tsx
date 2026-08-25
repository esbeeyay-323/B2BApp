import { Avatar, Button } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const ProfileAvatar = () => {
  return (
    <div className="relative w-fit">
      <Avatar
        size={56}
        className="sm:hidden"
        style={{
          background: "linear-gradient(135deg, #7873ff, #4f63f5)",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        SA
      </Avatar>

      <Avatar
        size={84}
        className="hidden sm:inline-flex"
        style={{
          background: "linear-gradient(135deg, #7873ff, #4f63f5)",
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        SA
      </Avatar>

      <Button
        shape="circle"
        icon={<CameraOutlined />}
        size="small"
        className="absolute -bottom-1 -right-1"
      />
    </div>
  );
};

export default ProfileAvatar;
