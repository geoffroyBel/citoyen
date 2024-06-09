import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { UserGroup } from "./UserGroup";

export interface UserCardProps {
    chevron?: boolean,
    avatar: string;
    fullname: string;
}

export const UserCard: React.FC<UserCardProps> = ({ chevron, avatar, fullname }) => {
    return ( 
        <Card className={`w-full md:w-max-[200px] lg:w-max-[300px] rounded-none ${chevron ? 'shadow-none bg-transparent' : ''}`}>
            <CardBody className={`flex flex-col bg-primaryLight ${chevron ? 'bg-transparent' : 'dark:bg-gray-900'}`}>
                {chevron ? (
                    <UserGroup chevron={chevron} avatar={`${avatar}`} fullname={`${fullname}`} />
                ) : (
                    <UserGroup avatar={`${avatar}`} fullname={`${fullname}`} />
                )}
            </CardBody>
        </Card>
    );
};
