import { Image, ScrollView, Text, View } from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import { DrawerButton } from "@/components/drawerButton";
import { CustomOption } from "@/types/navigation";


export function DrawerContent(drawerProps: DrawerContentComponentProps){
    return (
        <View className="flex-1 bg-gray-600 overflow-hidden">
            <View className="mt-20 w-full border-b pb-6 border-gray-500">
                <Image
                    source={require("@/assets/logo.png")}
                    className="w-28 ml-5"
                    resizeMode="contain"
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 42}}
            >
                <View className="mt-2">
                    {drawerProps.state.routes.map((route, index) => {
                        const isFocused = drawerProps.state.index === index;
                        const option = drawerProps.descriptors[route.key].options as CustomOption

                        if(option.title === undefined) {
                            return
                        }

                        const onPress= () => {
                            const event = drawerProps.navigation.emit({
                                type: "drawerItemPress",
                                canPreventDefault: true,
                                target: route.key
                            })

                            if(!isFocused && !event?.defaultPrevented){
                                drawerProps.navigation.navigate(route.name, route.params)
                            }
                        }

                        return (
                            <View key={route.key}>
                                {
                                    option.sectionTitle && (
                                        <Text className="text-gray-400 text-sm fron-heading uppercase ml-4 mt-6">
                                            {option.sectionTitle}
                                        </Text>
                                    )
                                }
                                <DrawerButton
                                    title={option.title}
                                    iconName={option.iconName}
                                    isDivider={option.isDivider}
                                    isFocused={isFocused}
                                    notification={option.notifications}
                                    onPress={onPress}
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}