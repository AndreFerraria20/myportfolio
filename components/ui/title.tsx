import Link from "next/link";
import React from "react";

interface TitleProps {
    title: string;
    href: string;
    subtitle?: string;
    classes?: string;
    underMaintenance?:boolean;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, href, classes, underMaintenance}) => {
    
    return (
        <div  className={`font-miloner    flex grow flex-col  ${classes?classes:""}`}>
            <Link href={href} className="title  leading-none font-miloner uppercase ">{title}</Link>

            {subtitle && <span className={"subtitle text-primary-500  leading-none "+(underMaintenance?"text-red-600":" text-secundary")} > - {subtitle +(underMaintenance?" (under maintenance)":"")}</span>}
        </div>
    );
};

export default Title;