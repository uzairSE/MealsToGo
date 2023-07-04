import React from "react";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  CardCover,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.style";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { theme } from "../../../infrastructure/theme";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some Street Lahore",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Text varient="label"> {name} </Text>
      <Address> {address} </Address>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </SectionEnd>
      </Section>
    </RestaurantCard>
  );
};
