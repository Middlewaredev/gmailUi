import { DrawerContent } from "@/components/drawerContent";
import { CustomOption } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout(){
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: "75%"
                }
            }}
            drawerContent={(props) => <DrawerContent {...props}/>}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    title: "Todas as caixas de entrada",
                    iconName: "all-inbox",
                    isDivider: true,
                    notifications: 5
                } as CustomOption }
            />
            <Drawer.Screen
                name="inbox"
                options={
                {
                    title: "Entrada",
                    iconName: "inbox",
                    notifications: 3,
                    isDivider: true,
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="stars"
                options={
                {
                    title: "Com estrelas",
                    iconName: "star-outline",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="postponed"
                options={
                {
                    title: "Adiados",
                    iconName: "schedule",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="important"
                options={
                {
                    title: "Importante",
                    iconName: "label-important-outline",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="send"
                options={
                {
                    title: "Enviado",
                    iconName: "send",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="programmed"
                options={
                {
                    title: "Programado",
                    iconName: "schedule-send",
                } as CustomOption
                }
            />

            <Drawer.Screen
                name="exitBox"
                options={
                {
                    title: "Caixa de saída",
                    iconName: "outbox",
                } as CustomOption
                }
            />

            <Drawer.Screen
                name="sketch"
                options={
                {
                    title: "Rascunho",
                    iconName: "note",
                } as CustomOption
                }
            />

            <Drawer.Screen
                name="allEmails"
                options={
                {
                    title: "Todos os e-mails",
                    iconName: "email",
                } as CustomOption
                }
            />

            <Drawer.Screen
                name="span"
                options={
                {
                    title: "Spam",
                    iconName: "info-outline",
                } as CustomOption
                }
            />

            <Drawer.Screen
                name="trash"
                options={
                {
                    title: "Lixeira",
                    iconName: "delete-outline",
                    isDivider: true,
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="read"
                options={
                {
                    title: "Lidos",
                    iconName: "label-important-outline",
                    sectionTitle: "Marcadores",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="general"
                options={
                {
                    title: "Geral",
                    iconName: "label-important-outline",
                    isDivider: true,
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="newMarker"
                options={
                {
                    title: "Criar novo",
                    iconName: "add",
                    isDivider: true,
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="config"
                options={
                {
                    title: "Configurações",
                    iconName: "settings",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="feedback"
                options={
                {
                    title: "Enviar feedback",
                    iconName: "feedback",
                } as CustomOption
                }
            />
            <Drawer.Screen
                name="help"
                options={
                {
                    title: "Ajuda",
                    iconName: "help-outline",
                } as CustomOption
                }
            />
        </Drawer>
    )
}