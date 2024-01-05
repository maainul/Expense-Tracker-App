import UilReact from '@iconscout/react-unicons/icons/uil-chart-pie-alt'
import UilPayPal from '@iconscout/react-unicons/icons/uil-paypal'
import UilBackPacks from '@iconscout/react-unicons/icons/uil-backspace'
import UilFileContract from '@iconscout/react-unicons/icons/uil-file-contract'
import { UilEllipsisV } from '@iconscout/react-unicons'


export const SidebarData = [
    {
        icon: <i className="menu-icon tf-icons bx bx-home-circle"></i>,
        heading: "Dashboard"
    },
    {
        icon: <i className="menu-icon tf-icons bx bx-grid"></i>,
        heading: "Expense"
    },
    {
        icon: <i className='menu-icon bx bxs-bank'></i>,
        heading: "Income"
    },
    {
        icon: <i className="menu-icon tf-icons bx bx-detail"></i>,
        heading: "Add Ex / Income"
    },
    {
        icon: <i className="menu-icon tf-icons bx bx-chart"></i>,
        heading: "Charts"
    }
]



export const CardDetails = [
    {
        leftIcon: UilReact,
        rightIcon: UilEllipsisV,
        rightIconColor: "#566A7F",
        cardTitle: "Sales",
        cardValue: "$7,628",
        cardPerchant: "  +90.80%",
        size: "25",
        color: "#71DD37"

    },

    {
        leftIcon: UilPayPal,
        rightIcon: UilEllipsisV,
        rightIconColor: "#566A7F",
        cardTitle: "Sales",
        cardValue: "$7,628",
        cardPerchant: "  +90.80%",
        size: "25",
        color: "#71DD37"

    },

    {
        leftIcon: UilBackPacks,
        rightIcon: UilEllipsisV,
        rightIconColor: "#566A7F",
        cardTitle: "Profile",
        cardValue: "$7,628",
        cardPerchant: "  +90.80%",
        size: "25",
        color: "#71DD37"

    },

    {
        leftIcon: UilFileContract,
        rightIcon: UilEllipsisV,
        rightIconColor: "#566A7F",
        cardTitle: "Profit",
        cardValue: "$7,628",
        cardPerchant: "  +90.80%",
        size: "25",
        color: "#71DD37"

    }

]