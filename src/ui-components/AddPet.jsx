/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldThreeSixSixFourThreeZeroOneFiveValue,
    setTextFieldThreeSixSixFourThreeZeroOneFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSixFourThreeZeroOneSixValue,
    setTextFieldThreeSixSixFourThreeZeroOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSixSevenTwoSevenTwoFourValue,
    setTextFieldThreeSixSixSevenTwoSevenTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSixSevenTwoSevenOneSevenValue,
    setTextFieldThreeSixSixSevenTwoSevenOneSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSixSevenTwoSevenOneZeroValue,
    setTextFieldThreeSixSixSevenTwoSevenOneZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSixFourThreeZeroOneSevenValue,
    setTextFieldThreeSixSixFourThreeZeroOneSevenValue,
  ] = useStateMutationAction("");
  const buttonThreeSixSixFourThreeZeroOneNineOnClick = useDataStoreCreateAction(
    {
      fields: {
        name: textFieldThreeSixSixFourThreeZeroOneFiveValue,
        age: textFieldThreeSixSixFourThreeZeroOneSixValue,
        image: textFieldThreeSixSixSevenTwoSevenTwoFourValue,
        color: textFieldThreeSixSixSevenTwoSevenOneSevenValue,
        about: textFieldThreeSixSixSevenTwoSevenOneZeroValue,
        PetType: textFieldThreeSixSixFourThreeZeroOneSevenValue,
      },
      model: Pet,
      schema: schema,
    }
  );
  const buttonThreeSixSixSevenTwoSevenThreeThreeOnClick =
    useDataStoreUpdateAction({
      fields: {
        name: textFieldThreeSixSixFourThreeZeroOneFiveValue,
        age: textFieldThreeSixSixFourThreeZeroOneSixValue,
        image: textFieldThreeSixSixSevenTwoSevenTwoFourValue,
        color: textFieldThreeSixSixSevenTwoSevenOneSevenValue,
        about: textFieldThreeSixSixSevenTwoSevenOneZeroValue,
        PetType: textFieldThreeSixSixFourThreeZeroOneSevenValue,
      },
      id: pet?.id,
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddPet")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add/Update Pet"
            {...getOverrideProps(overrides, "Add/Update Pet")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36643010")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://mymodernmet.com/wp/wp-content/uploads/2022/02/cute-cat-and-dog-friends-1.jpg"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Name"
            placeholder="Kitty"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixFourThreeZeroOneFiveValue}
            onChange={(event) => {
              setTextFieldThreeSixSixFourThreeZeroOneFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36643015")}
          ></TextField>
          <TextField
            label="Age"
            placeholder="2"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixFourThreeZeroOneSixValue}
            onChange={(event) => {
              setTextFieldThreeSixSixFourThreeZeroOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36643016")}
          ></TextField>
          <TextField
            label="Type"
            placeholder="Cat"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixFourThreeZeroOneSevenValue}
            onChange={(event) => {
              setTextFieldThreeSixSixFourThreeZeroOneSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36643017")}
          ></TextField>
          <TextField
            label="About"
            placeholder="Playful, funny"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixSevenTwoSevenOneZeroValue}
            onChange={(event) => {
              setTextFieldThreeSixSixSevenTwoSevenOneZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36672710")}
          ></TextField>
          <TextField
            label="Color"
            placeholder="Brown"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixSevenTwoSevenOneSevenValue}
            onChange={(event) => {
              setTextFieldThreeSixSixSevenTwoSevenOneSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36672717")}
          ></TextField>
          <TextField
            label="Image URL"
            placeholder="image-url"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSixSevenTwoSevenTwoFourValue}
            onChange={(event) => {
              setTextFieldThreeSixSixSevenTwoSevenTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36672724")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36643018")}
        ></Divider>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonThreeSixSixFourThreeZeroOneNineOnClick();
            }}
            {...getOverrideProps(overrides, "Button36643019")}
          ></Button>
          <Button
            shrink="0"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeSixSixSevenTwoSevenThreeThreeOnClick();
            }}
            {...getOverrideProps(overrides, "Button36672733")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
