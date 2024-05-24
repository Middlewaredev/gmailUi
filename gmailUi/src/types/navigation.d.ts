import { DrawerNavigationOptions} from "@react-navigation/drawer";
import { IconNameProps } from "@/components/drawerButton";

interface CustomOption extends DrawerNavigationOptions {
    iconName: IconNameProps
    isDivider?: boolean
    notifications?: number
    sectionTitle?: string
}