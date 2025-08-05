import { Flex, Text } from "@radix-ui/themes";

const App = () => {
  return (
    <Flex justify={"center"} align={"center"} className="h-dvh">
      <div className="flex">
        <Text className="text-6xl" color="indigo">
          你好
        </Text>
        <Text className="text-6xl" color="cyan">
          世界
        </Text>
      </div>
    </Flex>
  );
};

export default App;
