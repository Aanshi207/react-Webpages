import {
BarChart3,
Cpu,
Globe,
HelpCircle,
Home,
Package,
Search,
FileText,
Settings,
ShieldCheck,
ShoppingBag,
Target,
Users,
} from 'lucide-react';

export const menuItems =[
    {
        icon: Home,
        label: "Overview",
        id: "overview",
        gradient: "from-purple-500 to-pink-500",
        path:'/overview'
    },
    {
        icon: BarChart3,
        label: "Analytics",
        id: "analytics",
        gradient: "from-blue-500 to-cyan-500",
        path:'/analytics'
    },
    {
        icon: Users,
        label: "Customers",
        id: "customers",
        gradient: "from-green-500 to-teal-500",
        path:'/customers'
    },
    {
        icon: ShoppingBag,
        label: "Sales",
        id: "sales",
        gradient: "from-orange-500 to-yellow-500",
        path:'/sales'
    },
    {
        icon: Settings,
        label: "Setting",
        id: "setting",
        gradient: "from-gray-500 to-gray-800 ",
        path:'/setting'
    }

]

export const legalItems = [
    {
        icon: ShieldCheck,
        label: "Privacy Policy",
        id: "privacy policy",
        gradient: "from-blue-500 to-cyan-500"
    },
    {   
        icon: FileText,
        label: "Terms of Service",
        id: "terms-of-service",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: HelpCircle,
        label: "FAQ",
        id: "faq",
        gradient: "from-blue-500 to-cyan-500"
    }

]