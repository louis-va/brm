import {Logo} from '../../design-system/Logo.tsx'
import {Button} from "../../design-system/Button.tsx";
import {Typography} from "../../design-system/Typography.tsx";
import CustomLink from "../design-system/CustomLink.tsx";


interface HeaderBOProps {
    className?: string;
}

export const HeaderBo = ({className}: HeaderBOProps) => {
    return (
        <header
            className={`${className} w-full h-[100px] bg-orangePrimary flex flex-row flex-nowrap justify-between items-center`}>
            <Logo className={'ml-10'} size={"small"}/>
            <div className={'mr-95'}>
                <Button icon={false} variant={'black'} type={'button'}>
                    <CustomLink to={'/'}>
                        <Typography fontSize={'20'} textColor={'white'} fontFamily={'Franklin'}>
                            Vers le site
                        </Typography>
                    </CustomLink>
                </Button>
                <Button className={'ml-4'} icon={true} variant='orange' type='button'>
                    <Typography fontSize={'20'} textColor={'black'} fontFamily={'Franklin'}>
                        Admin
                    </Typography>
                </Button>
            </div>
        </header>
    )
}

