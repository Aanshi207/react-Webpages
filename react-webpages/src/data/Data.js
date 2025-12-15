import {
BarChart3,
Cpu,
Globe,
Home,
Package,
Search,
Settings,
ShoppingBag,
Target,
Users,
} from 'lucide-react';

export const menuItems =[
    {
        icon: Home,
        label: "Overview",
        id: "overview",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: BarChart3,
        label: "Analytics",
        id: "analytics",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        label: "Customers",
        id: "customers",
        gradient: "from-green-500 to-teal-500"
    },
    {
        icon: ShoppingBag,
        label: "Sales",
        id: "sales",
        gradient: "from-orange-500 to-yellow-500"
    },
    {
        icon: Settings,
        label: "Setting",
        id: "setting",
        gradient: "from-gray-500 to-gray-800 "
    }

]