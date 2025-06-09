import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className=" text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-md">
                <img src="/LogoSkensa.png" alt="" className='w-full h-auto'/>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Class XI RPL 2</span>
            </div>
        </>
    );
}
