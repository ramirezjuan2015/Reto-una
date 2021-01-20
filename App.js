import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ResolveAuthScreen from "./src/Screens/ResolveAuthScreen";
import registroScreen from "./src/Screens/inscribirseScreen";
import inscribirseScreen from "./src/Screens/registroScreen";
import Maqueta from "./src/Screens/maqueta";
import Animal from "./src/Screens/Animal";
import creacionLista from "./src/Screens/creacionLista";
import Cuentas from "./src/Screens/Cuentas";
import ListaAnimal from "./src/Screens/registroAnimal";
import Location from "./src/Screens/LocationScreens";
import GuardarLocation from "./src/Screens/GuardarLocacion";
import GuardarMapa from "./src/Screens/guardarMapa";

import { Provider as CategoriasProvider } from "./src/context/CategoriasContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as SalvarProvider } from "./src/context/SalvarContexto";
import { Provider as AnimalsProvider } from "./src/context/animalsContext";
import { Provider as AnimalesProvider } from "./src/context/AnimalesContexto";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as LocProvider } from "./src/context/locContext";
import { setNavigator } from "./src/navigationRef";
import { FontAwesome } from "@expo/vector-icons";

const listFlow = createStackNavigator({
  Maqueta: Maqueta,
  Animal: Animal,
  RegistroAnimal: ListaAnimal,
  Location: Location,
  Guardar: GuardarLocation,
});

listFlow.navigationOptions = {
  title: "Categoria",
  tabBarIcon: <FontAwesome name="th-list" size={20} color="orange" />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Registro: registroScreen,
    Inscribirse: inscribirseScreen,
  }),

  mainFlow: createBottomTabNavigator({
    listFlow,
    CreacionLista: creacionLista,
    Cuentas: Cuentas,
    GuardarMapa: GuardarMapa,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocProvider>
      <LocationProvider>
        <AnimalesProvider>
          <AnimalsProvider>
            <SalvarProvider>
              <CategoriasProvider>
                <AuthProvider>
                  <App
                    ref={(navigator) => {
                      setNavigator(navigator);
                    }}
                  />
                </AuthProvider>
              </CategoriasProvider>
            </SalvarProvider>
          </AnimalsProvider>
        </AnimalesProvider>
      </LocationProvider>
    </LocProvider>
  );
};
