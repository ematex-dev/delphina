import { Tabs, useRouter } from "expo-router";
import Icon from "../../components/Icon";
import { colors, fonts } from "../../theme";
import { confirmCall } from "../../utils/call";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.moss,
        tabBarLabelStyle: { fontFamily: fonts.semi, fontSize: 11.5 },
        tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.line,
            paddingTop: 8,
            height: 70,
          },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={25} color={color} />
          ),
        }}
      />
      ;
      <Tabs.Screen
        name="area"
        options={{
          title: "Area",
          tabBarIcon: ({ color }) => (
            <Icon name="map" size={25} color={color} />
          ),
        }}
      />
    <Tabs.Screen
          name="call"
          options={{
            title: "Call",
            tabBarIcon: ({ color }) => (
              <Icon name="phone" size={25} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); 
              confirmCall();
            },
          }}
        />
    </Tabs>
  );
}
