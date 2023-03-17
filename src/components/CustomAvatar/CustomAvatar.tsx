import { FC } from "react";
import { Avatar } from "antd";
import {
    UserOutlined
  } from '@ant-design/icons';
import { StyledAvatar } from "../../styles/components";

type CustomAvatarPropsType = {
    name?: string;
    imageUrl?: string;
};

export const CustomAvatar: FC<CustomAvatarPropsType> = (props) => {

    return (
        <StyledAvatar.Container>
            {props.imageUrl ? (
                <Avatar size={50} src={props.imageUrl} /> 
            ) : (
                <Avatar size={50} icon={<UserOutlined />} />
            )}
            {props.name ? (
                <StyledAvatar.Text>{props.name}</StyledAvatar.Text>
            ) : null}
        </StyledAvatar.Container>
    )
}