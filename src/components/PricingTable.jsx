import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Text,
  Switch,
  Container,
  Button,
  Heading,
  Flex,
  Image,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import ribbonImg from "../assets/ribbon.png";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(chakra.tr);

// Plans Data
const PLANS = [
  { name: "Free", annualName: "Free", value: "free" },
  { name: "$19.99", annualName: "$199.99", value: "standard" },
  { name: "$97.99", annualName: "$997.99", value: "premium", popular: true },
];

// Features Data
const FEATURES = [
  {
    name: "Mercury AI Chat",
    values: ["25 Messages per day", "Unlimited", "Unlimited"],
  },
  { name: "Basic Course", values: [true, true, true] },
  { name: "Pro Advance Course for your success", values: [false, false, true] },
  { name: "AI suggestions for your products", values: [false, false, true] },
  {
    name: "Synchronized Connection with your Amazon Account",
    values: [false, false, true],
  },
  { name: "Creation and Management of PPC ADS", values: [false, false, true] },
  {
    name: "Do the work on your Amazon account for you",
    values: [false, false, true],
  },
  { name: "Priority Customer Support", values: [false, true, true] }, // Extra row
  { name: "Exclusive Webinars", values: [false, false, true] }, // Extra row
];

// Additional Features Data
const EXTRA_FEATURES = [
  { name: "24/7 Priority Support", values: [false, true, true] },
  { name: "Custom AI Training", values: [false, false, true] },
  { name: "Advanced Analytics Dashboard", values: [false, true, true] },
  { name: "Bulk Processing Tools", values: [false, true, true] },
  { name: "API Access", values: [false, false, true] },
];

const SubscriptionTable = () => {
  const [billingType, setBillingType] = useState("monthly");
  const [currentPlan, setCurrentPlan] = useState("free");
  const [showMore, setShowMore] = useState(false); // Track extra rows visibility

  const getPlanName = (plan) =>
    billingType === "monthly" ? plan.name : plan.annualName;
  const isSelected = (planValue) => currentPlan === planValue;

  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container
      maxW="8xl"
      py={4}
      h="100%"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": {
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
          "&:hover": { background: "rgba(255, 255, 255, 0.3)" },
        },
      }}
    >
      {/* Free Trial Banner */}
      <Box
        bg="red.600"
        color="white"
        textAlign="center"
        mb={6}
        py={2}
        borderRadius="md"
        fontSize="sm"
      >
        Try any plan for free for 14 days
      </Box>

      {/* Header Section */}
      <Flex direction="column" mb={6}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading color={textColor} size="lg" mb={2}>
            Subscription
          </Heading>
          <Button
            size="sm"
            variant="outline"
            color="gray"
            borderColor="gray"
            _hover={{ bg: "white" }}
          >
            Stop Subscription
          </Button>
        </Flex>
        <Heading color={textColor} size="md" mb={4}>
          Prices and Billing
        </Heading>

        <Flex align="center" gap={4} mb={4} flexWrap="wrap">
          <Text color={textColor}>Monthly</Text>
          <Switch
            colorScheme="cyan"
            onChange={(e) =>
              setBillingType(e.target.checked ? "annually" : "monthly")
            }
            border="1px solid white"
            borderRadius="full"
          />
          <Text color={textColor}>Annually</Text>
          {billingType === "annually" && (
            <Button
              size="sm"
              variant="outline"
              color={useColorModeValue("#16b9d9", "#40E0D0")}
              borderColor={useColorModeValue("#16b9d9", "#40E0D0")}
              borderRadius="full"
              _hover={{ bg: "transparent" }}
            >
              10% Annual Off
            </Button>
          )}
        </Flex>
      </Flex>

      {/* Plans Table */}
      <Box borderRadius="md">
        <Table variant="simple" bg="rgb(27, 99, 129)" color="white">
          <Thead>
            {/* Header row remains the same */}
            <Tr>
              <Td
                borderWidth="1px"
                borderColor="white"
                minW="200px"
                whiteSpace="normal"
              >
                <Text fontWeight="bold" fontSize="xl">
                  Compare Plans
                </Text>
                <Text fontSize="sm">
                  Compare available plans that best suit your needs
                </Text>
              </Td>
              {PLANS.map((plan) => (
                <Td
                  key={plan.value}
                  borderWidth={isSelected(plan.value) ? "2px" : "1px"}
                  borderColor={isSelected(plan.value) ? "yellow" : "white"}
                  borderBottom="1px solid white"
                  position="relative"
                  whiteSpace="normal"
                >
                  {plan.popular && (
                    <Box
                      position="absolute"
                      top="-5"
                      right="-4"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Image src={ribbonImg} w={12} />
                    </Box>
                  )}
                  <Flex direction="column" gap={2}>
                    <Text fontWeight="bold" fontSize="xl">
                      {getPlanName(plan)}
                      {getPlanName(plan) !== "Free"
                        ? billingType === "monthly"
                          ? "/Month"
                          : "/Annual"
                        : ""}
                    </Text>
                    {currentPlan === plan.value && (
                      <Button
                        position="absolute"
                        top="-10"
                        left="12"
                        size="sm"
                        bg="linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
                        color="white"
                        _hover={{
                          bg: "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)",
                        }}
                        borderRadius="full"
                        borderEndStartRadius={0}
                        mb={2}
                      >
                        Your current plan
                      </Button>
                    )}
                    <Button
                      bg={
                        plan.popular
                          ? "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
                          : "transparent"
                      }
                      color="white"
                      borderColor={!plan.popular ? "white" : "transparent"}
                      variant={!plan.popular ? "outline" : "solid"}
                      w="full"
                      onClick={() => setCurrentPlan(plan.value)}
                      _hover={{
                        bg: plan.popular
                          ? "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
                          : "whiteAlpha.200",
                      }}
                    >
                      Choose This Plan
                    </Button>
                  </Flex>
                </Td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {/* Original Features */}
            {FEATURES.map((feature, rowIndex) => (
              <Tr key={feature.name}>
                <Td borderWidth="1px" borderColor="white" whiteSpace="normal">
                  {feature.name}
                </Td>
                {feature.values.map((value, colIndex) => {
                  const isSelectedColumn = isSelected(PLANS[colIndex].value);
                  const isLastRow = rowIndex === FEATURES.length - 1;

                  return (
                    <Td
                      key={colIndex}
                      borderLeftWidth={isSelectedColumn ? "2px" : "1px"}
                      borderRightWidth={isSelectedColumn ? "2px" : "1px"}
                      borderLeftColor={isSelectedColumn ? "yellow" : "white"}
                      borderRightColor={isSelectedColumn ? "yellow" : "white"}
                      borderTopWidth="1px"
                      borderBottomWidth={
                        !showMore && isLastRow && isSelectedColumn
                          ? "2px"
                          : "1px"
                      }
                      borderTopColor="white"
                      borderBottomColor={
                        !showMore && isLastRow && isSelectedColumn
                          ? "yellow"
                          : "white"
                      }
                      whiteSpace="normal"
                    >
                      {typeof value === "boolean" ? (
                        <Icon
                          icon={
                            value
                              ? "akar-icons:circle-check-fill"
                              : "akar-icons:circle-x"
                          }
                          color={value ? "#4CAF50" : "#9E9E9E"}
                          width="24"
                        />
                      ) : (
                        value
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}

            {/* Extra Features with Animation */}
            <AnimatePresence>
              {showMore &&
                EXTRA_FEATURES.map((feature, rowIndex) => (
                  <MotionBox
                    key={feature.name}
                    as="tr"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: rowIndex * 0.1,
                    }}
                    display="table-row"
                  >
                    <Td
                      borderWidth="1px"
                      borderColor="white"
                      whiteSpace="normal"
                    >
                      {feature.name}
                    </Td>
                    {feature.values.map((value, colIndex) => {
                      const isSelectedColumn = isSelected(
                        PLANS[colIndex].value
                      );
                      const isLastRow = rowIndex === EXTRA_FEATURES.length - 1;
                      return (
                        <Td
                          key={colIndex}
                          borderLeftWidth={isSelectedColumn ? "2px" : "1px"}
                          borderRightWidth={isSelectedColumn ? "2px" : "1px"}
                          borderLeftColor={
                            isSelectedColumn ? "yellow" : "white"
                          }
                          borderRightColor={
                            isSelectedColumn ? "yellow" : "white"
                          }
                          borderTopWidth="1px"
                          borderBottomWidth={
                            isLastRow && isSelectedColumn ? "2px" : "1px"
                          }
                          borderTopColor="white"
                          borderBottomColor={
                            isLastRow && isSelectedColumn ? "yellow" : "white"
                          }
                          whiteSpace="normal"
                        >
                          {typeof value === "boolean" ? (
                            <Icon
                              icon={
                                value
                                  ? "akar-icons:circle-check-fill"
                                  : "akar-icons:circle-x"
                              }
                              color={value ? "#4CAF50" : "#9E9E9E"}
                              width="24"
                            />
                          ) : (
                            value
                          )}
                        </Td>
                      );
                    })}
                  </MotionBox>
                ))}
            </AnimatePresence>
          </Tbody>
        </Table>

        {/* Show More Button */}
        <Button
          onClick={() => setShowMore(!showMore)}
          w="full"
          py={3}
          bg="transparent"
          color={textColor}
          _hover={{ bg: "whiteAlpha.100" }}
          display="flex"
          alignItems="center"
          gap={2}
        >
          {showMore ? "Show Less" : "Show More Features"}
          <Icon
            icon={
              showMore ? "akar-icons:chevron-up" : "akar-icons:chevron-down"
            }
            width="20"
          />
        </Button>
        <Table>
          <Tbody>
            <Tr>
              <Td minW="430px" whiteSpace="normal"></Td>
              {PLANS.map((plan) => (
                <Td key={plan.value} position="relative" whiteSpace="normal">
                  <Flex direction="column" gap={2}>
                    <Button
                      bg={"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"}
                      color="white"
                      variant={"solid"}
                      w="full"
                      onClick={() => setCurrentPlan(plan.value)}
                      _hover={{
                        bg: plan.popular
                          ? "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
                          : "whiteAlpha.200",
                      }}
                    >
                      Choose This Plan
                    </Button>
                  </Flex>
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default SubscriptionTable;
