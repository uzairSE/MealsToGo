import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component.js";

const SearchBarView = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchBarView>
      <Searchbar />
    </SearchBarView>
    <FlatList
      data={[
        { name: "Devin" },
        { name: "Dan" },
        { name: "Dominic" },
        { name: "Jackson" },
        { name: "James" },
        { name: "Joel" },
        { name: "John" },
        { name: "Jillian" },
        { name: "Jimmy" },
        { name: "Julie" },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
