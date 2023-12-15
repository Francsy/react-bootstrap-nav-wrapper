import { faGauge, faNetworkWired, faFileContract, faArrowUpRightFromSquare, faFileArrowDown, faListCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const menuItems = [
    {
        label: 'Home',
        path: '/',
        icon: faGauge,
        type: 'link',
    },
    {
        label: 'Vite',
        path: '/vite',
        icon: faNetworkWired,
        type: 'link',
    },
    {
        label: 'Example',
        path: '/example',
        icon: faFileContract,
        type: 'link',
    },
    {
        label: 'Dropdown',
        type: 'dropdown',
        icon: faCircleInfo,
        items: [
            {
                label: 'Action 1',
                path: '/',
                icon: faListCheck,
                divider: false,
            },
            {
                label: 'Action 2',
                path: '/vite',
                icon: faArrowUpRightFromSquare,
                divider: false
            },
            {
                label: 'Other Action',
                path: '/example',
                icon: faFileArrowDown,
                divider: true
            }
        ]
    }
]