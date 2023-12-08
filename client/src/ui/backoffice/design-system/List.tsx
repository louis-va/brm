import React from 'react';
import CustomLink from './CustomLink.tsx';
import {Typography} from '../../design-system/Typography.tsx';

interface ListProps {
    className?: string;
    children?: React.ReactNode;
}

const List = ({className, children}: ListProps) => {
    const values = {
        link1: {value: 'Dashboard', key: '/admin'},
        link2: {value: 'Séances', key: '/screening'},
        link3: {value: 'Réservations', key: '/booking'},
    }

    return (
        <nav className={`${className} overflow-y-auto bg-blackPrimary`}>
            <ul className={`${className} w-[22.5rem] flex flex-col pl-[6.625rem] pt-[5.875rem] items-center`}>
                {Object.entries(values).map(([navKey, {key, value}]) => (
                    <li className={'py-4 w-full'} key={navKey}>
                        <CustomLink to={key}>
                            <Typography fontSize={'20'} textColor={'white'} fontFamily={'Franklin'}
                                        hoverTextColor={'orange'} className={'w-full'}>
                                {value}
                            </Typography>
                        </CustomLink>
                    </li>
                ))}
                {children}
            </ul>
        </nav>

    );
};

export default List;
