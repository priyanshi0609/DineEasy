import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
    className="bg-red-50"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        padding: 20,
        borderColor: "#000",
      }}
    >
      <Text>Hi i am Priyanshi  Both</Text>

      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text className="text-blue-500">Go to Home</Text>
      </TouchableOpacity>
    </View>


  );
}
