//splash screen
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
      
      {/* Enhanced Background with Multiple Gradients */}
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Primary gradient overlay */}
        <View 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: height * 0.7,
            background: `radial-gradient(ellipse at top, ${Colors.PRIMARY}20 0%, ${Colors.dark.background}00 70%)`,
            opacity: 0.6
          }}
        />
        {/* Secondary accent gradient */}
        <View 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: height * 0.4,
            background: `linear-gradient(45deg, ${Colors.GOLD}08 0%, ${Colors.ACCENT}12 100%)`,
            opacity: 0.4
          }}
        />
        {/* Floating orbs effect */}
        <View 
          style={{
            position: 'absolute',
            top: height * 0.15,
            right: -50,
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: Colors.PRIMARY,
            opacity: 0.08
          }}
        />
        <View 
          style={{
            position: 'absolute',
            bottom: height * 0.25,
            left: -40,
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: Colors.GOLD,
            opacity: 0.06
          }}
        />
      </View>
      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, minHeight: height }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={{ flex: 1, paddingHorizontal: 28, paddingVertical: 40 }}>
          
          {/* Header Section - Enhanced */}
          <View style={{ alignItems: 'center', marginTop: height * 0.06, marginBottom: 40 }}>
            {/* Logo Container - Premium Glass Effect */}
            <View 
              style={{ 
                backgroundColor: `${Colors.WARM_WHITE}95`,
                padding: 24,
                borderRadius: 28,
                shadowColor: Colors.dark.shadow,
                shadowOffset: { width: 0, height: 12 },
                shadowOpacity: 0.25,
                shadowRadius: 20,
                elevation: 12,
                marginBottom: 36,
                borderWidth: 1,
                borderColor: `${Colors.GOLD}30`,
                // Glass morphism effect
                backdropFilter: 'blur(10px)',
              }}
            >
              <Image 
                source={logo} 
                style={{ width: 110, height: 110 }}
                resizeMode="contain"
              />
              {/* Subtle inner glow */}
              <View 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 28,
                  backgroundColor: `${Colors.PRIMARY}08`,
                }}
              />
            </View>

            {/* Welcome Text - Enhanced Typography */}
            <View style={{ alignItems: 'center', marginBottom: 12 }}>
              <Text 
                style={{ 
                  fontSize: 36,
                  fontWeight: '900',
                  color: Colors.GOLD,
                  textAlign: 'center',
                  letterSpacing: -0.8,
                  lineHeight: 42,
                  marginBottom: 8,
                  textShadowColor: `${Colors.GOLD}40`,
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 8,
                }}
              >
                Welcome to DineEasy
              </Text>
              <Text 
                style={{ 
                  fontSize: 18,
                  color: Colors.dark.text,
                  textAlign: 'center',
                  opacity: 0.85,
                  letterSpacing: 0.3,
                  lineHeight: 26,
                  maxWidth: width * 0.85,
                  fontWeight: '500'
                }}
              >
                Your premium culinary journey awaits
              </Text>
              
              {/* Subtitle accent */}
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                marginTop: 16,
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: `${Colors.ACCENT}15`,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: `${Colors.ACCENT}25`
              }}>
                <View style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: Colors.ACCENT,
                  marginRight: 8
                }} />
                <Text style={{
                  fontSize: 14,
                  color: Colors.ACCENT,
                  fontWeight: '600',
                  letterSpacing: 0.2
                }}>
                  Discover • Dine • Delight
                </Text>
              </View>
            </View>
          </View>

          {/* Spacer to push buttons to bottom */}
          <View style={{ flex: 1 }} />

          {/* Button Section - Enhanced with Sign In Option */}
          <View style={{ paddingBottom: 40 }}>
            
            {/* Primary Button - Create Account */}
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              style={{ 
                backgroundColor: Colors.PRIMARY,
                paddingVertical: 20,
                paddingHorizontal: 28,
                borderRadius: 24,
                shadowColor: Colors.PRIMARY,
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.4,
                shadowRadius: 20,
                elevation: 10,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: `${Colors.PRIMARY}40`,
              }}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[Colors.PRIMARY, `${Colors.PRIMARY}E0`]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 24,
                }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text 
                    style={{ 
                      fontSize: 19,
                      fontWeight: '800',
                      color: Colors.WARM_WHITE,
                      letterSpacing: 0.4,
                      marginBottom: 3
                    }}
                  >
                    Create Account
                  </Text>
                  <Text 
                    style={{ 
                      fontSize: 14,
                      color: Colors.WARM_WHITE,
                      opacity: 0.95,
                      letterSpacing: 0.3,
                      fontWeight: '500'
                    }}
                  >
                    Join our culinary community
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Sign In Button - New Addition */}
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              style={{ 
                backgroundColor: `${Colors.dark.surface}F0`,
                paddingVertical: 18,
                paddingHorizontal: 28,
                borderRadius: 22,
                borderWidth: 2,
                borderColor: Colors.GOLD,
                shadowColor: Colors.GOLD,
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.25,
                shadowRadius: 15,
                elevation: 6,
                marginBottom: 16,
                backdropFilter: 'blur(8px)',
              }}
              activeOpacity={0.8}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text 
                    style={{ 
                      fontSize: 18,
                      fontWeight: '700',
                      color: Colors.GOLD,
                      letterSpacing: 0.4,
                      marginBottom: 2
                    }}
                  >
                    Sign In
                  </Text>
                  <Text 
                    style={{ 
                      fontSize: 14,
                      color: Colors.dark.text,
                      opacity: 0.85,
                      letterSpacing: 0.2,
                      fontWeight: '500'
                    }}
                  >
                    Already have an account?
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Guest Option - Subtle Design */}
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={{ 
                backgroundColor: 'transparent',
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: `${Colors.ACCENT}40`,
                marginBottom: 32
              }}
              activeOpacity={0.7}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text 
                  style={{ 
                    fontSize: 16,
                    fontWeight: '600',
                    color: Colors.ACCENT,
                    letterSpacing: 0.3,
                    textAlign: 'center'
                  }}
                >
                  Continue as Guest
                </Text>
              </View>
            </TouchableOpacity>

            {/* Enhanced Bottom Accent - Modern Art */}
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                {/* Animated dots effect */}
                <View 
                  style={{ 
                    width: 40, 
                    height: 4, 
                    borderRadius: 2,
                    backgroundColor: Colors.ACCENT,
                    marginHorizontal: 3,
                    opacity: 0.8
                  }}
                />
                <View 
                  style={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: 6,
                    backgroundColor: Colors.GOLD,
                    marginHorizontal: 6,
                    shadowColor: Colors.GOLD,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                  }}
                />
                <View 
                  style={{ 
                    width: 40, 
                    height: 4, 
                    borderRadius: 2,
                    backgroundColor: Colors.ACCENT,
                    marginHorizontal: 3,
                    opacity: 0.8
                  }}
                />
              </View>
              
              {/* App version or tagline */}
              <Text style={{
                fontSize: 12,
                color: Colors.dark.text,
                opacity: 0.5,
                letterSpacing: 1,
                fontWeight: '500'
              }}>
                PREMIUM DINING EXPERIENCE
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}