import { Image, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import logo from "../assets/images/dineeasy.png";
import { Colors } from "../assets/colors";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={{ backgroundColor: Colors.dark.background, flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.dark.background} />
      
      {/* Background Gradient Overlay */}
      <View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: height * 0.6,
          background: `linear-gradient(135deg, ${Colors.dark.background}00 0%, ${Colors.PRIMARY}15 100%)`,
          opacity: 0.3
        }}
      />
      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, minHeight: height }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 40 }}>
          
          {/* Header Section */}
          <View style={{ alignItems: 'center', marginTop: height * 0.08, marginBottom: 40 }}>
            {/* Logo Container - Modern Card Design */}
            <View 
              style={{ 
                backgroundColor: Colors.WARM_WHITE,
                padding: 20,
                borderRadius: 24,
                shadowColor: Colors.dark.shadow,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 16,
                elevation: 8,
                marginBottom: 32
              }}
            >
              <Image 
                source={logo} 
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            {/* Welcome Text - Premium Typography */}
            <View style={{ alignItems: 'center', marginBottom: 8 }}>
              <Text 
                style={{ 
                  fontSize: 32,
                  fontWeight: '800',
                  color: Colors.GOLD,
                  textAlign: 'center',
                  letterSpacing: -0.5,
                  lineHeight: 38,
                  marginBottom: 12
                }}
              >
                Welcome to DineEasy
              </Text>
              <Text 
                style={{ 
                  fontSize: 17,
                  color: Colors.dark.text,
                  textAlign: 'center',
                  opacity: 0.8,
                  letterSpacing: 0.2,
                  lineHeight: 24,
                  maxWidth: width * 0.8
                }}
              >
                Your culinary journey begins here
              </Text>
            </View>
          </View>

          {/* Spacer to push buttons to bottom */}
          <View style={{ flex: 1 }} />

          {/* Button Section - Fixed positioning */}
          <View style={{ paddingBottom: 40 }}>
            
            {/* Primary Button - Create Account */}
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              style={{ 
                backgroundColor: Colors.PRIMARY,
                paddingVertical: 18,
                paddingHorizontal: 24,
                borderRadius: 20,
                shadowColor: Colors.PRIMARY,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.35,
                shadowRadius: 16,
                elevation: 8,
                marginBottom: 16
              }}
              activeOpacity={0.85}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text 
                    style={{ 
                      fontSize: 18,
                      fontWeight: '700',
                      color: Colors.WARM_WHITE,
                      letterSpacing: 0.3,
                      marginBottom: 2
                    }}
                  >
                    Create Account
                  </Text>
                  <Text 
                    style={{ 
                      fontSize: 14,
                      color: Colors.WARM_WHITE,
                      opacity: 0.9,
                      letterSpacing: 0.2
                    }}
                  >
                    Join our community
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Secondary Button - Guest */}
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={{ 
                backgroundColor: Colors.dark.surface,
                paddingVertical: 18,
                paddingHorizontal: 24,
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: Colors.GOLD,
                shadowColor: Colors.GOLD,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 12,
                elevation: 4,
                marginBottom: 24
              }}
              activeOpacity={0.85}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text 
                    style={{ 
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.GOLD,
                      letterSpacing: 0.3,
                      marginBottom: 2
                    }}
                  >
                    Continue as Guest
                  </Text>
                  <Text 
                    style={{ 
                      fontSize: 14,
                      color: Colors.dark.text,
                      opacity: 0.8,
                      letterSpacing: 0.2
                    }}
                  >
                    Explore without signing up
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Bottom Accent - Modern Indicator */}
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View 
                  style={{ 
                    width: 32, 
                    height: 3, 
                    borderRadius: 2,
                    backgroundColor: Colors.ACCENT,
                    marginHorizontal: 4
                  }}
                />
                <View 
                  style={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: 4,
                    backgroundColor: Colors.GOLD,
                    marginHorizontal: 4
                  }}
                />
                <View 
                  style={{ 
                    width: 32, 
                    height: 3, 
                    borderRadius: 2,
                    backgroundColor: Colors.ACCENT,
                    marginHorizontal: 4
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}